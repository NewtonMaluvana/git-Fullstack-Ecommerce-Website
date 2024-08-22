import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex md:flex-row py-10 gap-4 px-4 flex-col justify-between bg-slate-950 text-white text-center items-center">
      <div className="  md:w-1/4 w-10/12">
        <h1 className="text-3xl font-semibold m-4 text-orange-400">
          Catergories
        </h1>
        <div className=" flex flex-col text-xl">
          <Link href="#">Phones</Link>
          <Link href="#">Watches</Link>
          <Link href="#">Laptops</Link>
          <Link href="#">Headphones</Link>
          <Link href="#">Shoes</Link>
        </div>
      </div>
      <div className=" md:w-1/4 w-10/12">
        <h1 className="text-3xl font-semibold m-4 text-orange-400">
          Customer Services
        </h1>
        <div className="flex flex-col w-full text-xl">
          <Link href="#">Returns & Delivery</Link>
          <Link href="#">Shipping</Link>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">FAQs</Link>
        </div>
      </div>
      <div className=" md:w-1/4 w-10/12">
        <h1 className="text-3xl font-semibold m-4 text-orange-400">
          Customer Services
        </h1>
        <div className="flex flex-col w-full text-xl">
          <Link href="#">Returns & Delivery</Link>
          <Link href="#">Shipping</Link>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">FAQs</Link>
        </div>
      </div>
      <div className="  md:w-1/4 w-10/12 ">
        <h1 className="text-xl font-semibold m-4 ">Follow Us</h1>
        <div className="flex gap-6 justify-center">
          <Link href="#">
            <FaFacebook className="text-purple-600 text-xl hover:scale-125 duration-1000" />
          </Link>
          <Link href="#">
            <FaWhatsapp className="text-purple-600 text-xl  hover:scale-125 duration-1000" />
          </Link>
          <Link href="#">
            <FaInstagram className="text-purple-700 text-xl hover:scale-125 duration-1000" />
          </Link>
          <Link href="#">
            <FaTwitter className="text-purple-500 text-xl hover:scale-125 duration-1000" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
