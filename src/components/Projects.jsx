import React from 'react'
import ProjectCard from './ProjectCard'
import {projects} from '../data/projectData'

const Projects = ({ dark }) => {

    return (
        <div id='projects' className={`relative w-full py-20  md:py-20   ${dark ? 'dark' : 'light'}`}>
            <div className='w-full md:w-10/12  h-full mx-auto gap-10 flex flex-col px-4  '>
                <div className=' font-semibold'>My Projects</div>

                <div className='flex flex-wrap gap-8 w-full'>
                    {projects?.map((project, i) => <ProjectCard dark={dark} project={project} key={i} />)}
                </div>
            </div>

        </div>
    )
}

export default Projects
