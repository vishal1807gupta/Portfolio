import React, { useState } from 'react'
import EducationCard from './EducationCard';
import AchievementCard from './AchievementCard';

const About = ({ dark }) => {
    const [active, setActive] = useState("Education")
    const education = [
        {
            title: "B.Tech (CSE)",
            institute: "Netaji Subhas University Of Technology",
            duration: "2021 - 2025",
            grade: "8.5 GPA",
            percent: '80.79'
        },
        {
            title: "CBSE XII",
            institute: "Sant Gyaneshwar Model School",
            duration: "2019 - 2021",
            grade: "81.2%",
            percent: '81'
        },
        {
            title: "CBSE X",
            institute: "DAV Centenary Public School",
            duration: "2017 - 2019",
            grade: "92%",
            percent: '92'
        },
    ]
    const achievements = [
        {
            title: "Codeforces Pupil Max(1407)"
        },
        {
            title: "3star at CodeChef"
        },
        {
            title: "Solved 800+ problems on Leetcode"
        },
        {
            title: "Top 5% at Leetcode "
        }
    ]
    return (
        <div id='about' className={`relative w-full pt-20 min-h-[50vh]  ${dark ? 'dark' : 'light'}`}>
            <div className='w-full md:w-10/12   h-full mx-auto gap-10 flex flex-col  px-4  '>
                <div className=' font-semibold'>Education Qualification</div>
                <div className='relative w-full max-w-[95%] md:max-w-[700px] md:mx-auto'>

                    <div className='w-full px-8 h-max  flex  flex-row items-center gap-x-6 justify-around text-[1.2rem] py-2 '>
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
                            active === "Education" && education?.map((edu) => (
                                <div className='relative w-full ml-4 key={i} '>
                                    <div className={`z-[2] absolute inset-y-4 -left-6 animate-ping w-6 h-6 rounded-full border-2 ${dark ? 'border-slate-100 bg-pink-600' : 'border-slate-700 bg-sky-500'} `} />
                                    <div className={`z-[2] absolute inset-y-4 -left-6  w-6 h-6 rounded-full border-2 ${dark ? 'border-slate-100 bg-pink-600' : 'border-slate-700 bg-sky-500'} `} />
                                    <div className={`z-[2] absolute inset-y-6 -left-0 w-12 h-1   ${dark ? 'bg-yellow-200' : 'bg-purple-500'}`} />
                                    <EducationCard dark={dark} edu={edu} />
                                </div>
                            ))
                        }
                        {
                            active === "Achievements" && achievements?.map((achievement) => (
                                <div className='relative w-full h-max ml-4 key={i} '>
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

export default About;
