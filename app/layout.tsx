import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Responsivenav from "@/components/Home/Navbar/Responsivenav";
import Provider from "@/components/Hoc/Provider";
import Footer from "@/components/Home/Footer/Footer";
import { ScrollToTop } from "@/components/Helper/ScrollToTop";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`$(font.classname) antialiased`}
      >
        <Provider>
          <Responsivenav />
          {children}
          <Footer />
          <ScrollToTop />
        </Provider>
      </body>
    </html>
  );
}
