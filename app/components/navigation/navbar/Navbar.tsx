'use client';
import Link from "next/link";
import NavbarButton from "./NavbarButton";
import { useEffect } from "react";

export interface NavbarProps {
    toggle: () => void;
    isSidebarOpen: boolean;
}

export default function Navbar(props: NavbarProps): JSX.Element {

    return (
        <>
        <div className="w-full h-20 bg-gray-800 top-0">
          <div className="container mx-auto px-2 h-full sm: px-5">
            <div className="flex items-center gap-20 h-full">
              <span className="text-white font-bold">Rows'n'dice</span>
              <ul className="hidden md:flex gap-x-10 text-gray-300">
                <li>
                  <Link href="/offline">
                    <p>Offline</p>
                  </Link>
                </li>
                <li>
                  <Link href="/online">
                    <p>Online</p>
                  </Link>
                </li>
                <li>
                    <Link href="/about">
                        <p>About</p>
                    </Link>
                </li>
              </ul>
              
              <div className="ml-auto md:hidden">
                    <NavbarButton toggle={props.toggle} isOpen={props.isSidebarOpen}/>
              </div>
            </div>
          </div>
        </div>
      </>


    )
}