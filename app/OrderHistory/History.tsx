"use client";

import { Order } from "@/lib/Models/CartModel";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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

    <div className="">
      {orders.map((order: Order) => (
        <div className="w-full grid grid-cols-12">
          <div className="col-span-2">{order._id.substring(20, 24)}</div>
          <div className="col-span-2">{order.createdAt.substring(0, 10)}</div>
          <div className="col-span-2">{order.totalPrice}</div>
          <div className="col-span-2">
            {order.isPaid && order.paidAt
              ? `${order.paidAt.substring(0, 10)}`
              : "not paid"}
          </div>
          <div className="col-span-2">
            {order.isDelivered && order.deliveredAt
              ? `${order.deliveredAt.substring(0, 10)}`
              : "not delivered"}
          </div>
          <div className="col-span-2">
            {" "}
            <Link href={`/order/${order._id}`} passHref>
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
