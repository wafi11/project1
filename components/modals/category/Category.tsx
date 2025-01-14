import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastleRuins,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";

import React from "react";
import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  onClick: (value: string) => void;
  selected?: boolean;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  onClick,
  selected,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`rounded-xl border-2 p-4 flex gap-3
      hover:border-black transition cursor-pointer
      ${selected ? "border-gray-900" : "border-neutral-200"} `}>
      <Icon size={25} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;

export const DataCategories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This Property Is Close to the Beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This Property has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This Property has Modern",
  },
  {
    label: "CountrySide",
    icon: TbMountain,
    description: "This Property is in the countryside",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This Property has a pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This Property is on a island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This Property is close to lake!",
  },
  {
    label: "Skilig",
    icon: FaSkiing,
    description: "This Property has skiling activities!",
  },
  {
    label: "Castles",
    icon: GiCastleRuins,
    description: "This Property is in a castle!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This Property is in a spooky cavel!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This Property has camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This Property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This Property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This Property is in a barn!",
  },
  // {
  //     label : "Lux",
  //     icon : IoDiamond,
  //     description : "This Property is brand new and luxurious!"
  // },
];

interface BodyCategpriesProps {
  category: string;
  watch: any;
  setValue: () => void;
}

export const BodyCategpries = ({ category, watch }: BodyCategpriesProps) => {
  const setCustomValue = (id: string, value: any) => {
    //     setValue(id,value ,{
    //         shouldDirty : true,
    //         shouldTouch : true,
    //         shouldValidate : true,
    //     })
    //     console.log(value)
    // }
  };
  return <div></div>;
};
