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
import particlesDark from './data/particlesDark.json'

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
  
  const reload = () => {
    window.location.reload();
  }

  return (
    <>
      
      <NavBar toggle={toggle} setOpen={setOpen} reload={reload}/>
      <Menu open={open} toggle={toggle} />

      {window.localStorage.getItem('color-theme')==='dark'
      ? <Particles params={particlesDark} className='z-0 w-full h-full fixed top-0 opacity-30'/>
      : <Particles params={particlesConfig} className='z-0 w-full h-full fixed top-0'/>
      }
      
      
      


      <div className="z-10 min-w-screen min-h-screen m-auto flex-col items-center justify-center bg-bgcolor dark:bg-darkbgcolor">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>

      </div>

    </>
  );
}

export default App;
