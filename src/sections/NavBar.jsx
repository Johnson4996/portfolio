import React from "react";

export const NavBar = () => {
    
    return (
        <nav className="flex w-full justify-end p-5 text-xl">
            <ul className="flex gap-5 ">
                <li className="nav-item"><a href="#projects">Projects</a></li>
                <li className="nav-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}