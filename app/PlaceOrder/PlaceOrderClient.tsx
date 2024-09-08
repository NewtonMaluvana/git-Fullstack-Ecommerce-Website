"use client";
import CartService from "@/Hooks/UserCart";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useSWRMutation from "swr/mutation";
import Image from "next/image";
import { useSession } from "next-auth/react";

const PlaceOrderClient = () => {
  const router = useRouter();
  const {
    paymentMethod,
    shippingAddress,
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    clear,
  } = CartService();
  const { data: session } = useSession();
  const { trigger: placeOrder, isMutating: isPlacing } = useSWRMutation(
    `/api/orders/mine`,
    async (url) => {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethod,
          shippingAddress,
          items,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        clear();
        toast.success("Order placed successfully");
        return router.push(`/order/${data.order._id}`);
      } else {
        toast.error(data.message);
      }
    }
  );

  if (!session) {
    toast.error("Please login first");
    router.push("/Login");
  }
  useEffect(() => {
    if (!paymentMethod) {
      router.push("/payment");
    }
    if (items.length === 0) {
      router.push("/");
    }
  }, [paymentMethod, router]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) <></>;

  if (!session) {
    toast.error("Please login first");
    router.push("/Login");
  }
  return (
    <div className=" p-6">
      <div className="flex md:flex-row flex-col  gap-2 ">
        <div className="col-span-8 gap-4  flex flex-col w-[100%]">
          <section className="flex  text-white rounded-md text-xl flex-col gap-2 justify-center p-4 w-full bg-slate-600">
            <h1 className="text-2xl">Shipping Adress</h1>
            <p>{shippingAddress.fullName}</p>
            <p>{shippingAddress.address}</p>
            <Link
              href="/Checkout"
              className=" bg-slate-800 p-2 text-sm flex justify-center items-center rounded-md w-10 h-7 text-white"
            >
              Edit
            </Link>
          </section>
          <section className="flex  text-white rounded-md text-xl flex-col gap-2 justify-center p-4 w-full bg-slate-600">
            <h1>Payment Method</h1>
            <p>{paymentMethod}</p>
            <Link
              href="/Payment"
              className=" bg-slate-800 rounded-md w-10 text-sm p-2 flex justify-center items-center h-7 text-white"
            >
              Edit
            </Link>
          </section>
          <section className="bg-slate-600 p-2 rounded-md text-white">
            <h1 className="text-2xl mb-2">Items</h1>
            {items.map((e: any) => (
              <div className="w-full grid grid-cols-8   justify-between text-start">
                <div className="w-12 h-12 col-span-2">
                  <Image
                    className="w-full h-full object-contain"
                    alt="product Image"
                    height={50}
                    width={50}
                    src={e.image}
                  />
                </div>

                <div className=" text-start col-span-2">{e.name}</div>
                <div className=" text-center col-span-2">{e.qty}</div>
                <div className=" text-end col-span-2 me-4">
                  R {e.price * e.qty}
                </div>
              </div>
            ))}
            <Link
              href="/Cart"
              className="my-4 bg-slate-800 p-2 text-sm flex justify-center items-center rounded-md w-10 h-7 text-white"
            >
              Edit
            </Link>
          </section>
        </div>
        <div className="col-span-4 w-full bg-slate-800 h-[300px] p-2 rounded-md flex flex-col justify-center gap-4 mx-auto text-white">
          <h1 className="text-3xl">Order Summary</h1>
          <ul className="text-xl">
            <li className="flex justify-between">
              <span>Items</span> <span>R {itemsPrice}</span>
            </li>
            <li className="flex justify-between">
              <span>Shipping</span> <span>R {shippingPrice}</span>
            </li>
            <li className="flex justify-between">
              <span>Tax</span> <span>R{taxPrice}</span>
            </li>
            <li className="flex justify-between">
              <span>Total</span> <span>R {totalPrice}</span>
            </li>
          </ul>
          <div className="flex justify-center items-center">
            <button
              onClick={() => placeOrder()}
              className=" md:w-[250px] w-min-[50px] w-[200px]  rounded-md py-4 p-2 bg-purple-800 text-white"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlaceOrderClient;
