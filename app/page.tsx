import Banner from "./Components/Home/Banner";

import CheckroomIcon from "@mui/icons-material/Checkroom";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ProductCard from "./Components/Home/ProductCard";
import productService from "@/lib/services/getProduct";
import { MdPhoneAndroid, MdShop } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/scss";
// import "swiper/scss/navigation";
// import "swiper/scss/pagination";
import { FaDesktop } from "react-icons/fa";
import { Catergory } from "./Components/Catergory";
export default async function Home() {
  let all = await productService.getAllProducts();
  const Best = await productService.getFeatured();
  const iphone = await productService.getIphone("Iphone 13 pro ");
  const categories = [
    "All Products",
    "electronic",
    "clothes",
    "Phones",
    "shoes",
  ];
  const cat = [
    {
      name: "All Products",
      logo: <MdShop />,
    },
    {
      name: "electronic",
      logo: <FaDesktop />,
    },
    {
      name: "clothes",
      logo: <CheckroomIcon />,
    },
    {
      name: "Phones",
      logo: <MdPhoneAndroid />,
    },
    {
      name: "shoes",
      logo: <SportsSoccerIcon />,
    },
  ];
  let cater = null;

  return (
    <div className="p-2 pt-0 ">
      <div className="w-full h-16 px-5 rounded-md my-1 bg-slate-400 flex justify-between">
        {cat.map((e) => (
          <div
            // onClick={() => {}}
            className="text-blue-600 hover:scale-110 duration-1000 cursor-pointer p-1 flex gap-2 justify-center text-3xl items-center"
          >
            {e.logo}
          </div>
        ))}
      </div>
      <Banner />
      <div
        id="shop"
        className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 my-6"
      >
        {all.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
      /*{" "}
    </div>
  );
}
