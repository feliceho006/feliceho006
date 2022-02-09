import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Work from "./Pages/Work"
import Hardware from './Pages/Hardware';
import Software from './Pages/Software';
import VisualArts from './Pages/VisualArts';
import './App.css'

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/about" exact element={<About/>}/>
            <Route path="/work" exact element={<Work/>}>
              <Route path="hardware" element={<Hardware />} />
              <Route path="software" element={<Software />} />
              <Route path="visualarts" element={<VisualArts />} />
              {/* <Route path=":id" element={<Projects />} /> */}
            </Route>

          </Routes>
        </Router>
      </div>
    
  )
}

export default App;
