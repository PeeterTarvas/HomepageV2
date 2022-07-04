import {AiOutlineMenu} from "react-icons/ai";
import App from "../../App";
import {About} from "../../pages/About";
import {Contact} from "../../pages/Contact";
import {Home} from "../../pages/Home";
import React from "react";
import {Link, Route} from "react-router-dom";



const Navbar = () => {


    return (
        <nav className={'flex bg-gray-700 w-screen shadow-2xl justify-end p-4 z-10 shadow-lg text-white space-x-10'}>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>


        </nav>
    )

}

export {
    Navbar
}

// @ts-ignore
const NavbarIcon = (icon, path_to_router, descript: string) => {
    return (
        <div className={'navbar-icon'}>
            <Link to={path_to_router}>{icon}{descript}</Link>
        </div>
    )

}
