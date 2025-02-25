import React from "react";
import About from "./sections/About";
import Skill from "./sections/Skill";
import Projects from "./sections/Projects";
import UpcomingProject from "./sections/UpcomingProject";
import ContactMe from "./sections/ContactMe";
import Platforms from "./components/Platforms";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-auto w-auto flex flex-col gap-5 p-5 md:p-10 text-white bg-[#000319]">
      <Navbar />
      
      <div id="about"><About /></div>
      <div id="platforms"><Platforms /></div>
      <div id="skills"><Skill /></div>
      <div id="projects"><Projects /></div>
      <div id="upcoming-projects"><UpcomingProject /></div>
      <div id="contact"><ContactMe /></div>
    </div>
  );
};

export default App;
