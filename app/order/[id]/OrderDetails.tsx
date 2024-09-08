"use client";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import useSWR from "swr";

export default function OrderDetails({
  orderId,
  paypalClientId,
}: {
  orderId: string;
  paypalClientId: string;
}) {
  const router = useRouter();
  const { data: session } = useSession();
  function createPayPalOrder() {
    return fetch(`/api/orders/${orderId}/paypalOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((order) => order.id);
  }

  function onApprovePayPalOrder(data: any) {
    return fetch(`/api/orders/${orderId}/capturePaypalOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((orderData) => {
        toast.success("Order paid successfully");
      });
  }

  if (!session) {
    toast.error("Please login first");
    router.push("/Login");
  }
  const { data, error } = useSWR(`/api/orders/${orderId}`);
  if (!data)
    return (
      <div className=" h-screen flex justify-center items-center">
        Loading....
      </div>
    );
  const {
    paymentMethod,
    shippingAddress,
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    isDelivered,
    deliveredAt,
    isPaid,
    paidAt,
  } = data;
  return (
    <div className=" p-6">
      <h1 className="text-3xl my-4">
        Order: <span className="text-xl">{orderId}</span>{" "}
      </h1>
      <div className="flex md:flex-row flex-col  gap-2 ">
        <div className="col-span-8 gap-4  flex flex-col w-[100%]">
          <section className="flex  text-white rounded-md text-xl flex-col gap-2 justify-center p-4 w-full bg-slate-600">
            <h1 className="text-2xl">Shipping Adress</h1>
            <p>{shippingAddress.fullName}</p>
            <p>{shippingAddress.address}</p>
            <div className="">
              {isDelivered ? (
                <p className="text-green-500">delivered</p>
              ) : (
                <p className="text-red-500">Not delivered</p>
              )}
            </div>
          </section>
          <section className="flex  text-white rounded-md text-xl flex-col gap-2 justify-center p-4 w-full bg-slate-600">
            <h1>Payment Method</h1>
            <p>{paymentMethod}</p>
            <div className="">
              {isPaid ? (
                <p className="text-green-500"> Paid</p>
              ) : (
                <p className="text-red-500">Not Paid</p>
              )}
            </div>
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

            <div className="flex justify-center items-center">
              {!isPaid && paymentMethod === "PayPal" && (
                <li className="w-[70%] z-0 mt-2">
                  <PayPalScriptProvider options={{ clientId: paypalClientId }}>
                    <PayPalButtons
                      createOrder={createPayPalOrder}
                      onApprove={onApprovePayPalOrder}
                    />
                  </PayPalScriptProvider>
                </li>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
