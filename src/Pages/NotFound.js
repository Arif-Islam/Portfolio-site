import React from 'react';
import error404 from '../images/error-404.png';
import Navbar from './Home/Navbar/Navbar';

const NotFound = () => {
    return (
        <div className='min-h-screen'>
            <Navbar></Navbar>
            <div className='flex justify-center items-center mt-10 lg:mt-20 '>
                <img className='' src={error404} alt="" />
            </div>
        </div>
    );
};

export default NotFound;