import Image from "next/image";
import { FaShoppingBag } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="rounded-md bg-black">
      <div className=" flex md:flex-row justify-evenly items-center flex-col-reverse gap-2 relative  mx-auto py-12 px-4">
        <div className="text-white flex flex-col items-center text-center ">
          <h1 className="text-4xl md:text-6xl mb-4 font-semibold">
            Easter Sale!
          </h1>
          <h3 className="text-xl my-2 font-medium">On Selected Electronics</h3>
          <p className="text-3xl md:text-5xl mt-2 font-medium text-orange-400">
            35% of Discount
          </p>
          <a
            href="#shop"
            className="flex items-center justify-around md:w-36 w-[130px] min-w-[120px] bg-purple-800 rounded-md p-3 mt-4 hover:scale-90 duration-1000 hover:bg-gray-600 hover:rounded-3xl "
          >
            <FaShoppingBag /> Shop Now
          </a>
        </div>
        <div className="md:mb-0 mb-10 w-6/12 h-[300px]">
          <Image
            src="/iphone.png"
            alt="Banner-Image"
            className="object-contain w-full h-full hover:scale-125 duration-1000"
            width={400}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};
export default Banner;
