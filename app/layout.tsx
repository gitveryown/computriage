import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./component/Navbar/navHome";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Computriage",
  description: "Cybersecurity app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      
      
      </body>
    </html>
  );
}
