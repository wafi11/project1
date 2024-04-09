import React from "react";
import { FieldValue, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputDescriptionProps {
  id: string;
  label: string;
  type?: string;
  disabeld?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldValues;
}
const InputDescription: React.FC<InputDescriptionProps> = ({
  id,
  label,
  type,
  disabeld,
  formatPrice,
  required,
  register,
  errors,
}) => {
  console.log(required);
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 aboslute top-5 left-2"
        />
      )}
      <input
        type={type}
        id={id}
        disabled={disabeld}
        {...register(id, { required })}
        placeholder=""
        className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md 
      outline-none transition disabeld:opacity-70 disabled:cursor-not-allowed`}
      />
      <label
        className={`
          absolute 
          text-md
          duration-150 
          transform 
          -translate-y-3 
          top-5 
          z-10 
          origin-[0] 
          ${formatPrice ? "left-9" : "left-4"}
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? "text-black-500" : "text-zinc-400"}
        `}></label>
      {label}
    </div>
  );
};

export default InputDescription;
