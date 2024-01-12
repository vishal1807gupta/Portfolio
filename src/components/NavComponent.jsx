import React from 'react'

const NavComponent = ({ component }) => {
    const { target, heading } = component ?? {};
    return (
        <div
            data-aos="fade-left">
            <div className='w-max relative group overflow-hidden'>
                <div className='w-full h-[0.1rem] bg-sky-700 absolute bottom-0 translate-x-[-100%] group-hover:translate-x-0  transition-all duration-300' />
                <a href={`#${target}`} className=' hover:text-sky-700  rounded-3xl px-3 transition-all duration-300 text-[1rem]'>
                    {heading}
                </a>
            </div>
        </div>
    )
}

export default NavComponent
