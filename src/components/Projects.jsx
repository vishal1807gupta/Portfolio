import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projectData'

const Projects = ({ dark }) => {

    return (
        <div id='projects' className={`relative w-full py-20  md:py-20   ${dark ? 'dark' : 'light'}`}>
            <div className='w-full md:w-10/12  h-full mx-auto gap-10 flex flex-col px-4  '>

                <div className=' font-semibold flex gap-8'>
                    <div className='flex gap-4 relative max-w-max'>
                        <div className='z-[2]'>Project</div>
                        <div className={`${dark ? 'bg-pink-400' : 'bg-sky-400'}  absolute w-12 h-12 -right-4 -top-3 opacity-50 rounded-full  animate-bubble`}></div>
                    </div>

                    <div className={` font-subheading scale-125 ${dark ? 'text-green-600' : 'text-sky-600'}`}>Gallery</div>

                </div>

                <div className='flex flex-wrap gap-x-4 gap-y-6 w-full  items-center '>
                    {projects?.map((project, i) => <div className='w-full  lg:max-w-[45%] xl:max-w-[30%]'>
                        <ProjectCard dark={dark} project={project} key={i} />
                    </div>)}
                </div>
            </div>

        </div>
    )
}

export default Projects
