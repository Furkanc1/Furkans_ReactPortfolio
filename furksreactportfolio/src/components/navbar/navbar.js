import React from 'react';
import { Link } from 'react-router-dom';
import "../../App.css";

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navList'>
        <li className="nav-item"><Link to="/">HomePage</Link></li>
        <li className="nav-item"><Link to="/about">About-Me</Link></li>
        <li className="nav-item"><Link to="/portfolio">Portfolio</Link></li>
        <li className="nav-item"><Link to="/resume">Resume</Link></li>
        <li className="nav-item"><Link to="/contact">Contact-Me</Link></li>
        {/* will add other navbar links as needed */}
      </div>
    </nav>
  );
};