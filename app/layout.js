"use client";
import { Lato } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Analytics } from "@vercel/analytics/react";

const lato = Lato({
    weight: ["400", "700", "900"],
    subsets: ["latin"]
});

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
