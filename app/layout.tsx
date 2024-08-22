import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

import { Toaster } from "react-hot-toast";
import Provider from "@/Providers/Provider";

const inter = Roboto({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "JAY Store",
  description: "FullStack Ecommerce Website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const curUser = await getCurrentUser();

  console.log("User<<< ");
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Provider>
          <Toaster
            toastOptions={{
              style: {
                background: "rgb(34 54 211)",
                color: "#fff",
              },
            }}
          />

          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
