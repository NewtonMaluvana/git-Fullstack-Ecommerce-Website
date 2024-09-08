import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { MdPhoneAndroid, MdShop } from "react-icons/md";

import { FaDesktop } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="">
      <div className="flex relative bottom-0 md:flex-row py-10 gap-4 px-4 flex-col justify-between bg-slate-800 text-white text-center items-center">
        <div className="  md:w-1/4 w-10/12">
          <h1 className="text-3xl font-semibold m-4 text-orange-400">
            Get to Know Us
          </h1>
          <div className="flex flex-col w-full text-md">
            <Link href="#">Blog</Link>
            <Link href="#">Careers</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Contact Us</Link>
          </div>
        </div>
        <div className=" md:w-1/4 w-10/12">
          <h1 className="text-3xl font-semibold m-4 text-orange-400">
            Customer Services
          </h1>
          <div className="flex flex-col w-full text-md">
            <Link href="#">Returns & Delivery</Link>
            <Link href="#">Shipping</Link>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">FAQs</Link>
          </div>
        </div>
        <div className=" md:w-1/4 w-10/12">
          <h1 className="text-3xl font-semibold m-4 text-orange-400">
            Help Center
          </h1>
          <div className="flex flex-col w-full  text-md">
            <Link href="#">Contact Us</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">Find a Store</Link>
            <Link href="#">Credit Services</Link>
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
      <div className="bg-slate-800 px-8">
        {" "}
        &copy; {new Date().getFullYear()} Newton Store(Pty ) Limited
      </div>
    </div>
  );
};
export default Footer;
