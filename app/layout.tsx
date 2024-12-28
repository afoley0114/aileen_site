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
import { Navbar } from 'react-bootstrap'
import { FiTable } from "react-icons/fi";


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
      
        <div className = "order-first basis-1/5">
      <Link href="/">
        <Image src={siteTitle}
              alt="Site header"
              style={{width: '100%', height: 'auto'}}
              className = "object-contain" />
      </Link>
      </div>
      
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
  );
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>

    </head>
      <body
        className={'${geistSans.variable} ${geistMono.variable} antialiased'} >
          <div className = "container-full">
            <div className = "sidebar-box">
              <Sidebar />
            </div>
          
            <div className = "content">
            <main className="container items-center justify-items-center min-h-screen">
              {children}
            </main>
            </div>
        </div>
      </body>
    </html>
  );
}
