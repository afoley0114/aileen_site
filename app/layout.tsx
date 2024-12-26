import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { Navbar } from 'react-bootstrap'


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
      
        <div className = "basis-1/5 order-first">
      <Link href="/">
        <Image src="/site_images/site_name_tape.png" 
              alt="Site header" width={0} height={0} 
              sizes="100vw" 
              style={{width: '100%', height: 'auto'}}/>
      </Link>
      </div>
      <div className="sidebar-content">
      <div className="block items-center w-full h-full">
      <Link href="/about">
        <Image src="/site_images/site_about.png" 
              alt="Site header" width={0} height={0} 
              sizes="100vw" 
              style={{width: '70%', height: 'auto'}}/>
      </Link>
      </div>
      <div className="block items-center w-full h-full">
      <Link href="/about">
        <Image src="/site_images/site_projects.png" 
              alt="Site header" width={0} height={0} 
              sizes="100vw" 
              style={{width: '70%', height: 'auto'}}/>
      </Link>
      </div>
      <div className="block items-center w-full h-full">
      <Link href="/art">
        <Image src="/site_images/site_art.png" 
              alt="Site header" width={0} height={0} 
              sizes="100vw" 
              style={{width: '70%', height: 'auto'}}/>
      </Link>
      </div>
      <div className="block items-center w-full h-full">
      <Link href="/art">
        <Image src="/site_images/site_contact.png" 
              alt="Site header" width={0} height={0} 
              sizes="100vw" 
              style={{width: '70%', height: 'auto'}}/>
      </Link>
      </div>
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
    <html lang="en">
    <head>

    </head>
      <body
        className={'${geistSans.variable} ${geistMono.variable} antialiased'} >
          <div className = "container">
            <div className="basis-1/4 order-first">
              <Sidebar />
            </div>
            <div className = "content">
            <main className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
              {children}
            </main>
            </div>
        </div>
      </body>
    </html>
  );
}
