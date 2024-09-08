"use client";

import { Avatar, dividerClasses } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import BackDrop from "./BackDrop";

import { useRouter } from "next/navigation";
import CartService from "@/Hooks/UserCart";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { init } = CartService();
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  const { data: session } = useSession();
  const route = useRouter();
  return (
    <>
      <div className="relatie z-20">
        <div
          className="flex  items-center justify-center gap-1 border-[1px] border-x-orange-300 rounded-full p-1 hover:shadow-md hover:border-orange-600 cursor-pointer transition duration-1000"
          onClick={toggleOpen}
        >
          <Avatar src={""} />
          <FaCaretDown />
        </div>
        {isOpen && (
          <div className="absolute overflow-hidden transition duration-1000 rounded-md flex flex-col w-[160px] right-0 top-20">
            {session && session.user ? (
              <div className="cursor-pointer bg-white">
                <Link
                  onClick={toggleOpen}
                  className="p-2 block text-center"
                  href="/OrderHistory"
                >
                  Order History
                </Link>
                <hr className="bg-black" />
                <div
                  onClick={() => {
                    toggleOpen();
                    signOut({ callbackUrl: "/Login" });
                    init();
                  }}
                  className="flex justify-center items-center p-2 "
                >
                  Log Out
                </div>
              </div>
            ) : (
              <div className="cursor-pointer bg-white">
                <Link
                  onClick={toggleOpen}
                  className="p-2 block text-center"
                  href="/Login"
                >
                  Log In
                </Link>

                <Link
                  onClick={toggleOpen}
                  className="p-2 block text-center"
                  href="/Register"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};
export default UserMenu;
