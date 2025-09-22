import React, { useState } from 'react';
import userImg from '../../assets/Group.png'
import { toast } from 'react-toastify';

const PlayerCard = ({ player, setAvailableBalance, availableBalance, setPurchasedPlayers, purchasedPlayers }) => {
    const [isSelected, setIsSelected] = useState(false)
    const handleSelected = (player) => {
        const playerPrice = player.price_usd;
        if (availableBalance < playerPrice) {
            toast(`You don't have enough money!`)
            return
        }
        if (purchasedPlayers.length === 11) {
            toast(`You've already purchased 11 players!`)
            return
        }
        setIsSelected(true)
        setAvailableBalance(availableBalance - playerPrice)
        setPurchasedPlayers([...purchasedPlayers, player])

    }
    return (
        <div className="card bg-base-100 w-full sm:w-72 md:w-80 lg:w-96 shadow-sm">
            <figure>
                <img className='h-80 lg:h-60 w-full object-cover'
                    src={player.image}
                    alt="Players" />
            </figure>
            <div className="p-3">
                <div className='flex gap-x-3 items-center'>
                    <img className='w-[20px] h-[22px]' src={userImg} alt="" /> <h1 className="font-black text-2xl">{player.name}</h1>
                </div>
                <div className='flex justify-between items-center mt-3 border-b-1 border-gray-600 pb-3'>
                    <div className='flex gap-x-3 items-center'>
                        <img className='w-[30px] h-[20px]' src={player.flag} alt="" /> <h4 className="card-title">{player.country}</h4>
                    </div>
                    <p className='bg-gray-300 px-5 py-1 text-sm text-gray-700 rounded-xl'>{player.role}</p>
                </div>
                <p className='mt-3'>Rating: {player.rating}</p>
                <div className='flex justify-between mt-4 mb-3'>
                    <p>{player.batting_style}</p>
                    <p>{player.bowling_style}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className='font-bold'>Price: ${player.price_usd} USD</p>
                    <button disabled={isSelected} onClick={() => { handleSelected(player) }} className={`btn ${isSelected ? 'text-black font-medium' : 'text-black bg-[#E7FE29] font-normal'}`}>{isSelected === true ? 'Selected' : 'Choose Player'}</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;