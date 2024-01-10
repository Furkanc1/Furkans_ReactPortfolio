
import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AboutMe from "./components/aboutMe/aboutMe";
import Portfolio from "./components/portfolio/portfolio";
import Resume from "./components/resume/resume"
import Contact from "./components/contact/contact";
import { cachedProjects, getGithubData, vanillaJavaScriptValidation } from "./helper";
// import { projectsUsedAcrossApplication } from './helper';

export default function App() {
  
  
let [projects, setProjects] = useState(cachedProjects)
  
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Header />

      <Routes>
        
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/portfolio" element={<Portfolio projects={projects}/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>

      
      <Footer />
    </div>
    </Router>
  );
};



