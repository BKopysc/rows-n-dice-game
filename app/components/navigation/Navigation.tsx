'use client';

import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";

export default function Navigation() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    
    //https://medium.com/@a.pirus/how-to-create-a-responsive-navigation-bar-in-next-js-13-e5540789a017
    
    return(
        <>
        <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar}/>
        <Navbar toggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        </>
    );
}