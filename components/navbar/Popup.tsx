"use client";
import React, { useCallback } from "react";
import { SafeUser } from "../types";
import { MenuItems } from "./MenuItems";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { usePopup } from "../hooks/usePopUp";

interface PopupProps {
  currentUser?: SafeUser | null;
}

const Popup: React.FC<PopupProps> = ({ currentUser }) => {
  const router = useRouter();
  const { isOpenModals } = usePopup();
  const handleLogout = useCallback(() => {
    signOut();
  }, []);
  return (
    <>
      {isOpenModals && (
        <div
          className="w-full h-full bg-black right-10 fixed rounded-xl shadow-md [25vw] overflow-hidden
        top-12 text-sm ">
          {/* <div
            className="right-10 fixed rounded-xl shadow-md [25vw] bg-white overflow-hidden 
          top-12 text-sm "> */}
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItems
                onClick={() => router.push("/listing")}
                label="My Listing"
              />
              <MenuItems onClick={handleLogout} label="Logout" />
              <MenuItems onClick={() => router.push("/login")} label="Login" />
              <MenuItems
                onClick={() => router.push("register")}
                label="SignUp"
              />
            </>
            {/* </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
