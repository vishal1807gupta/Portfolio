import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { MdOutlineLightMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({ dark, setDark }) => {

    const [isOpen, setOpen] = useState(false)
    return (
        <div className={`w-full relative ${dark ? 'bg-gray-900 z-[1] text-slate-50 shadow-slate-600' : 'bg-slate-200 shadow-slate-300'} py-2 text-[1.3rem] shadow-lg  flex`}>
            <div className={`w-full md:w-10/12 mx-auto overflow-y-hidden flex flex-row items-center justify-between px-4`}>
                <div className='cursor-pointer'>
                    PORTFOLIO
                </div>

                <div className='absolute right-10 top-1 block md:hidden z-[10]'>
                    < Hamburger toggled={isOpen} toggle={setOpen} size={25} />
                </div>


                <div className={`absolute  right-0 top-12 min-h-[80vh]   z-[100]  backdrop-blur-2xl w-full flex items-center justify-center  ${!isOpen ? ' translate-x-[100%]' : 'translate-x-0'}  duration-300 transition-all`} onClick={() => setOpen(false)}>
                    <div className={`w-full  flex flex-col gap-y-6 `}>
                        <div className='w-max relative group overflow-hidden mx-auto'>
                            <div className='w-full h-[0.1rem] bg-sky-700 absolute bottom-0 translate-x-[-100%] group-hover:translate-x-0  transition-all duration-300' />
                            <a href="#home" className=' hover:text-sky-700  rounded-3xl px-3 transition-all duration-300'>HOME</a>
                        </div>

                        <div className='w-max relative group overflow-hidden mx-auto'>
                            <div className='w-full h-[0.1rem] bg-sky-700 absolute bottom-0 translate-x-[-100%] group-hover:translate-x-0  transition-all duration-300' />
                            <a href="#about" className=' hover:text-sky-700  rounded-3xl px-3 transition-all duration-300'>ABOUT</a>
                        </div>

                        <div className='w-max relative group overflow-hidden mx-auto'>
                            <div className='w-full h-[0.1rem] bg-sky-700 absolute bottom-0 translate-x-[-100%] group-hover:translate-x-0  transition-all duration-300' />
                            <a href="#projects" className=' hover:text-sky-700  rounded-3xl px-3 transition-all duration-300'>PROJECTS</a>
                        </div>

                        <div className='w-max relative group overflow-hidden mx-auto'>
                            <div className='w-full h-[0.1rem] bg-sky-700 absolute bottom-0 translate-x-[-100%] group-hover:translate-x-0  transition-all duration-300' />
                            <a href="#contact" className=' hover:text-sky-700  rounded-3xl px-3 transition-all duration-300'>CONTACT</a>
                        </div>

                    </div>
                </div>


                {/* Large screen size */}
                <div className='gap-x-6 hidden md:flex flex-row'>

                    <div className='w-max relative group overflow-hidden'>
                        <div className='w-full h-[0.1rem] bg-sky-700 absolute bottom-0 translate-x-[-100%] group-hover:translate-x-0  transition-all duration-300' />
                        <a href="#home" className=' hover:text-sky-700  rounded-3xl px-3 transition-all duration-300'>HOME</a>
                    </div>

                    <div className='w-max relative group overflow-hidden'>
                        <div className='w-full h-[0.1rem] bg-sky-700 absolute bottom-0 translate-x-[-100%] group-hover:translate-x-0  transition-all duration-300' />
                        <a href="#about" className=' hover:text-sky-700  rounded-3xl px-3 transition-all duration-300'>ABOUT</a>
                    </div>

                    <div className='w-max relative group overflow-hidden'>
                        <div className='w-full h-[0.1rem] bg-sky-700 absolute bottom-0 translate-x-[-100%] group-hover:translate-x-0  transition-all duration-300' />
                        <a href="#projects" className=' hover:text-sky-700  rounded-3xl px-3 transition-all duration-300'>PROJECTS</a>
                    </div>

                    <div className='w-max relative group overflow-hidden'>
                        <div className='w-full h-[0.1rem] bg-sky-700 absolute bottom-0 translate-x-[-100%] group-hover:translate-x-0  transition-all duration-300' />
                        <a href="#contact" className=' hover:text-sky-700  rounded-3xl px-3 transition-all duration-300'>CONTACT</a>
                    </div>

                </div>


            </div>
            <div className='text-2xl flex items-center justify-center z-[10] mr-4 cursor-pointer'
                onClick={() => setDark(!dark)}>
                {!dark ? <BsFillMoonStarsFill color='#000000' /> : <MdOutlineLightMode color='#fff000' />}
            </div>
        </div>
    )
}

export default Navbar

