import React from 'react'

const AchievementCard = ({ achievement, dark }) => {
    const { title } = achievement ?? {};
    return (
        <div 
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="200"
            className={`${dark ? 'bg-slate-900 shadow-stone-600' : 'bg-slate-300 '} h-max shadow-lg md:ml-4   w-full pt-10 pb-8 px-6 cursor-pointer rounded-2xl hover:scale-95 transition-all duration-300`}>

            <div className='w-full flex flex-col gap-y-2 justify-between'>
                <div className={`text-[1.2rem] font-semibold ${dark ? 'text-pink-600' : 'text-sky-700'} tracking-wider`}>{title}</div>
            </div>
        </div>
    )
}

export default AchievementCard
