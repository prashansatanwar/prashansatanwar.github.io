import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Particles from 'react-particles-js';
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Menu from "./components/Menu";
import particlesConfig from './data/particlesConfig.json'

function App() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && open) {
        setOpen(false);
      }
    };

    window.addEventListener('resize',hideMenu)

    return () => {
        window.removeEventListener('resize',hideMenu)
    };
  });

  return (
    <>
      <NavBar toggle={toggle} setOpen={setOpen}/>
      <Menu open={open} toggle={toggle} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Particles params={particlesConfig} className='z-0 w-full h-full fixed top-0'/>
    </>
  );
}

export default App;
