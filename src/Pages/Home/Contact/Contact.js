import React, { useState } from 'react';
import { GoLocation } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { send } from 'emailjs-com';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const getName = e => {
        setName(e.target.value);
    }
    const getEmail = e => {
        setEmail(e.target.value);
    }
    const getMessage = e => {
        setMessage(e.target.value);
    }

    const sendEmail = event => {
        event.preventDefault();
        send(
            'service_5qn24qs',
            'template_g1jsoln',
            { name, email, message },
            'SPL8rJyPUyeCRXNLo'
        )
            .then(res => {
                console.log('response', res.status)
            })
            .catch(err => {
                console.log('failed', err)
            })
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div id="contact" className='pb-28 w-11/12 2xl:w-full mx-auto'>
            <p className='text-2xl text-white text-center pt-10 pb-20 tracking-wider'>Contact Me</p>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 2xl:gap-14'>
                <div className='bg-[#2b2b2b] text-white w-auto lg:w-[500px] pl-10 py-14 rounded-sm'>
                    <p className='pb-3 text-2xl font-bold tracking-wide'>Get in touch</p>
                    <p className='pb-4 text-xl tracking-wide'>Fill up the form to start a conversation</p>
                    <div className='flex space-x-4 items-center pb-3'>
                        <GoLocation className='w-6 h-6 -ml-1'></GoLocation>
                        <p className=' text-lg'>Akhalia, Sylhet, Bangladesh</p>
                    </div>
                    <div className='flex space-x-3 items-center pb-3'>
                        <BsTelephone className='w-5 h-5'></BsTelephone>
                        <p className=' text-lg'>+8801620608491</p>
                    </div>
                    <div className='flex space-x-3 items-center pb-3'>
                        <AiOutlineMail className='w-6 h-6'></AiOutlineMail>
                        <p className=' text-lg'>mdariful.islam9198@gmail.com</p>
                    </div>
                </div>
                <div>
                    <form onSubmit={sendEmail} className='flex flex-col items-center justify-center space-y-5'>
                        <input onChange={getName} className='w-80 2xl:w-96 p-2 border border-[#2b2b2b] focus:outline-none font-semibold' type="text" value={name} placeholder='Full Name' required />
                        <input onChange={getEmail} className='w-80 2xl:w-96 p-2 border border-[#2b2b2b] focus:outline-none font-semibold' type="email" value={email} placeholder='Email' required />
                        <textarea onChange={getMessage} className='w-80 2xl:w-96 p-2 h-20 border border-[#2b2b2b] focus:outline-none font-semibold' value={message} name="" id="" placeholder='Your Message' required ></textarea>
                        <button type='submit' className='text-white px-6 py-2  bg-purple-700 font-medium tracking-wide shadow-xl rounded-[1px] transition transform duration-500 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:bg-black  lg:-ml-[216px] 2xl:-ml-[280px]'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;