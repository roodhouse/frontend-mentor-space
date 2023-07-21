import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import Destination from './components/Destination';
import Home from './components/Home';
import Crew from './components/Crew';
import Technology from './components/Technology'

function App() {

  const [view, setView] = useState('home')
  const [exploreClicked, setExploreClicked] = useState(false)

  useEffect(()=>{
    // change the height
    let mainWrapper = document.getElementById("mainWrapper"); 
    let appOriginalHeight = document.getElementById('mainApp').clientHeight
    let mainWrapperHeight = mainWrapper.clientHeight
    
    if (appOriginalHeight < mainWrapperHeight) {
     let difference = mainWrapperHeight - appOriginalHeight
     document.getElementById('mainApp').style.height = appOriginalHeight + difference + 'px'
    } else if (appOriginalHeight >= mainWrapperHeight) {
     console.log('main O is less')
    }
  },[])

  // when explore button is pushed
  useEffect(() => {
    let mainWrapper = document.getElementById("mainWrapper");
    let explore = document.getElementById('exploreButton')
    let appOriginalHeight = document.getElementById('mainApp').clientHeight
    explore.addEventListener('click', () => {
      document.getElementById('homeWrapper').classList.remove('selectedNav')
      document.getElementById('destinationWrapper').classList.add('selectedNav')
      mainWrapper.classList.add('destinationWrapperBackground')
      document.getElementById('linkhome').classList.remove('selectedLink')
      document.getElementById('linkdestination').classList.add('selectedLink')
      setExploreClicked(true)

      // change the height
      let mainWrapperHeight = mainWrapper.clientHeight
       if (appOriginalHeight < mainWrapperHeight) {
        console.log('app O is less')
        let difference = mainWrapperHeight - appOriginalHeight
        document.getElementById('mainApp').style.height = appOriginalHeight + difference + 'px'
       } else if (appOriginalHeight >= mainWrapperHeight) {
        console.log('main O is less')
       }

    })
  })

  useEffect(() => {
    let mainWrapper = document.getElementById("mainWrapper");
    let nav = document.querySelectorAll(".nav");
    let link = document.querySelectorAll(".link");
    let selectedNav = document.querySelector(".selectedNav");
    let selectedLink = document.querySelector(".selectedLink");
    let appOriginalHeight = document.getElementById('mainApp').clientHeight

    nav = Array.from(nav);
    link = Array.from(link);


    link.forEach((hyper) => {
      hyper.addEventListener("click", (e) => {
        if (!exploreClicked) {
            document.getElementById('destinationWrapper').classList.remove('selectedNav')
            document.getElementById('linkdestination').classList.remove('selectedLink')
            mainWrapper.classList.remove('destinationWrapperBackground')
        }
        let setLink = hyper.id.slice(4);
        let newView = setLink;
        setLink = setLink + "Wrapper";
        setLink = document.getElementById(setLink);
        mainWrapper.classList.remove(selectedNav.id + "Background");
        selectedNav.classList.remove("selectedNav");
        setLink.classList.add("selectedNav");
        mainWrapper.classList.add(setLink.id + "Background");
        selectedNav = setLink;
        
       // adjust height
       let mainWrapperHeight = mainWrapper.clientHeight
       if (appOriginalHeight < mainWrapperHeight) {
        let difference = mainWrapperHeight - appOriginalHeight
        document.getElementById('mainApp').style.height = appOriginalHeight + difference + 'px'
       } else if (appOriginalHeight >= mainWrapperHeight) {
        console.log('main O is less')
       }

        selectedLink.classList.remove("selectedLink");
        hyper.classList.add("selectedLink");
        selectedLink = hyper;

        nav.forEach((place) => {
          if (place.classList.contains("selectedNav")) {
            mainWrapper.classList.add(place.id + "Background");
          }
        });
      });
    });
  }, []);

  return (
    <div id='mainApp' className="App flex flex-col h-screen bg-[#000]">
      <div id='mainWrapper' className='flex justify-center h-auto grow bg-[url("/src/assets/home/background-home-mobile.jpg")] bg-cover pt-6 pb-12 bg-no-repeat mix-blend-screen md:bg-[url("/src/assets/home/background-home-tablet.jpg")] xl:bg-[url("/src/assets/home/background-home-desktop.jpg")] xl:pt-10'>
        <div id='mainContainer' className='max-w-[375px] sm:max-w-[640px] md:max-w-[768px] md:w-full lg:max-w-[1024px] xl:max-w-[100%] xl:w-full '>
          <div id='headerWrapper' className='px-6 md:pl-[39px] md:pr-0 xl:pl-[55px]'>
            <Header />
          </div>
          <div id='homeWrapper' className='selectedNav hidden nav px-6 xl:px-[165px]'>
            <Home />
          </div>
          <div id='destinationWrapper' className='nav hidden px-6 xl:px-[165px]'>
            <Destination />
          </div>
          <div id='crewWrapper' className='nav hidden px-6 xl:px-[165px]'>
           <Crew />
          </div>
          <div id='techWrapper' className='nav hidden xl:pl-[165px] xl:pr-0'>
            <Technology />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
