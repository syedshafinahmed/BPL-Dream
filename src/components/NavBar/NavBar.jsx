import React from 'react';
import navImg from '../../assets/logo.png'
import dollarImg from '../../assets/Currency.png'

const NavBar = ({ availableBalance }) => {
    return (
        <div className="navbar max-w-7xl mx-auto p-5">
            <div className="flex-1">
                <a className="text-xl">
                    <img className='w-[60px] h-[60px]' src={navImg} alt="" />
                </a>
            </div>
            <div className="flex items-center">
                <span className='mr-1 font-bold text-xl'>{availableBalance} Coins</span>
                {/* <span className='mr-1'> Coins</span> */}
                <img className='w-[25px] h-[25px]' src={dollarImg} alt="" />
            </div>
        </div>
    );
};

export default NavBar;