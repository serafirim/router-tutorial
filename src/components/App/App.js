/*
######################################## NOTES ###########################################################
* Anything outside of <BrowserRouter></BrowserRouter will render on every page
* If you have site-wide context that you want to use, place them outside the router. 
##########################################################################################################
*/

import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Manatee from '../Manatee/Manatee';
import Narwhal from '../Narwhal/Narwhal';
import Whale from '../Whale/Whale';

function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <Router>
        <nav>
          <ul>
            <li><Link to="/manatee">Manatee</Link></li>
            <li><Link to="/narwhal">Narwhal</Link></li>
            <li><Link to="/whale">Whale</Link></li>
            <li><Link to="/whale/beluga">Beluga Whale</Link></li>
            <li><Link to="/whale/blue">Blue Whale</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/manatee" element={<Manatee />} />
          <Route path="/narwhal" element={<Narwhal />} />
          <Route exact path="/whale" element={<Whale />} />
          <Route path="/whale/:type" element={<Whale />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
