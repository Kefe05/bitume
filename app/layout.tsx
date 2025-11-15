import type { Metadata } from "next";
import {  Playfair } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";




const playfair = Playfair({
  subsets: ['latin'],
  // weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: "News Today",
  description: "Your no 1 news platform ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.className} container space-y-8 bg-gray-100 antialiased`}
      > 
        <Nav/>
         <div className="px-20 max-w-5xl mx-auto">
          {children}
         </div>
        <Footer />
      </body>
    </html>
  );
}
