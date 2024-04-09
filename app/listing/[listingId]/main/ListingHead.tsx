"use client";
import useCountries from "@/components/modals/input/useCountries";
import { SafeUser } from "@/components/types";
import Image from "next/image";
import React from "react";
import Heading from "./utils/heading/Heading";
import Heart from "./utils/button/Heart";

interface ListingHeadProps {
  id: string;
  imageSrc: string;
  locationValue: string;
  title: string;
  currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  id,
  imageSrc,
  locationValue,
  title,
  currentUser,
}) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);
  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region},${location?.label}`}
      />
      <div className="w-full h-[60vh] rounded-xl overflow-hidden relative">
        <Image alt="../" src={imageSrc} fill className="object-cover w-full" />
        <div className="absolute right-5 top-5">
          <Heart listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
