"use client";
import React, { useCallback } from "react";
import { useModals } from "../hooks/useModals";
import { SafeUser } from "../types";

interface ProductClickProps {
  currentUser?: SafeUser | null;
}

const ProductClick: React.FC<ProductClickProps> = ({ currentUser }) => {
  const { onOpenModals, onCloseModals } = useModals();
  const handleOpen = useCallback(() => {
    onOpenModals();
  }, []);
  return (
    <>
      {currentUser && (
        <div
          className="relative bg-gray-200/55 rounded-xl hover:bg-neutral-100 
      transition cursor-pointer">
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={handleOpen}
              className="hideen md:block text-sm font-semibold py-3 px-4 ">
              AirBnb your Home
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductClick;
