import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { id, name, description, image } = project;
    const navigate = useNavigate();
    const goToProjectDetails = (id) => {
        navigate(`/project/${id}`);
    }

    return (
        <div className='w-[365px] bg-[#2b2b2b] rounded-sm shadow-xl transition ease-in-out duration-500 hover:-translate-y-2'>
            <img className='w-[365px] rounded-t-[4px] pb-3 hover:cursor-pointer ' src={image} alt="" />
            <p className='text-white text-sm pb-2 px-2'>{description}</p>
            <div className='flex items-center justify-between px-2 pb-2'>
                <p className='text-white text-lg font-semibold'>{name}</p>
                <button onClick={() => goToProjectDetails(id)} className='text-purple-500 underline hover:text-purple-400 mr-1'>See Details</button>
            </div>
        </div>
    );
};

export default ProjectCard;