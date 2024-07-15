import React from 'react';
import { useCountUp } from 'react-countup';

const ProfileImg = ({ dark }) => {
    useCountUp({
        ref: 'projectCounter',
        start: 0,
        end: 5,
        duration: 6,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });
    useCountUp({
        ref: 'expCounter',
        start: 0,
        end: 2,
        duration: 4,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });

    return (
        <div
            data-aos="zoom-out-up" data-aos-duration="400"
            className='  w-full flex flex-col items-center justify-center absolute bottom-10 '>
            
            <img
                src={require('../assets/awesomeImg.png')}
                loading='lazy'
                alt="Vishal"
                className={` mx-auto max-w-[400px]  z-[10]`}
            />
            

            <div className={`backdrop-blur-xl  w-full absolute -bottom-16 flex flex-row  justify-around rounded-2xl   shadow-sm ${dark ? 'shadow-[#de77a8]' : ' shadow-black'} py-2 z-[10]`}>
                <div className='flex flex-col items-center justify-center'>
                    <p className=' font-extrabold text-3xl'> <span id='projectCounter' /> + </p>
                    <p className={`${dark ? 'text-green-600' : 'text-blue-900'} text-xl font-semibold `}>Projects</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileImg
