import React from 'react';
import Intro from './Intro/Intro';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Intro></Intro>
            <Projects></Projects>
        </div>
    );
};

export default Home;