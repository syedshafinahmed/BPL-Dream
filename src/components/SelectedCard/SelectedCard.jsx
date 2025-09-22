import React from 'react';
import dlt from '../../assets/Frame.png';

const SelectedCard = ({ player }) => {
    return (
        <div className='border-2 border-gray-300  rounded-lg mb-5 flex justify-between items-center'>
            <div className='flex gap-x-5 items-center'>
                <img className='h-[90px] w-[160px] object-cover rounded-md' src={player.image} alt="" />
                <div className='p-x-5'>
                    <h1 className='font-bold text-2xl'>{player.name}</h1>
                    <p className='font-light text-sm'>{player.role}</p>
                </div>
            </div>
            <img className='pr-5' src={dlt} alt="" />
        </div>
    );
};

export default SelectedCard;