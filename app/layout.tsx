import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Nav } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Px Contest",
  description: "Online Ambassador's Program",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="main">
       <Nav />
        <main className="app">
          {children}
        </main>
       <Footer />
      </div>
      </body>
    </html>
  );
}
