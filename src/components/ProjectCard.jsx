import React, { Suspense } from 'react'
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import 'react-lazy-load-image-component/src/effects/blur.css';
const LoadImage = React.lazy(() => import('./LoadImage'));

const ProjectCard = ({ dark, project }) => {
    const { title, desc, techStack, image, sourceCode, liveView, enterAnimation, delay } = project ?? {};
    return (
        <div
            data-aos={`${enterAnimation}`}
            data-aos-anchor-placement="top-bottom"
            data-aos-delay={`${delay}`}
        >
            <div

                className={`relative w-full  shadow-md cursor-pointer  overflow-hidden rounded-3xl   group transition-all duration-300`}>

                <div className={`absolute w-1/3 md:w-1/3 aspect-square rounded-full  top-[50%]  left-[50%] translate-x-[50%] translate-y-[50%] ${dark ? 'bg-[#eb26fd]' : 'bg-[#4942E4]'}  blur-[100px] group-hover:translate-x-[-100%] group-hover:translate-y-[10%] transition-all duration-300`} />
                <div className=' w-full flex flex-col gap-y-4  '>

                    <div className='relative group w-full  overflow-hidden aspect-video rounded-t-3xl'>
                        <Suspense fallback={<><img src={require('../assets/Spinner.svg')} alt='Loading...' /></>}>
                            <LoadImage srcPath={image} />
                        </Suspense>
                    </div>

                    <div className='flex flex-col px-6 pb-4'>
                        <div className='flex flex-row items-center justify-between'>
                            <div className={`text-[1.2rem] font-semibold tracking-wider ${dark ? 'text-pink-600' : 'text-blue-700'}`}>{title}</div>
                            <div className='  flex items-center justify-center gap-4'>
                                <a href={sourceCode} target='_blank' rel="noopener noreferrer" className='hover:scale-90 duration-300  transition-all'>
                                    <FaGithub size={'1.8rem'} />
                                </a>
                                <a href={liveView} target='_blank' rel="noopener noreferrer" className='hover:scale-90 duration-300  transition-all'>
                                    <MdArrowOutward size={'2rem'} />
                                </a>
                            </div>
                        </div>
                        <div className='text-[0.8rem] opacity-75 leading-4 mt-3'>{desc}</div>
                        <div className='text-[0.8rem] '>{techStack}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard
