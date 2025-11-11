import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Responsivenav from "@/components/Home/Navbar/Responsivenav";

const font =  Roboto({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets:["latin"]

})

export const metadata: Metadata = {
  title: "Job Portal | Landing Page ",
  description: "Job portal landing page using next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`$(font.classname) antialiased`}
      >
        <Responsivenav />
        {children}
      </body>
    </html>
  );
}
