import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(){
    return(
        <nav className="">
            <ul className="flex gap-5 items-center font-bold text-[#2e3830]">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/bgoevent">BGO Events</NavLink>
                <NavLink to="/resources">Resources</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <button className="px-5 py-2 bg-[#00281f] text-white font-bold">Registration</button>
            </ul>
        </nav>
    )
}