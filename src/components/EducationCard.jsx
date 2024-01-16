import React from 'react'

const EducationCard = ({ dark, edu }) => {
    const { title, institute, duration, grade, percent } = edu;
    return (
        <div className={`${dark ? 'bg-slate-900 shadow-stone-600' : 'bg-slate-300 '} shadow-lg   w-full pt-10 pb-8 px-3 md:px-6 cursor-pointer rounded-2xl hover:opacity-70 transition-all duration-300`}>

            <div className='w-full flex flex-col justify-between'>
                <div className={`text-[1.5rem] font-semibold ${dark ? 'text-pink-600' : 'text-sky-700'} tracking-wider`}>{title}</div>
                <div className='leading-snug'>
                    <div className='text-[1rem]'>{institute}</div>
                    <div className='text-[1rem] text-right opacity-50'>({duration})</div>
                </div>
                <div className='text-[1.2rem] '>Grade: <span className='font-bold'>{grade}</span></div>

                <div className={`relative w-full h-2 bg-stone-600 rounded-lg overflow-hidden`}>
                    <div
                        style={{ width: `${percent}%`, }}
                        className={`absolute  left-0 -translate-x-[${percent}%]   h-2 ${dark ? 'bg-gradient-to-r from-purple-600 to-pink-600' :'bg-gradient-to-r from-red-600 to-blue-600'} rounded-lg`} />
                </div>
            </div>

        </div>
    )
}

export default EducationCard
