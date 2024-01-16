import logo from "../../logo.svg";
import React from "react";
import "../../App.css";
export default function Header() {
  return (
    <div>
      <header className="containerWithSpinningLogo">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="appTitle">F-Port </p>
      </header>
      {/* <div className="">
        <p className="mainPageBio">
          Welcome to my Porfolio Webpage created and run with React! This is the
          first React App created by me, and my first real step into modern day
          programming! Click the sections above in order to acess some
          information about me! Enjoy.
        </p>
      </div> */}
    </div>
  );
}
