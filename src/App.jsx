import { Suspense, useState } from 'react'
import navImg from './assets/logo.png';
import dollarImg from './assets/Currency.png';
import './App.css';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import NavBar from './components/NavBar/NavBar';

const playersPromise = fetch('/players.json')
  .then(res => res.json())

function App() {

  const [toggle, setToggle] = useState(false)

  const [availableBalance, setAvailableBalance] = useState(900000000)


  return (
    <>
      <NavBar availableBalance={availableBalance}></NavBar>

      <div className='max-w-7xl mx-auto flex justify-between items-center pb-10 px-5'>
        <h1 className='font-bold text-2xl'>Available Players</h1>
        <div className='font-medium text-black '>
          <button onClick={() => setToggle(true)} className={`py-3 px-4 rounded-tl-2xl rounded-bl-2xl border-r-0 ${toggle === true ? 'bg-[#E7FE29]' : 'bg-white'}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-4 rounded-tr-2xl rounded-br-2xl border-r-0 ${toggle === false ? 'bg-[#E7FE29]' : 'bg-white'}`}>Seleceted <span>{0}</span></button>
        </div>
      </div>

      {/* available / selected */}


      {
        toggle == true ? <Suspense className='text-center mx-auto' fallback={<div className="flex items-center justify-center min-h-screen">
          <p className="text-xl font-medium">Loading  <span className='loading loading-spinner loading-xl'></span></p>
        </div>}>
          <AvailablePlayers availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
        </Suspense> : <SelectedPlayers></SelectedPlayers>
      }








    </>
  )
}

export default App
