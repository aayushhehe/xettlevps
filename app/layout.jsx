"use client";
import "./globals.css";
import { Inter } from "next/font/google";

import Feader, { Footer } from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body suppressHydrationWarning className=" relative z-[-9999]">
        <div className={`${inter.className} relative z-[-9999]`}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
