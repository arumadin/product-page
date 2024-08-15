import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"


const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Webpage",
  description: "welcome to our shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${oswald.className}`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
