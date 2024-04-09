"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Button from "../button";
import { useModals } from "../hooks/useModals";
import { useRouter } from "next/navigation";
import { MenuItems } from "./MenuItems";
import getCurrentUser from "@/app/action/getCurrentUser";
import { SafeUser } from "../types";
import { signOut } from "next-auth/react";
import { BiMenu } from "react-icons/bi";
import { usePopup } from "../hooks/usePopUp";
import Popup from "./Popup";
import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";

interface MenuProps {
  currentUser?: SafeUser | null;
}

const Menu: React.FC<MenuProps> = ({ currentUser }) => {
  const [open, setIsOpen] = useState(false);
  const router = useRouter();
  const [showModal, setShowModal] = useState(open);

  const menuRef = useRef<HTMLElement>(null);

  const handleLogout = useCallback(() => {
    signOut();
  }, []);

  return (
    <div
      className=" relative font-light mr-3 bg-gray-200/55 rounded-xl hover:bg-neutral-100 
      transition cursor-pointer">
      <Dialog>
        <DialogTrigger asChild>
          <button className="font-semibold text-md py-3 px-4">
            <BiMenu size={20} />
          </button>
        </DialogTrigger>
        <DialogContent className=" absolute rounded-xl translate-y-5 shadow-md w-[10vw] overflow-hidden  right-0  top-12  text-sm">
          {currentUser ? (
            <>
              <MenuItems
                onClick={() => router.push("/listing")}
                label="My Listing"
              />
              <MenuItems onClick={handleLogout} label="Logout" />
            </>
          ) : (
            <>
              <MenuItems onClick={() => router.push("/login")} label="Login" />
              <MenuItems
                onClick={() => router.push("register")}
                label="SignUp"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Menu;
