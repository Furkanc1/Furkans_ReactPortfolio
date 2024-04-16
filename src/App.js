import "./App.css";
import { useState } from "react";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
// import Header from "./components/header/landingPage";
import Footer from "./components/footer/footer";
import AboutMe from "./components/aboutMe/aboutMe";
import Portfolio from "./components/portfolio/portfolio";
import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";
import { cachedProjects } from "./helper";
import LandingPage from "./components/landingPage/LandingPage";
// import { getGithubData } from "./helper";
// import { projectsUsedAcrossApplication } from './helper';

export default function App() {
  let [projects, setProjects] = useState(cachedProjects);

  useEffect(() => {

    // const getGithubDataAsync = async () => {
    //   try {
    //     let gitProjects = await getGithubData();
    //     if (gitProjects) {
    //       setProjects(gitProjects);
    //       return gitProjects;
    //     }
    //   } catch (error) {
    //     console.log(`getGithubDataAsync Error`, error);
    //   }
    // }

    // getGithubDataAsync();

    if (projects.length === 0) setProjects(cachedProjects);

  }, [projects])

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route
            path="/portfolio"
            element={<Portfolio projects={projects} />}
          />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
