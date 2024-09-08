"use client";

import CartService from "@/Hooks/UserCart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";

const CartCount = () => {
  const router = useRouter();
  const { items } = CartService();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      onClick={() => router.push("/Cart")}
      className=" cursor-pointer relative"
    >
      <FaShoppingBag className="text-2xl text-white" />

      <span 
        className={`absolute right-[-13px] top-[-13px] text-xs ${
          items.reduce((a, c) => a + c.qty, 0) === 0
            ? "bg-red-600"
            : "bg-blue-500"
        } text-white rounded-full w-6 h-6   flex justify-center items-center`}
      >
        {items.reduce((a, c) => a + c.qty, 0) > 9
          ? 9 + "+"
          : items.reduce((a, c) => a + c.qty, 0)}
      </span>
    </div>
  );
};
export default CartCount;
