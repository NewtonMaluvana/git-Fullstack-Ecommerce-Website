"use client";
import { MdDelete } from "react-icons/md";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaRecycle } from "react-icons/fa";
import SetQuantity from "../product/SetQuantity";
import { useState } from "react";
import Button from "../Components/Button";

import { useRouter } from "next/navigation";
import CartService from "@/Hooks/UserCart";

const ClientCart = () => {
  const { items, increase, decrease, itemsPrice, del } = CartService();

  var sum = 0;
  const router = useRouter();
  if (items.length === 0) {
    return (
      <div className=" flex items-center flex-col gap-4 justify-center">
        <h1 className="flex justify-center text-3xl font-semibold mb-10">
          Shopping Cart
        </h1>
        <h1 className="text-red-600">You Cart is Empty</h1>
        <Link href="/" className="flex gap-2 text-2xl items-center">
          <FaArrowLeft /> Go Shooping
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h1 className="flex justify-center text-3xl font-semibold mb-8">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-12 gap-6  w-full">
        <div className="  w-full col-span-8">
          {items.map((product) => {
            return (
              <div
                key={2}
                className="flex border-y-2 my-2 py-2 items-center justify-between  col-span-8 px-6"
              >
                <div className="col-span-2 flex items-center">
                  <Link href={`/product/${product.id}`}>
                    <div className="relative w-[70px] h-[70px] aspect-squares">
                      <Image
                        fill
                        className="object-contain mr-5"
                        alt="iphone phone"
                        src={product.image}
                      />
                    </div>
                  </Link>

                  <div className=" flex flex-col gap-4">
                    <p className="text-lg font-medium">
                      {product.name.length >= 25
                        ? product.name.substring(0, 23) + "..."
                        : product.name}
                    </p>

                    <p>{}</p>

                    <button
                      onClick={() => {
                        del(product);
                      }}
                      className=" flex items-center gap-1  underline cursor-pointer"
                    >
                      Remove <MdDelete className="text-red-800" />
                    </button>
                  </div>
                </div>

                <div className="text-center text-xl font-semibold">
                  <p className="m-2 text-lg font-normal">Price:</p>R
                  {product.price}
                </div>

                <div className="">
                  <SetQuantity
                    cartCounter={true}
                    cartProduct={product}
                    handleQtyDecrease={() => {
                      decrease(product);
                    }}
                    handleQtyIncrease={() => {
                      increase(product);
                    }}
                  />
                </div>
                <div className="">
                  <p>Total</p> R {product.price * product.qty}
                </div>
              </div>
            );
          })}
        </div>
        <div className=" col-span-4 w-full p-4">
          <div className="flex justify-between">
            <p className="text-2xl">Sub Total:</p>
            <p>R {itemsPrice}</p>
          </div>
          <Button
            label="Checkout "
            icon={FaArrowRight}
            onClick={() => {
              router.push("/Checkout");
            }}
          />
          <p className="w-full text-center text-pretty">
            Taxes and Shipping are calculated at checkout
          </p>
        </div>
      </div>
    </div>
  );
};
export default ClientCart;
