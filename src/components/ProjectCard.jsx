import React from 'react'
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";


const ProjectCard = ({ dark, project }) => {
    const { title, desc, techStack, info, image, sourceCode, liveView, color,enterAnimation,delay } = project ?? {};
    return (
        <div 
            data-aos={`${enterAnimation}`}
            data-aos-anchor-placement="top-bottom"
            data-aos-delay={`${delay}`}>
            <div

            className={`w-full  max-w-[390px] ${dark ? 'bg-slate-900 shadow-stone-600' : 'bg-slate-300'} shadow-md cursor-pointer  overflow-hidden rounded-3xl `}>

            <div className=' w-full flex flex-col gap-y-4  '>

                <div className='relative group w-full h-[200px] overflow-hidden'>
                    <img src={image} alt="Img" loading='lazy' className='w-full  aspect-video mx-auto bg-cover' />
                    <div className={`absolute z-[2] w-full h-[220px] translate-y-[-200%]  text-${color}   ${dark ? 'bg-transparent  backdrop:blur-3xl' : 'bg-gray-400'}  backdrop-blur-sm  group-hover:translate-y-[-100%] transition-all duration-300`} >
                        <div className='flex items-center  justify-center px-6 py-6 h-full w-full text-[1.5rem] tracking-wide leading-8'>
                            {info}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col px-6 pb-6'>
                    <div className='flex flex-row items-center justify-between'>
                        <div className={`text-[1.7rem] font-semibold tracking-wider ${dark ? 'text-pink-600' : 'text-blue-700'}`}>{title}</div>
                        <div className='  flex items-center justify-center gap-4'>
                            <a href={sourceCode} target="_blank" className='hover:scale-90 duration-300  transition-all'>
                                <FaGithub />
                            </a>
                            <a href={liveView} target="_blank" className='hover:scale-90 duration-300  transition-all'>
                                <MdArrowOutward size={'2.4rem'} />
                            </a>
                        </div>
                    </div>
                    <div className='text-[1rem] opacity-75'>{desc}</div>
                    <div className='text-[1.2rem] '>{techStack}</div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default ProjectCard
