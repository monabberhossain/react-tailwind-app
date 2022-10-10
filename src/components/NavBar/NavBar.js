import React, { useState } from "react";
import NavItem from "../NavItem/NavItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: "Home", path: "/home" },
        { id: 2, name: "HTML", path: "/html" },
        { id: 3, name: "CSS", path: "/css" },
        { id: 4, name: "Bootstrap", path: "/bootstrap" },
        { id: 5, name: "Tailwind", path: "/tailwind" },
        { id: 6, name: "Javascript", path: "/javascript" },
        { id: 7, name: "React", path: "/react" },
    ];
    return (
        <nav className="bg-cyan-200">
            <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
                {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
            </div>

            <ul
                className={`md:flex justify-center w-full p-1 bg-cyan-200 absolute md:static duration-500 ease-in ${
                    open ? "top-6" : "top-[-180px]"
                }`}
            >
                {routes.map((route) => (
                    <NavItem key={route.id} route={route}></NavItem>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
