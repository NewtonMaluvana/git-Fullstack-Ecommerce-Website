"use client";

import { Order } from "@/lib/Models/CartModel";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";

export default function MyOrders() {
  const router = useRouter();
  const { data: orders, error } = useSWR(`/api/orders/mine`);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  if (error) return "An error has occurred.";
  if (!orders) return "Loading...";

  return (
    /* <th>ID</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th>ACTION</th> */

    <div className="flex gap-4 flex-col">
      {orders.map((order: Order) => (
        <div
          key={order._id}
          className="w-[80%] rounded-md md:grid text-center md:w-full flex flex-col  mx-auto md:grid-cols-12 bg-slate-600 p-8 text-white"
        >
          <div className="col-span-2 my-2 text-green-600">
            {order._id.substring(20, 24)}
          </div>
          <div className="col-span-2">{order.createdAt.substring(0, 10)}</div>
          <div className="col-span-2">R {order.totalPrice}</div>
          <div className="col-span-2 text-red-500 text-lg capitalize">
            {order.isPaid && order.paidAt
              ? `${order.paidAt.substring(0, 10)}`
              : "not paid"}
          </div>
          <div className="col-span-2 capitalize">
            {order.isDelivered && order.deliveredAt
              ? `${order.deliveredAt.substring(0, 10)}`
              : "not delivered"}
          </div>
          <div className="col-span-2 my-2">
            <Link
              className="rounded-md bg-blue-700 p-2"
              href={`/order/${order._id}`}
              passHref
            >
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
