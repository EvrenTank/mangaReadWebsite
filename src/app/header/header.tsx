'use client';
import Logo from "./logo";
import Navbar from "./navbar";
import NavbarVertical from "./navbarVertical";
import { useState } from "react";
const Header = () => {

    const [open,setOpen] = useState(false); // vertical Navbar
    const clickEvent = () => {
        setOpen(open => !open);
        console.log('open değeri:'+open);
    }

    return (
        <>
        <header className = " w-[100vw] h-[80px] flex justify-between bg-violet-600" >
        <Logo/>
        <Navbar clickEvent ={clickEvent} />
        </header>
        <NavbarVertical open={open} />
        </>
    );
}
export default Header;