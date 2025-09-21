import React, { use } from 'react';
import userImg from '../../assets/Group.png';
import flagImg from '../../assets/flag.png';

const AvailablePlayers = ({ playersPromise }) => {
    const playerData = use(playersPromise)
    // const {image, name, country, role, rating, batting_style, bowling_style, price_usd} = playerData;
    return (
        <div className='max-w-7xl mx-auto'>

        {
            playerData.map(player => <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img className='h-60 w-full object-cover'
                        src={player.image}
                        alt="Shoes" />
                </figure>
                <div className="p-3">
                    <div className='flex gap-x-3 items-center'>
                        <img className='w-[20px] h-[22px]' src={userImg} alt="" /> <h2 className="card-title">{player.name}</h2>
                    </div>
                    <div className='flex justify-between items-center mt-3 border-b-1 border-gray-600 pb-3'>
                        <div className='flex gap-x-3 items-center'>
                            <img className='w-[15px] h-[15px]' src={flagImg} alt="" /> <h2 className="card-title">{player.country}</h2>
                        </div>
                        <p>{player.role}</p>
                    </div>
                    <p className='mt-3'>Rating: {player.rating}</p>
                    <div className='flex justify-between '>
                        <p>{player.batting_style}</p>
                        <p>{player.bowling_style}</p>
                    </div>
                    <div className="flex justify-between mt-3 items-center">
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