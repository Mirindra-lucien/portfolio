import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import { Menu } from "lucide-react";
import Footer from "./components/footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mirindra",
  description: "Fullstack web developer",
  icons: {icon: "/icon.png"}
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  const navigationLinks = [
    {href: "/#aboutMe", content: "About me"},
    {href: "/#services", content: "Services"},
    {href: "/#skills", content: "Skills"},
    {href: "/#contacts", content: "Contacts"},
  ]
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-arriere overflow-auto`}
      >
        <nav className="fixed top-0 left-0 w-full bg-nav text-white py-4 z-10">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center pl-4 sm:pl-0">
              <Link href="/" className="text-sm sm:text-lg font-bold hover:text-gray-300">Mirindra</Link>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              {
                navigationLinks.map((value, index) => (
                  <Link key={index} href={value.href} className="hover:text-gray-300">
                    {value.content}
                  </Link>
                ))
              }
            </div>
            <div className="sm:hidden flex items-center">
              <button className="text-white hover:text-gray-300  pr-4 focus:outline-none">
                <Menu />
              </button>
            </div>
          </div>
        </nav>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
