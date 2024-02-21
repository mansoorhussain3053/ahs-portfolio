import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import AnimatedCursor from "react-animated-cursor";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arshad Hussain",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="max-[900px]:hidden shadow-md"><AnimatedCursor
      innerSize={22}
      outerSize={20}
      color='0, 158, 102'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    /></div>
        <Header/>
        {children}</body>

    </html>
  );
}
