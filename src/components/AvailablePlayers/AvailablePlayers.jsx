import React, { use } from 'react';
import userImg from '../../assets/Group.png';
import flagImg from '../../assets/flag.png';

const AvailablePlayers = ({ playersPromise }) => {
    const playerData = use(playersPromise)
    // const {image, name, country, role, rating, batting_style, bowling_style, price_usd} = playerData;
    return (
        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8  justify-items-center'>

        {
            playerData.map(player => <div className="card bg-base-100 w-100 shadow-sm">
                <figure>
                    <img className='h-60 w-full object-cover'
                        src={player.image}
                        alt="Shoes" />
                </figure>
                <div className="p-3">
                    <div className='flex gap-x-3 items-center'>
                        <img className='w-[20px] h-[22px]' src={userImg} alt="" /> <h1 className="font-black text-2xl">{player.name}</h1>
                    </div>
                    <div className='flex justify-between items-center mt-3 border-b-1 border-gray-600 pb-3'>
                        <div className='flex gap-x-3 items-center'>
                            <img className='w-[15px] h-[15px]' src={flagImg} alt="" /> <h4 className="card-title">{player.country}</h4>
                        </div>
                        <p>{player.role}</p>
                    </div>
                    <p className='mt-3'>Rating: {player.rating}</p>
                    <div className='flex justify-between mt-4 mb-3'>
                        <p>{player.batting_style}</p>
                        <p>{player.bowling_style}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Price: $ {player.price_usd}</p>
                        <button className="btn">Choose Player</button>
                    </div>
                </div>
            </div>)
        }

        
            
        </div>
    );
};

export default AvailablePlayers;