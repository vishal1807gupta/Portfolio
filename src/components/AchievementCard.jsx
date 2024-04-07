import React from 'react'

const AchievementCard = ({ achievement, dark }) => {
    const { title } = achievement ?? {};
    return (
        <div
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="200"
            className={`relative group ${dark ? 'bg-slate-900 shadow-stone-600' : 'bg-slate-300 ackdrop-blur-2xl '}  shadow-lg md:ml-4   w-full py-6 pb-4 px-3 md:px-6 cursor-pointer rounded-2xl  transition-all duration-300 overflow-hidden`}>

            {/* <div className={`${dark ? 'hidden' : 'absolute'} w-1/2 md:w-1/2 aspect-square rounded-full  top-[0%]  left-[50%] translate-x-[0%] translate-y-[0%] ${!dark ? 'bg-[#eb26fd] ' : 'bg-[#4942E4]'}  blur-[150px] group-hover:translate-x-[-20%] group-hover:translate-y-[-50%] transition-all duration-300`} /> */}

            <div className='w-full flex flex-col gap-y-2 justify-between'>
                <div className={`text-[1.2rem] font-semibold ${dark ? 'text-pink-600' : 'text-sky-900'} tracking-wider `}>
                    {title}
                </div>
            </div>
        </div>
    )
}

export default AchievementCard
