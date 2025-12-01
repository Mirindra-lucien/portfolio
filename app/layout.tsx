import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
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
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-arriere overflow-auto`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
