import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/navbar/Navbar";
import Navigation from "./components/navigation/Navigation";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <Toaster position="top-center" toastOptions={{
          error:{
            duration:1500
          }}}
          containerStyle={{
            top:100
          }}
          />
        </body>
    </html>
  );
}
