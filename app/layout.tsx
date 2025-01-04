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


//const kiwiSoda = localFont({src: '../public/fonts/KiwiSoda.ttf', variable: '--font-kiwi-soda'});

const cooperBits = localFont({src: '../public/fonts/cooperBits.ttf', variable: '--font-cooper-bits'});

const pixelArial = localFont({src: '../public/fonts/PIXEARG_.ttf', variable: '--font-pixel-arial'});




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
      
      <div className = "invisible md:visible sidebar-content">
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
    <html lang="en" className={pixelArial.className}>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
      <body>
          <div className = "grid grid-cols-1 md:grid-cols-5 auto-rows-min">
            <div className = "col-span-1 md:col-span-1">
            <div className = "flex order-first  md:basis-[10%] justify-center items-center md:items-start">
      <Link href="/" className="item-center justify-items-center w-80 md:w-full">
        <Image src={siteTitle}
              alt="Site header"
              style={{width: '100%', height: 'auto'}}
              className = "item-center justify-items-center" />
      </Link>
      </div>
      
      <div className = "hidden md:visible sidebar-content">
      <Link href="/about" className = "hidden md:inline-block sticky-nav">
        <Image src= {aboutImg}
              alt="Site header"
              className = "sticky-img"
              />
      </Link>
      <Link href="/about" className = "hidden md:inline-block sticky-nav">
        <Image src= {projectsImg}
              alt="Site header"
              className = "sticky-img"/>
      </Link>

      <Link href="/art" className = "hidden md:inline-block sticky-nav">
      <Image src= {artImg}
              alt="Site header"
              className = "sticky-img"
              />
      </Link>

      
      <Link href="/art " className = "hidden md:inline-block sticky-nav">
        <Image src= {contactImg}
              alt="Site header"
              className = "sticky-img"
              />
      </Link>
    
      </div>

      <div className = "hidden md:inline-block order-3 basis-[10%]">
      </div>
            </div>
          
            <div className = "col-span-full md:col-span-4 content">
            <main className="container items-center justify-items-center min-h-screen p-3 md:p-10">
              {children}
            </main>
            </div>
        </div>
      </body>
    </html>
  );
}
