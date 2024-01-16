import React, { useEffect } from 'react'
import TypingAnimation from './TypingAnimation'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { social } from '../data/socialLinkData';

const Home = ({ dark }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div id='home' className={`pt-4 relative w-full  ${dark ? 'dark' : 'light'}`}>

            <div className='w-full md:w-10/12  mx-auto gap-4 flex flex-col md:flex-row  px-4  '>
                <div className='z-[2] w-full pt-10  flex flex-col gap-y-6 md:items-start  justify-center  '>

                    <div data-aos="fade-right" data-aos-delay="300"
                        className='text-[2rem]   flex flex-col gap-4 w-full'>
                        <p>Hey! I'm</p>
                        <p className={`${dark ? 'text-pink-600' : 'text-sky-600 '} tracking-widest font-bold text-[2.5rem] leading-relaxed md:text-[3rem]  font-heading  animate-pulse`}>Deepanshu Singhal</p>
                    </div>

                    <div
                        data-aos="fade-right" data-aos-delay="350"
                        className='w-full'>
                        <TypingAnimation />
                    </div>

                    <div data-aos="fade-up" data-aos-delay="250"
                        className='w-full my-5 flex flex-row  gap-x-6 md:gap-x-12  md:items-center   text-[1.2rem]'>
                        <div className={`w-max relative  group overflow-hidden rounded-3xl  border-2 
                        ${dark ? 'border-pink-600' : 'border-sky-500'}`}>
                            <button className={`relative group-hover:z-[2] px-4 py-1 ${dark ? 'text-slate-100 ' : 'text-slate-800 '}  transition-all duration-300`}>
                                <a href={'https://drive.google.com/file/d/1eXCJvOTBdCHThZwqRXRT3HAx-COD_sv1/view?usp=sharing'}>Hire Me</a>
                            </button>
                            <div className={`absolute z-1 w-full top-0 translate-x-[-100%] px-2 py-1 h-full   group-hover:translate-x-0 transition-all duration-300 ${dark ? 'bg-pink-600' : 'bg-sky-500'}`}
                            />
                        </div>

                        <div className={`w-max relative  group overflow-hidden rounded-3xl  border-2 
                        ${dark ? 'border-pink-600' : 'border-sky-500'}`}>
                            <button className={`relative group-hover:z-[2] px-4 py-1 ${dark ? 'text-slate-100 ' : 'text-slate-800 '}  transition-all duration-300`}>
                                <a href="#contact">Contact Me</a>
                            </button>
                            <div className={`absolute z-1 w-full top-0 translate-x-[-100%] px-2 py-1 h-full   group-hover:translate-x-0 transition-all duration-300 ${dark ? 'bg-pink-600' : 'bg-sky-500'}`} />
                        </div>
                    </div>

                    <div
                        className='w-full flex flex-col justify-center max-w-[350px]  '>
                        <p data-aos="fade-right" data-aos-delay="350" className='md:ml-4 text-[1.2rem]'>FIND ME ON </p>
                        <div className='flex flex-row gap-2 justify-between  w-full md:w-max items-center '>

                            <div
                                data-aos="zoom-in" data-aos-delay="450"
                                className='max-w-[60px] cursor-pointer '>
                                <a href={social.linkedin}><img src={require('../assets/LinkedIn.png')} loading="lazy" alt="linked"
                                    className='hover:scale-75 transition-all duration-300' /></a>
                            </div>
                            <div
                                data-aos="zoom-in" data-aos-delay="500"
                                className='max-w-[60px] cursor-pointer'>
                                <a href={social.gmail}>
                                    <img src={require('../assets/Gmail.png')} loading="lazy" alt="telegram"
                                        className='hover:scale-75 transition-all duration-300' />
                                </a>
                            </div>
                            <div
                                data-aos="zoom-in" data-aos-delay="550"
                                className='max-w-[50px] cursor-pointer'>
                                <a href={social.github}>
                                    <img src={require('../assets/github.png')} loading="lazy" alt="twitter" className='hover:scale-75 transition-all duration-300' /></a>
                            </div>
                            <div
                                data-aos="zoom-in" data-aos-delay="600"
                                className='max-w-[60px] cursor-pointer'>
                                <a href={social.instagram}>
                                    <img src={require('../assets/Instagram.png')} loading="lazy" alt="Insta"
                                        className='hover:scale-75 transition-all duration-300' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative w-full min-h-[45vh] '>
                    <div
                        data-aos="zoom-out-up"  data-aos-duration="400"
                        className='  w-full flex items-center justify-center absolute bottom-0'>
                        <img
                            src={require('../assets/awesomeImg.png')}
                            loading='lazy'
                            alt="Deepanshu"
                            className={`${dark ? 'darkImg' : 'lightImg'} mx-auto max-w-[400px]`}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
