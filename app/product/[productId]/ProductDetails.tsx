"use client";

import { Rating } from "@mui/material";

import { useCallback, useEffect, useState } from "react";

import Button from "@/app/Components/Button";
import { FaArrowRight, FaCheckCircle, FaShoppingBag } from "react-icons/fa";
import ProductImage from "../ProductImage";
import { OderItem } from "@/lib/Models/CartModel";

import { useRouter } from "next/navigation";
import { Product } from "@/lib/Models/ProductModel";
import data from "@/lib/data";
import Image from "next/image";
import CartService from "@/Hooks/UserCart";
import SetQuantity from "../SetQuantity";
//details for each products

const HorizonLine = () => {
  return <hr className=" w-[30%] my-2"></hr>;
};
interface PropductProps {
  product: any;
  item: any;
}
const ProductDetails: React.FC<PropductProps> = ({ product, item }) => {
  //initializing product state
  const router = useRouter();
  const { items, increase, decrease } = CartService();
  const [existItem, setExistItem] = useState<OderItem | null>();

  //check if a product exist in cart

  useEffect(() => {
    setExistItem(items.find((x) => x.id === item.id));
  }, [item, items]);
  //method for handling color for ech product
  const toCartHandler = () => {
    increase(item);
  };

  if (!product) {
    return <div className="">Product not found</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center   ">
      <div className="grid m-3 grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px] ">
        <div className="col-span-5 relative aspect-square">
          <Image
            alt=""
            fill
            className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
            src={product.image}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="my-2 text-3xl">{product.name}</h1>
        <div className="flex justify-start gap-2  items-center ">
          <Rating value={3} readOnly />
          <div className="">{product.numReviews} review(s)</div>
        </div>
        <HorizonLine />
        <div className="flex justify-start gap-2  items-center ">
          {product.description}
        </div>
        <HorizonLine />
        <div className="">
          <span>CATERGORY:</span> {product.catergory}
        </div>
        <div className="">
          <span>BRAND:</span> {product.brand}
        </div>
        <div className="">
          {product.conutInStock != 0 ? (
            <span className="text-green-700">In stock</span>
          ) : (
            <span className="text-red-700">Out of Stock</span>
          )}
        </div>
        <HorizonLine />
        {existItem ? (
          <>
            <div className="flex items-center gap-3 text-2xl">
              <FaCheckCircle className="text-green-800 text-xl" /> Product Added
              to Cart
            </div>
            <div className="max-w-[320px]">
              <Button
                outline
                label="View Cart "
                icon={FaArrowRight}
                onClick={() => {
                  router.push("/Cart");
                }}
              />
            </div>
          </>
        ) : (
          <>
            <HorizonLine />
            <div className="text-2xl font-semibold">R {product.price}</div>

            <div className="max-w-[320px]">
              <Button
                label="Add to Cart"
                onClick={toCartHandler}
                icon={FaShoppingBag}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default ProductDetails;
