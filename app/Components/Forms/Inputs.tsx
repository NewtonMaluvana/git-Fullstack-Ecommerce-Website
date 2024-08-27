"use client";

import { Labrada } from "next/font/google";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;

  required: boolean;
  register: UseFormRegister<any>;
  errors: FieldErrors;
}
const Inputs: React.FC<InputProps> = ({
  id,
  label,

  type,
  disabled,

  required,
  register,
  errors,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        {...register(id, { required })}
        disabled={disabled}
        placeholder=""
        className={`peer w-full my-4 p-4 pt-6 outline-none border-2 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed 
            ${errors[id] ? "border-red-700" : "border-slate-500"}
            ${type ? "" : " capitalize"}
            ${errors[id] ? "focus:border-red-700" : "focus:border-slate-500"}`}
      />

      <label
        className={`peer-focus:scale-75
         absolute
         text-orange-600
          cursor-text
           text-md
           bg-transparent
          duration-500 
          transform
          -translate-y-1
          top-5
          z-10
          origin-[0]
          left-4
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-4
          peer-focus:-translate-y-1
          ${errors[id] ? "text-red-700" : "text-slate-500"}
          ${errors[id] ? "focus:text-red-700" : "focus:text-slate-500"}
          `}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
export default Inputs;
