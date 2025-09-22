import React, { use } from 'react';
import userImg from '../../assets/Group.png';
import flagImg from '../../assets/flag.png';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playersPromise, setAvailableBalance, availableBalance }) => {
    const playerData = use(playersPromise)
    // const {image, name, country, role, rating, batting_style, bowling_style, price_usd} = playerData;
    return (
        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8  justify-items-center'>

        {
            playerData.map(player => <PlayerCard availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
        }

        
            
        </div>
    );
};

export default AvailablePlayers;