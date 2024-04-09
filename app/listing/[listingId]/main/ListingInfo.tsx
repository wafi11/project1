"use client";
import React, { useMemo } from "react";

import { IconType } from "react-icons";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";
import useCountries from "@/components/modals/input/useCountries";
import { SafeUser } from "@/components/types";

interface ListingInfoProps {
  user: SafeUser;

  description: string;
  category:
    | {
        icon: IconType;
        description: string;
        label: string;
      }
    | undefined;
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  category,
}) => {
  const { getByValue } = useCountries();
  //   const coordinate = getByValue(locationValue)?.latIng;
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/utils/map/Map"), {
        ssr: false,
      }),
    []
  );
  return (
    <div className="col-span-4 flex flex-col gap-8 ">
      <div className="fkex flex-col gap-2">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <div>Hosted by : {user?.name}</div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div className="text-lg font-light text-neutral-500">{description}</div>
      <hr />
      {/* <Map center={coordinate} /> */}
    </div>
  );
};

export default ListingInfo;
