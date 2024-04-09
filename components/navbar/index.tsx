import React from "react";
import Link from "next/link";
import Menu from "./Menu";
import { SafeUser } from "../types";
import ProductClick from "./Cart";

interface navbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<navbarProps> = ({ currentUser }) => {
  return (
    <header className=" w-full absolute z-10 flex ">
      <div className="w-full h-[70px] mx-auto flex justify-between gap-6">
        <Link href={"/"} className="text-3xl font-bold text-gray-200 px-7 py-4">
          NEXTSTORE
        </Link>
        {/* <InputSearch /> */}
        <div className="flex flex-row items-center gap-3 mx-4">
          <ProductClick currentUser={currentUser} />
          <Menu currentUser={currentUser} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
