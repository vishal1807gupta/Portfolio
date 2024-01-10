import React from 'react'
import '../index.css'
import TypingAnimation from './TypingAnimation'

const Home = ({ dark }) => {
    return (
        <div id='home' className={`pt-10 relative w-full  ${dark ? 'dark' : 'light'}`}>

            <div className='w-full md:w-10/12  h-full mx-auto gap-4 flex flex-col md:flex-row  px-4  '>
                <div className='z-[2] w-full py-20  flex flex-col gap-y-6 items-center md:items-start  justify-center overflow-hidden'>

                    <div className='text-[3rem]   flex flex-col gap-4 w-full'>
                        <p>Hey! I'm</p>
                        <p className={`${dark ? 'text-pink-600' : 'text-sky-600 '} tracking-wide font-bold text-[2rem] md:text-[3rem]`}>Deepanshu Singhal</p>
                    </div>

                    <div className='w-full'>
                        <TypingAnimation />
                    </div>

                    <div className='w-full my-5 flex flex-row  md:items-center gap-x-12 text-[1.2rem]'>
                        <div className={`w-max relative  group overflow-hidden rounded-3xl  border-2 
                        ${dark ? 'border-pink-600' : 'border-sky-500'}`}>
                            <button className={`relative group-hover:z-[2] px-4 py-1 ${dark ? 'text-slate-100 ' : 'text-slate-800 '}  transition-all duration-300`}>
                                Hire Me
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

                    <div className='w-full flex flex-col justify-center'>
                        <p className='md:ml-4 text-[1.2rem]'>FIND ME IN </p>
                        <div className='flex flex-row gap-2 justify-between  w-full md:w-max items-center '>
                            <div className='max-w-[80px] cursor-pointer hover:scale-75 transition-all duration-300'>
                                <img src={require('../assets/Instagram.png')} loading="lazy"  alt="Insta"/>
                            </div>
                            <div className='max-w-[80px] cursor-pointer hover:scale-75 transition-all duration-300'>
                                <img src={require('../assets/LinkedIn.png')} loading="lazy" alt="linked" />
                            </div>
                            <div className='max-w-[80px] cursor-pointer hover:scale-75 transition-all duration-300'>
                                <img src={require('../assets/Telegram.png')} loading="lazy" alt="telegram" />
                            </div>
                            <div className='max-w-[80px] cursor-pointer hover:scale-75 transition-all duration-300'>
                                <img src={require('../assets/X.png')} loading="lazy" alt="twitter" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative w-full min-h-[34vh] '>
                    <div className='max-w-[400px] flex items-center justify-center absolute bottom-0'>
                        <img
                            src={require('../assets/awesomeImg.png')}
                            loading='lazy'
                            alt="Deepanshu"
                            className={`${dark ? 'darkImg' : 'lightImg'}`}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
