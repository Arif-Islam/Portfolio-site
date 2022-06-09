import React from 'react';
import img from '../../../images/myself.jpg';
import img2 from '../../../images/myself 2.jpg';
import bg from '../../../images/shape-6.png';
import './Intro.css';
import { Typewriter } from 'react-simple-typewriter';
import axios from 'axios';
import fileDownload from 'js-file-download';
import { Link } from 'react-router-dom';


const Intro = () => {
    return (
        <div className='py-20 w-11/12 mx-auto 2xl:w-full'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0'>
                <div className='flex flex-col items-start md:-mt-10 max-w-[400px] md:max-w-none'>
                    <div className='flex text-white items-baseline pb-2'>
                        <p className="wave text-5xl -ml-4 mr-2">👋</p>
                        <p className='tracking-wider text-xl'>Hi, This is</p>
                    </div>
                    <p className='text-white text-4xl font-semibold pt-2 tracking-wider'>Md Ariful Islam</p>
                    <div className='flex items-center text-xl font-semibold text-purple-500 tracking-wider pt-3'>
                        <p className='mr-[5px]'>I'm a</p>
                        <p>
                            <Typewriter
                                loop
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={70}
                                delaySpeed={1000}
                                words={["MERN Stack Developer", "Creative Designer"]}
                            />
                        </p>
                    </div>
                    <p className='text-white pt-4 tracking-wider pb-8'>A Computer Engineer who fell in love in Web Developing.</p>
                    <Link to="files/Md_Ariful_Islam_MERN_Stack_Dev_Resume.pdf" target="_blank" download>
                        <button className='text-white px-6 py-3 bg-purple-700 font-medium tracking-wide shadow-xl rounded-[1px] transition transform duration-500 ease-in-out hover:-translate-y-[6px] hover:shadow-xl hover:bg-black '>Download Resume</button>
                    </Link>

                </div>
                <div className='flex'>
                    <img className='w-[400px] transform duration-500 hover:-translate-y-2 rounded-1/2 shadow-xl ' src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Intro;