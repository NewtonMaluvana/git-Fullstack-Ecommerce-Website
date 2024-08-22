import Banner from "./Components/Home/Banner";
import { truncate } from "fs";
import data from "@/lib/data";

import ProductCard from "./Components/Home/ProductCard";
import productService from "@/lib/services/getProduct";

export default async function Home() {
  const all = await productService.getAllProducts();
  return (
    <div className="p-2">
      <Banner />
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 my-6">
        {all.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
