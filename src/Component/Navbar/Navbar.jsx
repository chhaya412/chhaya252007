'use client'
import Link from "next/link";
import './Navbar.css';
import ThemeToggle from "../Theme/ThemeToggle";



function Navbar() {
  return (
    <div className="Navbar">
        <Link className="nav" href="/" >Home</Link>
        <Link className="nav" href="/About" >About</Link>
        <Link className="nav" href="/Services" >Services</Link>
        <Link className="nav" href="/Contact" >Contact</Link>
       <ThemeToggle/>
    </div>
     
)
}

export default Navbar