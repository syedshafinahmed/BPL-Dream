import React from 'react';
import footerImg from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className='bg-blue-950'>
            <img className='mx-auto p-10' src={footerImg} alt="" />
            <div className='max-w-7xl mx-auto flex justify-between pb-10'>
                <div className='w-30 md:w-60 pl-5 md:pl-0'>
                    <h1 className='font-bold text-sm md:text-xl mb-1 text-white'>About Us</h1>
                    <p className='text-xs md:text-sm text-gray-500'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div>
                    <h1 className='font-bold text-sm md:text-xl mb-1 text-white'>Quick Links</h1>
                    <ul className='text-xs md:text-sm text-gray-500'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='w-50 md:w-100 pr-5 md:pr-0'>
                    <h1 className='font-bold text-sm md:text-xl mb-2 text-white'>Subscribe</h1>
                    <p className='text-xs md:text-sm text-gray-500 mb-1'>Subscribe to our newsletter for the latest updates.</p>
                    <div className='flex'>
                        <input className='h-8 w-25 md:w-55' type="text" placeholder='   Enter your email' />
                        <button className='px-3 py-1 text-sm font-medium rounded-lg border-none border-black bg-gradient-to-r from-pink-400 to-[#E7FE29] '>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;