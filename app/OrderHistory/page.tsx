import { Metadata } from "next";
import MyOrders from "./History";

export const metadata: Metadata = {
  title: "Order History",
};
export default function OrderHistory() {
  return (
    <div className=" w-full">
      <h1 className="text-2xl py-2">My Orders</h1>
      <MyOrders />
    </div>
  );
}
