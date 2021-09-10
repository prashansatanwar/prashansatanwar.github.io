import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path='/Portfolio' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/resume' component={Resume}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
