import { Suspense, useState } from 'react'
import navImg from './assets/logo.png';
import dollarImg from './assets/Currency.png';
import './App.css';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';

const playersPromise = fetch('/players.json')
  .then(res => res.json())

function App() {


  return (
    <>
      <div className="navbar max-w-7xl mx-auto">
        <div className="flex-1">
          <a className="text-xl">
            <img className='w-[60px] h-[60px]' src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center">
          <span className='mr-1'>6000000</span>
          <span className='mr-1'> Coins</span>
          <img src={dollarImg} alt="" />
        </div>
      </div>

      <Suspense fallback={<p>Loading...</p>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>




      {/* <SelectedPlayers></SelectedPlayers> */}

    </>
  )
}

export default App
