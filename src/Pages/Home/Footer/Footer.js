import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className=' bg-[#2b2b2b]'>
            <div className='w-11/12 2xl:max-w-7xl mx-auto'>
                <div className='flex items-center justify-between py-4'>
                    <div className='flex flex-col justify-center items-end hover:cursor-pointer'>
                        <p className='text-2xl font-semibold tracking-widest text-white'>Arif</p>
                        <p className='text-sm text-purple-600 font-medium'><span className='text-purple-500 font-bold'>...</span>Web Developer</p>
                    </div>
                    <div className='flex space-x-8'>
                        <BsFacebook className='w-5 h-5 text-stone-100 transition ease-linear hover:cursor-pointer hover:text-purple-500'></BsFacebook>
                        <BsInstagram className='w-5 h-5 text-stone-100 transition ease-linear hover:cursor-pointer hover:text-purple-500'></BsInstagram>
                        <BsTwitter className='w-5 h-5 text-stone-100 transition ease-linear hover:cursor-pointer hover:text-purple-500'></BsTwitter>
                        <BsLinkedin className='w-5 h-5 text-stone-100 transition ease-linear hover:cursor-pointer hover:text-purple-500'></BsLinkedin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;