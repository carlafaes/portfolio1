import React from 'react';
import {Route,Routes} from 'react-router-dom';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Home from './Components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
