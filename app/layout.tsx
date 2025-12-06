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
  title: "Mirindra Portfolio - Fullstack developer",
  description: "Explore my projects in web development, real-time applications, and comprehensive technical solutions using Javascript, React, Vue, Node, Symfony and Laravel",
  keywords: "Mirindra, portfolio, web developer, full stack, web project",
  authors: {name: "LANTOSOA Mirindra Lucien"},
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false
    }
  },
  icons: {icon: "/icon.png"},
  openGraph: {
    title: "Mirindra Portfolio - Fullstack Developer",
    description: "Explore my web projects and comprehensive technical solutions",
    url: "https://mirindra.vercel.app",
    siteName: "Mirindra",
    images: [{
      url: "/og_img.jpg"
    }],
    type: "website"
  }
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-auto`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
