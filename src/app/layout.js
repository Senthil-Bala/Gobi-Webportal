"use client"

import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

 const metadata = {
  title: "Gobi Today",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  useEffect(() => {
    console.log("AOS initializing...");
    AOS.init({
      duration: 2000,
      // once: true,
    });
    console.log("AOS initialized!");
  }, []);
  

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
