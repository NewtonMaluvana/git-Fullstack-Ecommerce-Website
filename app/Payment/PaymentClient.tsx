"use client";

import CartService from "@/Hooks/UserCart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Button from "../Components/Button";
import { FaAddressBook, FaCheck } from "react-icons/fa";

const PaymentClient = () => {
  const router = useRouter();
  const { getPaymentMethod, paymentmethod, Shipaddress } = CartService();
  const [Selectedpaymethod, setSelectedPayMethod] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getPaymentMethod(Selectedpaymethod);
    router.push("/PlaceOrder");
  };

  useEffect(() => {
    if (!Shipaddress.address) {
      router.push("Checkout");
      toast.success("Please enter your address");
    }

    setSelectedPayMethod(paymentmethod || "PayPal");
  }, [paymentmethod, router, Shipaddress.address]);
  return (
    <div className="mx-auto my-4 w-[50%] bg-slate-500 p-4 rounded-md shadow-xl">
      <h1 className="text-center text-4xl text-purple-600">Payment Method</h1>

      <form onSubmit={handleSubmit}>
        {["Stripe", "PayPal", "Cash On Delivery(COD)"].map((payment) => (
          <div className="">
            <label className="m-4 flex justify-between cursor-pointer">
              <span className="text-white text-2xl">{payment}</span>
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

        <div className=" flex gap-12  px-12">
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
  );
};
export default PaymentClient;
