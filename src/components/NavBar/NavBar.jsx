import { Link, Navigate } from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="">
            <ul className="flex gap-5 items-center font-bold text-[#4b665b]">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/bgoevent">BGO Events</Link>
                <Link to="/resources">Resources</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
                <button className="px-5 py-2 bg-[#00281f] text-white font-bold">Registration</button>
            </ul>
        </nav>
    )
}