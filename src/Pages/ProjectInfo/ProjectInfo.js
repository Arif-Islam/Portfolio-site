import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../../hooks/useProjects';
import Navbar from '../Home/Navbar/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProjectInfo = () => {
    const { id } = useParams();
    const [projects] = useProjects();
    const project = projects.find(p => parseInt(p.id) === parseInt(id));
    // console.log(project)
    // const { name, subtitle, img1, img2, img3, livesite, clientside } = project;
    // const images = [img1, img2, img3];
    // const images = [project?.img1, project?.img2, project?.img3];
    // console.log(images);
    // console.log(project?.img1);
    // const image1 = project?.img1;
    // const image2 = project?.img2;
    // const image3 = project?.img3;
    let image1, image2, image3;
    if (parseInt(id) === 1) {
        image1 = "https://i.ibb.co/VDcw4Hh/Auto-Parts-ss-1.png";
        image2 = "https://i.ibb.co/8zcqSc4/Auto-Parts-5.png";
        image3 = "https://i.ibb.co/47DtGPQ/Auto-Parts-2.png";
    }
    else if (parseInt(id) === 2) {
        image1 = "https://i.ibb.co/3Sg8z3k/Sports-Gear-2.png";
        image2 = "https://i.ibb.co/1nXv2m4/Sports-Gear-ss-2.png";
        image3 = "https://i.ibb.co/WymRV1R/Sports-Gear-ss-3.png";
    }
    else if (parseInt(id) === 3) {
        image1 = "https://i.ibb.co/pw532FF/Sylhet-Safari-ss-3.png";
        image2 = "https://i.ibb.co/xSTSSXh/Sylhet-Safari-ss-1.png";
        image3 = "https://i.ibb.co/r0pBrYR/Sylhet-Safari-ss-2.png";
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-screen'>
                <p className='text-center text-2xl font-medium text-white pt-14 md:pt-20'>{project?.name}</p>
                <p className='text-center font-light text-white pt-2 w-[300px] lg:w-[500px] mx-auto pb-10'>{project?.subtitle}</p>
                <div className='w-full md:w-11/12 2xl:w-full mx-auto'>
                    <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false} showStatus={false}>
                        <div>
                            <img className='w-full object-cover' src={image1} alt="" />
                        </div>
                        <div>
                            <img className='w-full  object-cover' src={image2} alt="" />
                        </div>
                        <div>
                            <img className='w-full  object-cover' src={image3} alt="" />
                        </div>
                    </Carousel>
                </div>
                {/* <img className='w-full h-[450px] md:h-[550px] object-cover' src={project?.img1} alt="" /> */}
                <div className='mt-7 flex items-center justify-center gap-3 flex-wrap pb-12'>
                    <a href={project?.livesite} target="_blank">
                        <button className='bg-purple-700 text-white px-4 py-1 rounded transition duration-300 ease-in-out hover:bg-purple-900'>Live Site</button>
                    </a>
                    <a href={project?.clientside} target="_blank">
                        <button className='bg-purple-700 text-white px-4 py-1 rounded transition duration-300 ease-in-out hover:bg-purple-900'>Client Side Repo</button>
                    </a>
                    {
                        project?.serverside &&
                        <a href={project?.serverside} target="_blank">
                            <button className='bg-purple-700 text-white px-4 py-1 rounded transition duration-300 ease-in-out hover:bg-purple-900'>Server Side Repo</button>
                        </a>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectInfo;