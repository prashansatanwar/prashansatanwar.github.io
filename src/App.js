import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Menu from "./components/Menu";

function App() {
  const [open, setopen] = useState(false);
  const toggle = () => {
    setopen(!open);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && open) {
        setopen(false);
      }
    };

    window.addEventListener('resize',hideMenu)

    return () => {
        window.removeEventListener('resize',hideMenu)
    };
  });

  return (
    <>
      <NavBar toggle={toggle} />
      <Menu open={open} toggle={toggle} />
      <Switch>
        <Route exact path="/Portfolio" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
