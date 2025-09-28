import './App.css';
import Home from './pages/Home';
import { Route, Routes} from 'react-router-dom';
import About from './pages/About';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <div className="App bg-[#507255] overflow-x-hidden select-none font-mono">
        <Routes>
            <Route exact path='/' Component={Home}/>
            <Route exact path='/about' Component={About}/>
            <Route exact path='/projects' Component={ProjectDetails}/>
        </Routes>
    </div>
  );
}

export default App;
