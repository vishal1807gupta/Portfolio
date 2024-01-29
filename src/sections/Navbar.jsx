import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { MdOutlineLightMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import NavComponent from '../components/NavComponent';

const Navbar = ({ dark, setDark }) => {

    const [isOpen, setOpen] = useState(false)
    return (
        <div className={`z-[10]   md:w-11/12 mx-auto rounded-3xl  ${dark ? 'shadow-[#eb26fd] ' : 'shadow-[#9184db]'}  relative  ${isOpen ? dark ? 'dark' : 'light' : 'backdrop-blur-2xl'}   py-4 text-[1.3rem] shadow-sm  flex`}>

            <div className={`w-full md:w-10/12 mx-auto overflow-y-hidden flex flex-row items-center   justify-between px-4 `}>
                <div className='cursor-pointer bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient font-extrabold  text-[2rem] flex gap-3 items-center '>
                    <img src={require('../assets/awesomeImg.png')} alt="Logo" className='w-12 aspect-square rounded-full ' />
                    <a href="#home" className='font-logo  text-[2.2rem]   '>Deepanshu</a>
                </div>

                <div className='absolute right-10 mr-1 block md:hidden z-[10]'>
                    < Hamburger toggled={isOpen} toggle={setOpen} size={25} />
                </div>


                <div className={`absolute  right-0 top-20 min-h-[80vh]   z-[10]  backdrop-blur-2xl w-full flex items-center justify-center  ${!isOpen ? ' translate-x-[120%]' : 'translate-x-0'}  duration-300 transition-all`} onClick={() => setOpen(false)}>
                    <div className={`w-full h-[88vh] flex flex-col gap-y-6 items-center justify-center `}>
                        <NavComponent component={{ target: 'home', heading: "HOME" }} />
                        <NavComponent component={{ target: 'education', heading: "LEARNINGS" }} />
                        <NavComponent component={{ target: 'projects', heading: "PROJECTS" }} />
                        <NavComponent component={{ target: 'certification', heading: "CERTIFICATION" }} />
                        <NavComponent component={{ target: 'rankings', heading: "RANKINGS" }} />
                        <NavComponent component={{ target: 'contact', heading: "CONTACT" }} />
                    </div>
                </div>


                {/* Large screen size */}
                <div className='gap-x-3 hidden md:flex flex-row overflow-hidden'>
                    <NavComponent component={{ target: 'home', heading: "HOME" }} />
                    <NavComponent component={{ target: 'education', heading: "LEARNINGS" }} />
                    <NavComponent component={{ target: 'projects', heading: "PROJECTS" }} />
                    <NavComponent component={{ target: 'certification', heading: "CERTIFICATION" }} />
                    <NavComponent component={{ target: 'rankings', heading: "RANKINGS" }} />
                    <NavComponent component={{ target: 'contact', heading: "CONTACT" }} />
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

