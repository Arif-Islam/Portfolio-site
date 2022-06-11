import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHtml5, FaCss3, FaReact, FaNode, FaCogs, FaDatabase, FaBootstrap, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import React from 'react';
import ReactTooltip from "react-tooltip";
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const goToGithub = () => {
        window.open('https://github.com/Arif-Islam', '_blank');
    }
    const goToLinkedin = () => {
        window.open('https://www.linkedin.com/in/mdarifulislam1998/', '_blank');
    }
    const goToFacebook = () => {
        window.open('https://www.facebook.com/AR1F.01/', '_blank');
    }
    const goToInstagram = () => {
        window.open('https://www.instagram.com/_a_r_i_f________/', '_blank');
    }
    return (
        <div id="about" className='pb-32 pt-16'>
            <div className='flex '>
                <p className='text-white text-2xl text-center w-[640px] mb-16 tracking-wider hidden lg:block'>About Me</p>
                <p className='text-white text-2xl text-center w-[640px] mb-16 tracking-wider hidden lg:block'>Skills</p>
            </div>
            <div className='w-11/12 2xl:w-full mx-auto flex flex-col lg:flex-row justify-center items-start gap-20'>
                <div className='lg:w-[500px] 2xl:w-[640px] '>
                    <p className='text-white text-2xl text-center mb-10 tracking-wider lg:hidden'>About Me</p>
                    <p className='text-white text-lg tracking-wide font-light'>I am a full stack developer who likes to build web applications with focus and enthusiasm. <br /> I have working knowledge of creating react websites with clean, elegant and efficient code. My technical skills include Javascript, React JS, Node JS, Tailwind CSS, Bootstrap. I also solved plenty of problems using C++. </p>
                    <div className='pt-4 flex items-center justify-start space-x-4'>
                        <FaGithub onClick={goToGithub} data-tip data-for="githubTip" className='w-7 h-7 text-white transition duration-300 ease-in-out hover:text-purple-500 hover:cursor-pointer'></FaGithub>
                        <FaLinkedin onClick={goToLinkedin} data-tip data-for="linkedinTip" className='w-7 h-7 text-white transition duration-300 ease-in-out hover:text-purple-500 hover:cursor-pointer'></FaLinkedin>
                        <FaFacebook onClick={goToFacebook} data-tip data-for="facebookTip" className='w-7 h-7 text-white transition duration-300 ease-in-out hover:text-purple-500 hover:cursor-pointer'></FaFacebook>
                        <FaInstagram onClick={goToInstagram} data-tip data-for="instagramTip" className='w-7 h-7 text-white transition duration-300 ease-in-out hover:text-purple-500 hover:cursor-pointer'></FaInstagram>
                        {/* <FaGithub className='w-8 h-8 text-purple-300 transition duration-300 ease-in-out hover:text-purple-400'></FaGithub> */}

                    </div>
                </div>
                <div className='lg:w-[500px] 2xl:w-[640px] '>
                    <p className='text-white text-2xl text-center mb-14 tracking-wider lg:hidden'>Skills</p>
                    <div className='flex  justify-center items-center flex-wrap gap-10'>
                        <div className='flex flex-col items-center justify-center space-y-3'>
                            <FaReact className='w-12 h-12 text-purple-300 transition duration-300 ease-in-out hover:text-purple-400'></FaReact>
                            <p className='text-white'>ReactJS</p>
                        </div>
                        <div className='flex flex-col items-center justify-center space-y-3'>
                            <SiJavascript className='w-12 h-12 text-purple-300 transition duration-300 ease-in-out hover:text-purple-400'></SiJavascript>
                            <p className='text-white'>Javascript</p>
                        </div>
                        <div className='flex flex-col items-center justify-center space-y-3'>
                            <FaHtml5 className='w-12 h-12 text-purple-300 transition duration-300 ease-in-out hover:text-purple-400'></FaHtml5>
                            <p className='text-white'>HTML5</p>
                        </div>
                        <div className='flex flex-col items-center justify-center space-y-3'>
                            <FaCss3 className='w-12 h-12 text-purple-300 transition duration-300 ease-in-out hover:text-purple-400'></FaCss3>
                            <p className='text-white'>CSS3</p>
                        </div>
                        <div className='flex flex-col items-center justify-center space-y-3'>
                            <FaNode className='w-12 h-12 text-purple-300 transition duration-300 ease-in-out hover:text-purple-400'></FaNode>
                            <p className='text-white'>NodeJs</p>
                        </div>
                        <div className='flex flex-col items-center justify-center space-y-3'>
                            <FaCogs className='w-12 h-12 text-purple-300 transition duration-300 ease-in-out hover:text-purple-400'></FaCogs>
                            <p className='text-white'>ExpressJS</p>
                        </div>
                        <div className='flex flex-col items-center justify-center space-y-3'>
                            <SiTailwindcss className='w-12 h-12 text-purple-300 transition duration-300 ease-in-out hover:text-purple-400'></SiTailwindcss>
                            <p className='text-white'>Tailwind CSS</p>
                        </div>
                        <div className='flex flex-col items-center justify-center space-y-3'>
                            <FaBootstrap className='w-12 h-12 text-purple-300 transition duration-300 ease-in-out hover:text-purple-400'></FaBootstrap>
                            <p className='text-white'>Bootstrap</p>
                        </div>
                        <div className='flex flex-col items-center justify-center space-y-3'>
                            <FaDatabase className='w-12 h-12 text-purple-300 transition duration-300 ease-in-out hover:text-purple-400'></FaDatabase>
                            <p className='text-white'>MongoDB</p>
                        </div>

                    </div>


                </div>
            </div>
            <ReactTooltip id="githubTip" place="bottom" effect="solid">
                <p className=' bg-black px-2 py-1 text-base'>Github</p>
            </ReactTooltip>
            <ReactTooltip id="linkedinTip" place="bottom" effect="solid">
                <p className=' bg-black px-2 py-1 text-base'>Linkedin</p>
            </ReactTooltip>
            <ReactTooltip id="facebookTip" place="bottom" effect="solid">
                <p className=' bg-black px-2 py-1 text-base'>Facebook</p>
            </ReactTooltip>
            <ReactTooltip id="instagramTip" place="bottom" effect="solid">
                <p className=' bg-black px-2 py-1 text-base'>Instagram</p>
            </ReactTooltip>
        </div>
    );
};

export default About;