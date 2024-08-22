import ClientProvider from "./ClientProvider";
import { auth } from "@/lib/auth";
import { SessionProvider } from "next-auth/react";

const Provider = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      {" "}
      <ClientProvider>{children}</ClientProvider>
    </SessionProvider>
  );
};
export default Provider;
