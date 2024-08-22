"use client";

import { cartStore } from "@/Hooks/UserCart";
import { error } from "console";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { SWRConfig } from "swr";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const updateStore = () => {
    cartStore.persist.rehydrate();
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", updateStore);
    window.addEventListener("focus", updateStore);
    return () => {
      document.removeEventListener("visibilitychange", updateStore);
      document.removeEventListener("focus", updateStore);
    };
  }, []);
  return (
    <SWRConfig
      value={{
        onError: (error, key) => {
          toast.error(error.message);
        },
        fetcher: async (resource, init) => {
          const res = await fetch(resource, init);
          if (!res.ok) {
            throw new Error("an error occured fecthing data");
          }
          return res.json();
        },
      }}
    >
      {children}
    </SWRConfig>
  );
}
