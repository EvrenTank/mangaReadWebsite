'use client';
import Logo from "./logo";
import Navbar from "./navbar";
import NavbarVertical from "./navbarVertical";
import { useState,useRef } from "react";
import $ from "jquery";

const Header = () => {

    const [open,setOpen] = useState(false); // vertical Navbar
    const myRef = useRef();
    const hideEvent = () => {
       $(myRef.current!).slideToggle(300);
    }
    const clickEvent = () => {
        setOpen(open => !open);
        console.log('open değeri:'+open);
    }


    return (
        <>
        <header className = " w-[100vw] h-[80px] flex justify-between bg-violet-600" >
        <Logo/>
        <Navbar clickEvent ={clickEvent} hideEvent={hideEvent} />
        </header>
        <NavbarVertical open={open} myRef={myRef} />
        </>
    );
}
export default Header;