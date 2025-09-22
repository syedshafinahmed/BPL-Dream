import React from 'react';
import bgImg from '../../assets/bg-shadow.png'
const NewsLetter = () => {
    return (
        <div style={{ backgroundImage: `url(${bgImg})` }} className='flex flex-col items-center justify-center 
        w-full max-w-7xl mx-auto min-h-[365px] sm:min-h-[300px] md:min-h-[365px] bg-cover bg-center bg-no-repeat px-4 sm:px-6 md:px-8 lg:px-12 py-10'>
            <h1 className='font-bold text-2xl pb-5'>Subscribe to our Newsletter</h1>
            <p className='text-gray-600 pb-5'>Get the latest updates and news right in your inbox!</p>
            <div className='flex '>
                <input className='h-10 w-100' type="text" placeholder='   Enter your email' />
                <button className='btn mb-5 border-none border-black bg-gradient-to-r from-pink-400 to-[#E7FE29] '>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;