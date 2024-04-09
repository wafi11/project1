"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useModals } from "../hooks/useModals";
import { IoMdClose } from "react-icons/io";
import Button from "../button";

interface ModaProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  body: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel: string | undefined;
}

export const Modal: React.FC<ModaProps> = ({
  isOpen,
  onClose,
  onSubmit,
  body,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="justify-center items-center flex overflow-hidden fixed inset-0 
       z-50 outline-none focus:outline-none bg-neutral-800/70">
      <div
        className="relative w-full md:w-4/6 lg:w-3/6 xl:2/5 my-6 mx-auto h-full 
               lg:h-auto md:h-auto">
        {/* Content */}
        <div
          className={`translate duration-300 h-screen
                       ${showModal ? "translate-y-0" : "translate-y-full"}
                       ${showModal ? "opacity-100" : "opacity-0"}
                       `}>
          <div
            className="translate h-auto lg:h-screen md:h-screen border-0 rounded-lg 
                           shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="p-2 justify-center  items-center flex ">
              <div className="flex flex-col px-4 relative gap-2">
                <h2 className="text-xl font-bold tracking-wide text-emerald-500/90 text-center">
                  Welcome To Nexttravel
                </h2>
                <span className="text-sm font-light">
                  Add Your Travel and destinations
                </span>
              </div>
              <button
                className="absolute right-9 text-2xl "
                onClick={handleClose}>
                <IoMdClose />
              </button>
            </div>
            <div className="relative p-6 flex-auto">{body}</div>
            {/* FOOTER */}
            <div className="flex flex-col gap-2 p-4 justify-center items-center">
              <div className="flex flex-row items-center gap-4 w-full text-black absolute bottom-0 ">
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    outline
                    disabled={disabled}
                    label={secondaryActionLabel}
                    onClick={handleSecondaryAction}
                  />
                )}
                <Button
                  outline
                  disabled={disabled}
                  label={actionLabel}
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
