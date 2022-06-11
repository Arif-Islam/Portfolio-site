import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    return (
        <div id='projects'>
            <p className='text-2xl text-center text-white pt-10 pb-16 tracking-wider'>My Projects</p>
            <div className='w-11/12 2xl:w-full mx-auto'>
                <div className='flex items-center justify-center gap-20 2xl:gap-[92px] pb-10 2xl:pb-20 flex-wrap'>
                    {
                        projects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;