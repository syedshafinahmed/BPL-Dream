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
                <div className='w-40 md:w-100 pr-5 md:pr-0'>
                    <h1 className='font-bold text-sm md:text-xl mb-2 text-white'>Subscribe</h1>
                    <p className='text-xs md:text-sm text-gray-500 mb-1'>Subscribe to our newsletter for the latest updates.</p>
                    <div className='flex mt-2'>
                        <input className='h-8 text-xs w-15 md:w-55' type="text" placeholder='   Enter your email' />
                        <button className='px-2 py-1 text-xs rounded-lg border-none border-black bg-gradient-to-r from-pink-400 to-[#E7FE29] '>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className="border-t-2 border-gray-500" />
            <div className='text-center text-xs py-5 font-medium text-white'>&copy; Syed Shafin Ahmed. All Rights Reserved.</div>
        </div>
    );
};

export default Footer;