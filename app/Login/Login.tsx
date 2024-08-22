"use client";

import { useEffect, useState } from "react";
import Inputs from "../Components/Forms/Inputs";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../Components/Button";
import { FaFacebook, FaGithub, FaGoogle, FaWpforms } from "react-icons/fa";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { CurrentUser } from "@/types";

interface LoginProps {
  currentUser: CurrentUser;
}
const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const Sparams = useSearchParams();
  const callbackUrl = Sparams?.get("callbackUrl") || "/";
  // useEffect(() => {
  //   if (true) {
  //     router.push("/");
  //     router.refresh();
  //   }
  // }, []);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (session && session.user) {
      router.push(callbackUrl);
    }
  }, [callbackUrl, Sparams, router, session]);

  const formSubmit: SubmitHandler<FieldValues> = (form) => {
    setIsLoading(true);

    signIn("credentials", {
      ...form,
    });
  };

  if (session && session.user) {
    return <p className="text-center ">Already loged in Redirecting.....</p>;
  }
  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="w-full flex flex-col justify-center items-center"
    >
      <h1 className="text-center text-3xl font-semibold mb-12 -4 ">Sign In</h1>

      <div className="">
        <Button
          outline
          icon={FaGoogle}
          onClick={() => {
            signIn("google");
          }}
          label="Continue with Google"
        />
      </div>

      <hr className="w-full bg-slate-800" />

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
      {Sparams.get("error") && (
        <div
          className="text-red-500
        "
        >
          {Sparams.get("error") === "CredentialsSignin"
            ? "Invalid Email or password"
            : Sparams.get("error")}
        </div>
      )}
      <div className="w-9/12">
        <Button
          label="Log In"
          icon={FaWpforms}
          onClick={handleSubmit(formSubmit)}
        />
      </div>

      <Link href="/Register" className="mt-4 text-black ">
        Dont have an Account? <span className="underline">Sign Up</span>
      </Link>
    </form>
  );
};
export default Login;
