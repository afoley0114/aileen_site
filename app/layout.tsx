import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import siteTitle from "../public/site_images/site_name_tape.png";
import aboutImg from "../public/site_images/site_about.png";
import projectsImg from "../public/site_images/site_projects.png";
import artImg from "../public/site_images/site_art.png";
import contactImg from "../public/site_images/site_contact.png";
import Link from "next/link";
import "./globals.css";
import localFont from 'next/font/local';

import { Navbar } from 'react-bootstrap'
import { FiTable } from "react-icons/fi";

const kiwiSoda = localFont({src: '../public/fonts/KiwiSoda.ttf', variable: '--font-kiwi-soda'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aileen Foley",
  description: "Aileen Foley Portfolio Site",
};


const Sidebar: React.FC = () => {
  return (

    <div className="sidebar">
      
        <div className = "flex order-first basis-[10%]">
      <Link href="/" className="item-center justify-items-center">
        <Image src={siteTitle}
              alt="Site header"
              style={{width: '100%', height: 'auto'}}
              className = "object-contain item-center justify-items-center" />
      </Link>
      </div>
      
      <div className = "sidebar-content">
      <Link href="/about" className = "sticky-nav">
        <Image src= {aboutImg}
              alt="Site header"
              className = "sticky-img"
              />
      </Link>
      <Link href="/about" className = "sticky-nav">
        <Image src= {projectsImg}
              alt="Site header"
              className = "sticky-img"/>
      </Link>

      <Link href="/art" className = "sticky-nav">
      <Image src= {artImg}
              alt="Site header"
              className = "sticky-img"
              />
      </Link>

      
      <Link href="/art " className = "sticky-nav">
        <Image src= {contactImg}
              alt="Site header"
              className = "sticky-img"
              />
      </Link>
    
      </div>

      <div className = "flex order-3 basis-[10%]">
      </div>
    </div>
  );
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kiwiSoda.className}>
    <head>

    </head>
      <body>
          <div className = "container-full">
            <div className = "sidebar-box">
              <Sidebar />
            </div>
          
            <div className = "content">
            <main className="container items-center justify-items-center min-h-screen p-10">
              {children}
            </main>
            </div>
        </div>
      </body>
    </html>
  );
}
