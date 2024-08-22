"use client";

import { Product } from "@/lib/Models/ProductModel";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/product/${product.id}`)}
      className="col-span-1
    cursor-pointer border-[2px] rounded hover:border-black hover:scale-110 duration-1000"
    >
      <div className="m-auto p-4 flex flex-col items-center">
        <div className="w-2/3 h-48  mx-auto">
          <Image
            src={product.image}
            width={250}
            height={400}
            alt=""
            className="w-full h-full object-contain m-auto"
          />
        </div>
        <div className=" p-2 text-center">
          {product.name.length < 25
            ? product.name.substring(0, 25)
            : product.name.substring(0, 25) + ".."}
        </div>
        <div className=" flex items-center justify-center">
          <Rating value={product.rating} readOnly />({product.numReviews})
        </div>
        <div className="text-center p-3 text-orange-500">R {product.price}</div>
      </div>
    </div>
  );
};
export default ProductCard;
