
import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AboutMe from "./components/aboutMe/aboutMe";
import Portfolio from "./components/portfolio/portfolio";
import Resume from "./components/resume/resume"


export default function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Header />

      <Routes>
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        
      </Routes>

      
      <Footer />
    </div>
    </Router>
  );
};



// let [newVariable, setNewVariable] = useState(`hello!`);
  // let [count, setCount] = useState(0);

{/* <button onClick={(e) => setCount(prevCount => prevCount+1)}>Click</button> */}