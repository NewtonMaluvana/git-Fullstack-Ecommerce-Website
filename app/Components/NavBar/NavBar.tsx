import Link from "next/link";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import Image from "next/image";
import img from "../../../public/images/images (1).png";
const NavBar = async () => {
  return (
    <div className=" sticky top-0 left-0 w-full z-10 bg-slate-800 px-4 py-8 flex items-center justify-between ">
      <Link
        href="/"
        className="text-pink-900 m-4 hover:scale-110 duration-1000"
      >
        <Image alt="store logo" src={img} width={120} />
      </Link>
      <div className="flex gap-3 md:gap-12 justify-between items-center">
        <CartCount />
        <UserMenu />
      </div>
    </div>
  );
};
export default NavBar;
