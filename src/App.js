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
    <div className="App flex flex-col h-screen">
      <div id='mainWrapper' className='flex justify-center h-auto grow bg-[url("/src/assets/home/background-home-mobile.jpg")] bg-cover pt-6 pb-12 bg-no-repeat mix-blend-screen md:bg-[url("/src/assets/home/background-home-tablet.jpg")] md:pb-[90px]'>
        <div id='mainContainer' className='max-w-[375px] sm:max-w-[640px] md:max-w-[768px] md:w-full lg:max-w-[1024px] '>
          <div id='headerWrapper' className='px-6 md:pl-[39px] md:pr-0'>
            <Header />
          </div>
          <div id='homeWrapper' className='px-6'>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
          <div id='destinationWrapper' className='px-6'>
            <Routes>
              <Route path='/destination' element={<Destination />} />
            </Routes>
          </div>
          <div id='crewWrapper' className='px-6'>
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
