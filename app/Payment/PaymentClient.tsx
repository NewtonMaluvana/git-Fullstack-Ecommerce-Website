"use client";

import CartService from "@/Hooks/UserCart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Button from "../Components/Button";
import { FaAddressBook, FaCheck } from "react-icons/fa";
import { useSession } from "next-auth/react";

const PaymentClient = () => {
  const router = useRouter();
  const { getPaymentMethod, paymentMethod, shippingAddress } = CartService();
  const [Selectedpaymethod, setSelectedPayMethod] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getPaymentMethod(Selectedpaymethod);
    router.push("/PlaceOrder");
  };

  useEffect(() => {
    if (!shippingAddress.address) {
      router.push("Checkout");
      toast.success("Please enter your address");
    }

    setSelectedPayMethod(paymentMethod || "PayPal");
  }, [paymentMethod, router, shippingAddress.address]);
  const { data: session } = useSession();
  if (!session) {
    toast.error("Please login first");
    router.push("/Login");
  }

  return (
    <div className="">
      <div className="mx-auto my-4 w-[90%] bg-slate-500 p-2 rounded-md shadow-xl">
        <h1 className="text-center text-4xl text-purple-600">Payment Method</h1>

        <form className="" onSubmit={handleSubmit}>
          {["Stripe", "PayPal", "Cash On Delivery(COD)"].map((payment) => (
            <div key={payment} className="">
              <label className="m-2 flex justify-between cursor-pointer">
                <span className="text-white text-2xl flex   text-wrap">
                  {payment}
                </span>
                <input
                  className="w-6 text-black cursor-pointer"
                  type="radio"
                  value={payment}
                  checked={Selectedpaymethod === payment}
                  onChange={() => setSelectedPayMethod(payment)}
                />
              </label>
            </div>
          ))}

          <div className=" flex flex-col md:flex-row md:gap-12 gap-2 px-2 lg:px-12">
            <Button
              icon={FaAddressBook}
              label="Back"
              onClick={() => {
                router.back();
              }}
            />
            <Button
              icon={FaCheck}
              label="Next"
              onClick={() => {
                router.push("/Payment");
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default PaymentClient;
