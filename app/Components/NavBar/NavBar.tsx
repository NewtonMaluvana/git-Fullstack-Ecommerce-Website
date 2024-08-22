import Link from "next/link";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";

const NavBar = async () => {
  return (
    <div className=" sticky top-0 left-0 w-full z-10 bg-slate-800 px-4 py-8 flex items-center justify-between ">
      <Link href="/" className="text-pink-900">
        Xstore
      </Link>
      <div className="search hidden md:block text-white">Search</div>
      <div className="flex gap-3 md:gap-12 justify-between items-center">
        <CartCount />
        <UserMenu />
      </div>
    </div>
  );
};
export default NavBar;
