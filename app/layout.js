import { Lato } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Analytics } from "@vercel/analytics/react";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Frederik Graakjær - Web developer",
  description:
    "I'm a web developer based in Aarhus specializing in building responsive and user-friendly websites. I have expertise in various JavaScript technologies commonly used for frontend and full-stack development.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Frederik Graakjær - Web developer",
    description:
      "I'm a web developer based in Aarhus specializing in building responsive and user-friendly websites. I have expertise in various JavaScript technologies commonly used for frontend and full-stack development.",
    type: "website",
    url: "https://www.frederikgraakjaer.dk/",
    images: [
      {
        url: "/frederik-graakjaer.jpg",
        width: 1200,
        height: 630,
        alt: "Frederik Graakjær",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-[#E3E3DE]`}>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
