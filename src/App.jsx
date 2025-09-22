import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import './App.css';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import NavBar from './components/NavBar/NavBar';

const playersPromise = fetch('/players.json')
  .then(res => res.json())

function App() {

  const [toggle, setToggle] = useState(true)

  const [availableBalance, setAvailableBalance] = useState(9000000)

  const [purchasedPlayers, setPurchasedPlayers] = useState([])

  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter(ply => ply.id !== p.id)
    setPurchasedPlayers(filteredData);
    setAvailableBalance(availableBalance + p.price_usd)
  }

  return (
    <>
      <NavBar availableBalance={availableBalance}></NavBar>

      <div className='max-w-7xl mx-auto flex justify-between items-center pb-10 px-5'>
        <h1 className='font-bold text-2xl'>{toggle === true ? 'Available Players' : `Selected Players (${purchasedPlayers.length}/11)`}</h1>
        <div className='font-medium text-black '>
          <button onClick={() => setToggle(true)} className={`py-3 px-4 rounded-tl-2xl rounded-bl-2xl border-r-0 ${toggle === true ? 'bg-[#E7FE29]' : 'bg-white'}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-4 rounded-tr-2xl rounded-br-2xl border-r-0 ${toggle === false ? 'bg-[#E7FE29]' : 'bg-white'}`}>Seleceted ({purchasedPlayers.length})</button>
        </div>
      </div>

      {/* available / selected */}

      {
        toggle == true ? <Suspense className='text-center mx-auto' fallback={<div className="flex items-center justify-center min-h-screen">
          <p className="text-xl font-medium">Loading  <span className='loading loading-spinner loading-xl'></span></p>
        </div>}>
          <AvailablePlayers setPurchasedPlayers={setPurchasedPlayers} purchasedPlayers={purchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
        </Suspense> : <SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      }

      <ToastContainer></ToastContainer>

    </>
  )
}

export default App
