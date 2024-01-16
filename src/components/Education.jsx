import React, { useState } from 'react'
import EducationCard from './EducationCard';
import AchievementCard from './AchievementCard';
import { achievements } from '../data/achievementData';
import { education } from '../data/educationData';
const Education = ({ dark }) => {
    const [active, setActive] = useState("Education")


    return (
        <div id='education' className={`relative w-full pt-20 min-h-[50vh]  ${dark ? 'dark' : 'light'} `}>
            <div className='w-full md:w-10/12   h-full mx-auto gap-10 flex flex-col  px-4  '>
                <div className=' font-semibold flex gap-8'>
                    <div className='flex gap-4 relative max-w-max'>
                        <div className='z-[2]'>Academia </div>
                        <div className={`${dark ? 'bg-pink-400' : 'bg-sky-400'}  absolute w-12 aspect-square -right-4 -top-3 opacity-50 rounded-full animate-bubble`}></div>
                    </div>

                    <div className={` font-subheading scale-125 ${dark ? 'text-green-600' : 'text-sky-600'}`}> Highlights</div>

                </div>
                <div className='relative w-full max-w-[95%] md:w-[70%] md:mx-auto'>

                    <div className='w-full px-8 h-max  flex  flex-row items-center md:gap-x-6 justify-around text-[1.2rem] py-2 '>
                        <div className={`w-max border ${active === "Education" ? dark ? ' border-pink-600' : ' border-sky-500' : 'border-hidden'} py-1 my-1 mx-2 px-5 rounded-xl duration-300 transition-all`}
                        >
                            <button onClick={() => setActive("Education")}>
                                Education
                            </button>
                        </div>
                        <div className={`w-max border ${dark ? 'shadow-lg' : ''} ${active === "Achievements" ? dark ? ' border-pink-600' : ' border-sky-500' : ' border-hidden'} py-1 my-1 mx-2 px-5 rounded-xl duration-300 transition-all`}>
                            <button onClick={() => setActive("Achievements")}>
                                Achievements
                            </button>
                        </div>
                    </div>

                    <div className='w-1 -translate-y-0 h-full bg-slate-400 absolute' />
                    <div className='my-4 w-full flex flex-col   gap-8'>
                        {
                            active === "Education" && education?.map((edu, i) => (
                                <div
                                    data-aos="fade-up"
                                    className='relative w-full ml-4' key={i}>
                                    <div className={`z-[2] absolute inset-y-4 -left-6 animate-ping w-6 h-6 rounded-full border-2 ${dark ? 'border-slate-100 bg-pink-600' : 'border-slate-700 bg-sky-500'} `} />
                                    <div className={`z-[2] absolute inset-y-4 -left-6  w-6 h-6 rounded-full border-2 ${dark ? 'border-slate-100 bg-pink-600' : 'border-slate-700 bg-sky-500'} `} />
                                    <div className={`z-[2] absolute inset-y-6 -left-0 w-12 h-1   ${dark ? 'bg-yellow-200' : 'bg-purple-500'}`} />
                                    <EducationCard dark={dark} edu={edu} />
                                </div>
                            ))
                        }
                        {
                            active === "Achievements" && achievements?.map((achievement, i) => (
                                <div
                                    data-aos="fade-up"
                                    className='relative w-full h-max ml-4' key={i} >
                                    <div className={`z-[2] absolute inset-y-4 -left-6 w-6 h-6 rounded-full border-2 ${dark ? 'border-slate-100 bg-pink-600' : 'border-slate-700 bg-sky-500'} `} />
                                    <div className={`z-[2] absolute inset-y-4 -left-6 w-6 h-6 animate-ping rounded-full border-2 ${dark ? 'border-slate-100 bg-pink-600' : 'border-slate-700 bg-sky-500'} `} />
                                    <div className={`z-[2] absolute inset-y-6 -left-0 w-12 h-1   ${dark ? 'bg-yellow-200' : 'bg-purple-500'}`} />
                                    <AchievementCard dark={dark} achievement={achievement} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;
