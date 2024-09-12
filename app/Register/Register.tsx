"use client";

import { useEffect, useState } from "react";
import Inputs from "../Components/Forms/Inputs";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../Components/Button";
import { FaGoogle, FaWpforms } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter, useSearchParams } from "next/navigation";

import { error } from "console";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isERROR, setError] = useState(false);
  const { data: session } = useSession();
  const Sparams = useSearchParams();
  const callbackUrl = Sparams?.get("callbackUrl") || "/";
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  useEffect(() => {
    if (session && session.user) {
      router.push(callbackUrl);
    }
  }, [callbackUrl, Sparams, router, session]);
  const formSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { name, email, password } = data;
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.ok) {
        setIsLoading(false);
        toast.success("user created");
        return router.push(
          `/Login?callbackUrl=${callbackUrl}&success===User created`
        );
      } else {
        setIsLoading(false);
        const da = await res.json();
        throw new Error(da.message);
      }
    } catch (error: any) {
      setError(true);
    }
  };
  if (session && session.user) {
    return <p className="text-center ">Already logged in Redirecting.....</p>;
  }
  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="w-full flex flex-col justify-center items-center"
    >
      <h1 className="text-center text-3xl font-semibold mb-12 -4 ">
        Sign Up for Jay Shopping
      </h1>

      <hr className="w-full bg-slate-800" />
      <Inputs
        label="Name"
        id="name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Inputs
        label="Email"
        id="email"
        type="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Inputs
        label="password"
        id="password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {isERROR && (
        <div className="text-red-600 text-center">
          User with that email already exist
        </div>
      )}
      <div className="w-9/12">
        <Button
          label={isLoading ? "Loading" : "Sign Up"}
          icon={FaWpforms}
          onClick={handleSubmit(formSubmit)}
        />
      </div>

      <Link href="/Login" className="mt-4 text-orange-700 ">
        Already have an Account? <span className="underline"> Login</span>
      </Link>
    </form>
  );
};
export default Register;
