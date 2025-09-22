import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';
const SelectedPlayers = ({purchasedPlayers, removePlayer}) => {
    console.log(purchasedPlayers);
    
    return (
        <div className='max-w-7xl mx-auto px-5'>
            {
                purchasedPlayers.map(player => <SelectedCard removePlayer={removePlayer} player={player}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayers;