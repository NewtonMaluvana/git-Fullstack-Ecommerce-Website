"use client";

import CartService from "@/Hooks/UserCart";
import UserCart from "@/Hooks/UserCart";
import { ShippingAddress } from "@/lib/Models/CartModel";
import { TRACE_OUTPUT_VERSION } from "next/dist/shared/lib/constants";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "../Components/Button";
import { FaAddressBook, FaCheck } from "react-icons/fa";
import Inputs from "../Components/Forms/Inputs";
import { useSession } from "next-auth/react";

const CheckoutClient = () => {
  const router = useRouter();
  const { getShippingAddress, Shipaddress } = CartService();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ShippingAddress>({
    defaultValues: {
      fullName: "",
      address: "",
      city: "",
      country: "",
      postalCode: 0,
    },
  });

  useEffect(() => {
    setValue("fullName", Shipaddress.fullName);
    setValue("address", Shipaddress.address);
    setValue("city", Shipaddress.city);
    setValue("country", Shipaddress.country);
    setValue("postalCode", Shipaddress.postalCode);
  }, [setValue, Shipaddress]);

  const formSubmit: SubmitHandler<ShippingAddress> = async (data) => {
    getShippingAddress(data);

    router.push("/Payment");
  };

  const Forminput = ({
    id,
    name,
    required,
  }: {
    id: keyof ShippingAddress;
    name: string;
    required?: boolean;
  }) => (
    <div className="mb-2 ">
      {/* <input
        type="text"
        id={id}
        {...register(id, { required: required && `${name} is required` })}
        className="w-full max-w-sm"
      /> */}

      <Inputs
        id={id}
        register={register}
        label={name}
        required
        errors={errors}
      />
      {errors[id]?.message && (
        <div className="text-red-800">{errors[id]?.message}</div>
      )}
    </div>
  );
  const { data: session } = useSession();
  if (!session) {
    return <p className="text-center ">Already logged in Redirecting.....</p>;
  }
  return (
    <div className="m-2 p-4 w-full z-[2] rounded-md bg-slate-800">
      <h1 className="text-center  text-3xl font-semibold text-purple-600 ">
        Shipping Address
      </h1>
      <form onSubmit={handleSubmit(formSubmit)}>
        <Forminput name="Full Name" id="fullName" required />
        <Forminput name="Address" id="address" required />
        <Forminput name="City" id="city" required />
        <Forminput name="Postal Code" id="postalCode" required />
        <Forminput name="Country" id="country" required />
        <div className=" px-12">
          <Button
            icon={FaCheck}
            label="Next"
            onClick={() => {
              router.push("/Payment");
            }}
          />

          <button
            type="submit"
            onClick={() => {
              router.push("/Payment");
            }}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
export default CheckoutClient;
