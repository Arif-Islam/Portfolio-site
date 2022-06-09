import React from 'react';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Intro from './Intro/Intro';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Intro></Intro>
            <Projects></Projects>
            <Contact></Contact>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;