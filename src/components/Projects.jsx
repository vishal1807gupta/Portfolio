import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = ({ dark }) => {
    const projects = [
        {
            title: "StudyNotion",
            desc: "Educational Platform",
            techStack: "Mongo Express ReactJs NodeJs",
            info: "This is a full stack projectkenkjfbnkjrbgkjbjb",
            image: "https://hycare-project.eu/wp-content/uploads/2020/03/14-slideshow.jpg",
            sourceCode: "https://github.com/"
        },
        {
            title: "BloggingSpot",
            desc: "Post and read blogs",
            techStack: "ReactJs Tailwind CSS",
            info: "This is a full stack project",
            image: "https://hycare-project.eu/wp-content/uploads/2020/03/14-slideshow.jpg",
            sourceCode: "https://github.com/"
        },
        {
            title: "Razorpay Clone",
            desc: "Responsive Tailwind Styling",
            techStack: "HTML Tailwind CSS",
            info: "This is a full stack project",
            image: "https://hycare-project.eu/wp-content/uploads/2020/03/14-slideshow.jpg",
            sourceCode :"https://github.com/"
        },
    ]
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
