import React from 'react'
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProjectCard = ({ dark, project }) => {
    const { title, desc, techStack, image, sourceCode, liveView, enterAnimation, delay } = project ?? {};
    return (
        <div
            data-aos={`${enterAnimation}`}
            data-aos-anchor-placement="top-bottom"
            data-aos-delay={`${delay}`}>
            <div

                className={`w-full  ${dark ? 'bg-slate-900 shadow-stone-600' : 'bg-slate-300'} shadow-md cursor-pointer  overflow-hidden rounded-3xl `}>

                <div className=' w-full flex flex-col gap-y-4  '>

                    <div className='relative group w-full  overflow-hidden aspect-video'>
                        <LazyLoadImage
                            effect="blur"
                            height={image.height}
                            src={image}
                            width={image.width}
                        className='bg-cover aspect-video rounded-3xl'/>
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
