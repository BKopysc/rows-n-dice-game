import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/navbar/Navbar";
import Navigation from "./components/navigation/Navigation";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rows'n'dice",
  description: "Fun dice game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Toaster position="bottom-left" toastOptions={{
          error:{
            duration:1500
          }}}
          />
        </body>
    </html>
  );
}
