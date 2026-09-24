import React from 'react';

const Hero = ({proGress}) => {
    return (
        <div className='md:flex gap-5 items-center justify-between max-w-8/12 mx-auto p-3'>
            <div className='flex flex-col justify-center items-center h-50 bg-gradient-to-r from-blue-500 to-purple-600 w-5/10 rounded-xl shadow-2xl'>
                <h1 className='text-2xl text-white '>In-Progress</h1>
                <h2 className='font-bold text-5xl text-white '>{proGress.length }</h2>
            </div>
            <div className='flex flex-col justify-center items-center h-50 bg-gradient-to-r from-green-500 to-blue-600 w-5/10 rounded-xl shadow-2xl '>
                <h1 className='text-2xl text-white '>Resolved</h1>
                <h2 className='font-bold text-5xl text-white '>0</h2>
            </div>
        </div>
    );
};

export default Hero;