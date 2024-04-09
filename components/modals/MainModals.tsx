"use client";
import React, { useMemo, useState } from "react";
import Modal from "./index";
// import useRentModals from '../../hooks/RentModals'
// import Heading from '../../utils/heading/Heading'
import { DataCategories } from "./category/Category";
import CategoryInput from "./category/Category";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import RentInput from './RentInput'
import dynamic from "next/dynamic";
// import Counter from './Counter'
// import ImageUpload from './ImageUpload'
// import Input from '../../utils/input/Input'
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useModals } from "@/components/hooks/useModals";
import Input from "./input";
import ImageUpload from "./input/ImageUpload";
import InputDescription from "./inputDescription";
import Map from "@/components/utils/map/Map";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  IMAGE = 2,
  DESCRIPTION = 3,
  PRICE = 4,
}

const RentModals = () => {
  // const RentModal = useRentModals()
  const { isOpenModals, onCloseModals } = useModals();
  const [steps, setSteps] = useState(STEPS.CATEGORY);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const category = watch("category");
  const location = watch("location");
  const guestCount = watch("guestCount");
  const bathroomCount = watch("bathroomCount");
  const roomCount = watch("roomCount");
  const imageSrc = watch("imageSrc");
  const description = watch("description");

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/utils/map/Map"), {
        ssr: false,
      }),
    [location]
  );

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    console.log(value);
  };

  const onBack = () => {
    setSteps((value) => value - 1);
  };
  const onNext = () => {
    setSteps((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (steps !== STEPS.PRICE) {
      return onNext();
    }
    setIsLoading(true);
    axios
      .post("api/listing", data)
      .then(() => {
        console.log(data);
        toast.success("Listing Success!");
        router.refresh();
        reset();
        onCloseModals();
        setSteps(STEPS.CATEGORY);
      })
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const actionLabel = useMemo(() => {
    if (steps === STEPS.PRICE) {
      return "Create";
    }
    return "Next";
  }, [steps]);
  const secondaryActionLabel = useMemo(() => {
    if (steps === STEPS.CATEGORY) {
      return undefined;
    }
    return "Back";
  }, [steps]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-[58vh] sm:h-[70vh] md:h-[75vh] overflow-y-auto">
        {DataCategories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (steps === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Input
          value={location}
          onChange={(value) => setCustomValue("location", value)}
        />
        <Map center={location?.latIng} />
      </div>
    );
  }

  if (steps === STEPS.IMAGE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <ImageUpload
          value={imageSrc}
          onChange={(value) => setCustomValue("imageSrc", value)}
        />
      </div>
    );
  }

  if (steps === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className=" flex flex-col gap-8">
        <InputDescription
          id="title"
          label="Title"
          disabeld={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <InputDescription
          id="description"
          label="Description"
          disabeld={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  if (steps === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <InputDescription
          id="price"
          label="Price"
          formatPrice
          type="number"
          disabeld={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  return (
    <Modal
      isOpen={isOpenModals}
      onClose={onCloseModals}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryAction={steps === STEPS.CATEGORY ? undefined : onBack}
      body={bodyContent}
      secondaryActionLabel={`${secondaryActionLabel}`}
    />
  );
};

export default RentModals;
