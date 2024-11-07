"use client";
import { Lato } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Analytics } from "@vercel/analytics/react";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Frederik Graakjær - Web developer</title>
        <meta
          name="description"
          content="I'm a web developer based in Aarhus specializing in building responsive and user-friendly websites. I have expertise in various JavaScript technologies commonly used for frontend and full-stack development."
        />
        <meta property="og:title" content="Frederik Graakjær - Web developer" />
        <meta
          property="og:description"
          content="I'm a web developer based in Aarhus specializing in building responsive and user-friendly websites. I have expertise in various JavaScript technologies commonly used for frontend and full-stack development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.frederikgraakjaer.dk/" />
        <meta property="og:image" content="/frederik-graakjaer.jpg" />
      </Head>
      <body className={`${lato.className} bg-[#E3E3DE]`}>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
