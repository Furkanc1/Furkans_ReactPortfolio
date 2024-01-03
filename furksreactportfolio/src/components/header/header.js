import logo from "../../logo.svg";
import React from 'react';
export default function Header() {
    return (
        <header className="containerWithSpinningLogo">
        <img src={logo} className="App-logo" alt="logo" />

        <p className="appTitle">F-Port </p>
        
      </header>
    )
}