import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import Destination from './components/Destination';
import Home from './components/Home';
import Crew from './components/Crew';
import Technology from './components/Technology'
import { Routes, Route, useParams } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div id='mainWrapper' className='h-full bg-[url("/src/assets/home/background-home-mobile.jpg")] bg-cover px-6 pt-6 pb-12 bg-no-repeat'>
        <div id='mainContainer'>
          <div id='headerWrapper' className=''>
            <Header />
          </div>
          <div id='homeWrapper' className=''>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
          <div id='destinationWrapper'>
            <Routes>
              <Route path='/destination' element={<Destination />} />
            </Routes>
          </div>
          <div id='crewWrapper'>
            <Routes>
              <Route path='/crew' element={<Crew />} />
            </Routes>
          </div>
          <div id='technologyWrapper'>
            <Routes>
              <Route path='/technology' element={<Technology />} />
            </Routes>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
