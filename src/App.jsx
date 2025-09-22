import { Suspense, useState } from 'react'
import navImg from './assets/logo.png';
import dollarImg from './assets/Currency.png';
import './App.css';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';

const playersPromise = fetch('/players.json')
  .then(res => res.json())

function App() {

  const [toggle, setToggle] = useState(false)


  return (
    <>
      <div className="navbar max-w-7xl mx-auto p-5">
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

      <div className='max-w-7xl mx-auto flex justify-between items-center pb-10 px-5'>
        <h1 className='font-bold text-2xl'>Available Players</h1>
        <div className='font-medium text-black '>
          <button onClick={() => setToggle(true)} className={`py-3 px-4 rounded-tl-2xl rounded-bl-2xl border-r-0 ${toggle === true ? 'bg-[#E7FE29]' : 'bg-white'}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-4 rounded-tr-2xl rounded-br-2xl border-r-0 ${toggle === false ? 'bg-[#E7FE29]' : 'bg-white'}`}>Seleceted <span>{0}</span></button>
        </div>
      </div>

      {/* available / selected */}


      {
        toggle == true ? <Suspense fallback={<p>Loading...</p>}>
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense> : <SelectedPlayers></SelectedPlayers>
      }








    </>
  )
}

export default App
