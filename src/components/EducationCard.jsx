import React from 'react'

const EducationCard = ({ dark, edu }) => {
    const { title, institute, duration, grade, percent } = edu;
    return (
        <div className={`relative   ${dark ? 'bg-slate-900 shadow-stone-600' : 'bg-slate-300 ackdrop-blur-2xl '} shadow-lg   w-full pt-6 pb-6 px-3 md:px-4 cursor-pointer rounded-2xl transition-all duration-300 group overflow-hidden`}>

           

            {/* <div className={`${dark?'hidden':'absolute'} w-1/2 md:w-1/2 aspect-square rounded-full  top-[0%]  left-[50%] translate-x-[0%] translate-y-[0%] ${!dark ? 'bg-blue-300 ' : 'bg-[#4942E4]'}  blur-[150px] group-hover:translate-x-[-20%] group-hover:translate-y-[-50%] transition-all duration-300`} /> */}

            <div className='w-full flex flex-col justify-between'>
                <div className={`text-[1.5rem] font-semibold ${dark ? 'text-pink-600' : 'text-sky-900'} tracking-wider`}>{title}</div>
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
