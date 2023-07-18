import React from 'react'
import Data from '../../data.json'

function Moon() {
  return (
    <>
     <div id="moonContainer">
            <div id="moonHeader">
              <h1>{Data.destinations[0].name}</h1>
            </div>
            <div id="moonCopy">
              <p>{Data.destinations[0].description}</p>
            </div>
            <div id="moonBreakLine" className='w-full h-[1px] bg-dark'/>
            <div id="moonDistanceContainer">
              <div id="moonDistanceLabel">
                <p>Avg. Distance</p>
              </div>
              <div id="moonDistance">
                <p>{Data.destinations[0].distance}</p>
              </div>
            </div>
            <div id="moonTravelContainer">
              <div id="moonTravelLabel">
                <p>Est. Travel Time</p>
              </div>
              <div id="moonTravel">
                <p>{Data.destinations[0].travel}</p>
              </div>
            </div>
     </div>
    </>
  )
}

export default Moon