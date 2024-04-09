import React from "react";
import { CardBody, CardContainer } from "../ui/3d-card";
import Image from "next/image";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

const Grid = () => {
  const imageUrl = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1697215175168-c363c30539bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Mountains, indonesia",
      cost: "$1999 / night",
    },
    {
      image:
        "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Mountains, Iran",
      cost: "$5999 / night",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1675826774815-35b8a48ddc2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Sea, Bali",
      cost: "$3999 / night",
    },
  ];
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center justify-center items-center ">
      <h1 className="text-4xl font-bold text-lime-600/30 tracking-widest">
        Full Resorts
      </h1>
      <p className="py-4 text-md font-light text-gray-500">
        Here is a location for reference
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 py-4 gap-2 md:gap-4 justify-center items-center">
        {imageUrl.map((img) => (
          <DirectionAwareHover imageUrl={img.image} key={img.image}>
            <p className="font-bold text-xl">{img.location}</p>
            <p className="font-normal text-sm">{img.cost}</p>
          </DirectionAwareHover>
        ))}
      </div>
    </div>
  );
};

export default Grid;
