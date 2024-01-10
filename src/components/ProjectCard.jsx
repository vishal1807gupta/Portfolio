import React from 'react'

const ProjectCard = ({ dark, project }) => {
    const { title, desc, techStack, info, image, sourceCode } = project ?? {};
    return (
        <div className={`w-full  max-w-[390px] ${dark ? 'bg-slate-900 shadow-stone-600' : 'bg-stone-300'} shadow-md cursor-pointer  overflow-hidden rounded-3xl`}>

            <div className=' w-full flex flex-col gap-y-4  '>

                <div className='relative group w-full '>
                    <img src={image} alt="Img" lazy />
                    <div className={`absolute z-[2] w-full h-full translate-y-[-200%]     ${dark ? 'bg-gray-800' : 'bg-gray-400'}  backdrop-blur-sm  group-hover:translate-y-[-100%] transition-all duration-300`} >
                        <div className='flex items-center  justify-center px-6 py-6 h-full w-full text-[1rem] tracking-wide leading-4'>
                            {info}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col px-6 pb-6'>
                    <div className='flex flex-row items-center justify-between'>
                        <div className={`text-[1.7rem] font-semibold tracking-wider ${dark ? 'text-pink-600' : 'text-sky-500'}`}>{title}</div>
                        <div className='max-w-[50px] hover:scale-90 duration-300  transition-all'>
                            <a href={sourceCode}>
                                <img src={require('../assets/github.png')} alt="git" lazy />
                            </a>
                        </div>
                    </div>
                    <div className='text-[1rem] opacity-75'>{desc}</div>
                    <div className='text-[1.2rem] '>{techStack}</div>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard
