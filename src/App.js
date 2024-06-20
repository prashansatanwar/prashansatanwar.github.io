import logo from './logo.svg';
import './App.css';
import Projects from './pages/Projects';
import Home from './pages/Home';
import { RevealOnScroll } from './components/RevealOnScroll';
import Border from './components/Border';
import NavBar from './components/NavBar';
import { Route, Routes} from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <div className="App bg-[#507255]">
        <NavBar/>
        <Routes>
            <Route exact path='/' Component={Home}/>
            <Route exact path='/about' Component={About}/>
        </Routes>
          <RevealOnScroll>
            <Routes>
                <Route exact path='/projects' Component={Projects}/>
            </Routes>
          </RevealOnScroll>
    </div>
  );
}

export default App;
