import { Link } from "@nextui-org/react";
import type { Metadata } from "next";
import { Inter, Prompt } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import React from "react";

import "./globals.css";
import { Providers } from "@/app/providers";
import Navbar from "@/components/shared/navbar/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const prompt = Prompt({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "KAFJisho",
  description: "Thai-Japanese Jisho by KAF simp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`min-h-dvh bg-background font-sans antialiased
          ${inter.variable} ${prompt.variable}`}
      >
        <Providers>
          <NextTopLoader
            color="#e72881"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #e72881,0 0 5px #e72881"
          />
          <div className="relative flex h-screen flex-col">
            {/* <Banner /> */}
            <Navbar />
            <main className="container mx-auto max-w-6xl grow px-6 pt-16">
              {children}
            </main>
            <footer className="flex w-full items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://legacy.shirafzx.xyz/"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">SHIRAF</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
