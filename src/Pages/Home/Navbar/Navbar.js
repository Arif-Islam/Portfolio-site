import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { XIcon, MenuIcon } from '@heroicons/react/solid';
import './Navbar.css';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    return (
        <div className='  top-0 z-20 py-2 text-white'>
            <div className='hidden lg:block lg:w-11/12 mx-auto 2xl:w-full'>
                <div className='flex items-center justify-between'>
                    <div className=''>
                        <div onClick={goToHome} className='flex flex-col justify-center items-end hover:cursor-pointer'>
                            <p className='text-2xl font-semibold tracking-widest'>Arif</p>
                            <p className='text-sm text-purple-600 font-medium'><span className='text-purple-500 font-bold'>...</span>Web Developer</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex space-x-6 justify-center items-center uppercase font-semibold tracking-wider text-sm'>
                            <div className=''>
                                <NavLink to='/'>Home</NavLink>
                            </div>
                            <div className=''>
                                <NavLink to='/blogs'>About</NavLink>
                            </div>
                            <div className=''>
                                <NavLink to='/myportfolio'>Projects</NavLink>
                            </div>
                            <div className=''>
                                <NavLink to='/myportfolio'>Blogs</NavLink>
                            </div>
                            <div className=''>
                                <NavLink to='/myportfolio'>Contact</NavLink>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className='lg:hidden'>
                <div className='flex justify-between items-center w-11/12 mx-auto'>
                    <div onClick={goToHome} className='flex flex-col justify-end items-end hover:cursor-pointer'>
                        <p className='text-2xl font-semibold tracking-widest'>Arif</p>
                        <p className='text-sm text-purple-600 font-medium'><span className='text-purple-500 font-bold'>...</span>Web Developer</p>
                    </div>
                    <div className='flex justify-end items-end'>
                        {showNav ?
                            <div onClick={() => setShowNav(!showNav)} className=' w-9 rounded'>
                                <XIcon className='cursor-pointer w-8 h-8 text-white pl-1'>
                                </XIcon>
                            </div>
                            :
                            <div onClick={() => setShowNav(!showNav)} className=' w-9 rounded'>
                                <MenuIcon onClick={() => setShowNav(!showNav)} className='cursor-pointer w-8 h-8 text-white pl-1'></MenuIcon>
                            </div>
                        }
                    </div>
                </div>
                <div className={(showNav ? "top-[67px] bg-[#212121] " : "-top-full ") + "text-white fixed h-[200px] rounded w-full space-y-3 items-center transition-top duration-500 ease-in-out  text-center uppercase font-semibold tracking-wider text-sm"}>
                    <div className='mt-6 md:mt-0 '>
                        <NavLink to='/'>Home</NavLink>
                    </div>
                    <div className=''>
                        <NavLink to='/about'>About</NavLink>
                    </div>
                    <div className=''>
                        <NavLink to='/projects'>Projects</NavLink>
                    </div>
                    <div className=''>
                        <NavLink to='/blogs'>Blogs</NavLink>
                    </div>
                    <div className=''>
                        <NavLink to='/contact'>Contact</NavLink>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Navbar;