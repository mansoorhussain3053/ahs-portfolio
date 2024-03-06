import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import React from "react";
import { Toaster } from "../Components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arshad Hussain",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}

        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
