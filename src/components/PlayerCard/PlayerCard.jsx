import React, { use, useState } from 'react';
import userImg from '../../assets/Group.png'

const PlayerCard = ({ player, setAvailableBalance, availableBalance }) => {
    const [isSelected, setIsSelected] = useState(false)
    const handleSelected = (player) => {
        const playerPrice = player.price_usd;
        if (availableBalance > playerPrice) {
            setIsSelected(true)
            setAvailableBalance(availableBalance - playerPrice)
        }
        else{
            alert(`You don't have enough money!`)
        }

    }
    return (
        <div className="card bg-base-100 w-100 shadow-sm">
            <figure>
                <img className='h-60 w-full object-cover'
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
                    <p>{player.role}</p>
                </div>
                <p className='mt-3'>Rating: {player.rating}</p>
                <div className='flex justify-between mt-4 mb-3'>
                    <p>{player.batting_style}</p>
                    <p>{player.bowling_style}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Price: ${player.price_usd} USD</p>
                    <button disabled={isSelected} onClick={() => { handleSelected(player) }} className={`btn ${isSelected ? 'text-white font-medium' : 'text-white'}`}>{isSelected === true ? 'Selected' : 'Choose Player'}</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;