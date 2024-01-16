import React from 'react'
import ContactUsForm from './ContactUsForm'

const Contact = ({ dark }) => {
    const aboutMe = {
        intro: "Deepanshu Singhal",
        current: "Pursuing B.Tech in CSE from NSUT ",
        info: "I am a full stack developer",
        email: "deepanshusinghal2003@gmail.com",
        location: "New Delhi, IN"
    }

    return (
        <div id='contact' className={`relative w-full py-20 min-h-[50vh]  ${dark ? 'dark' : 'light'} overflow-hidden`
        }>
            <div className='w-full md:w-10/12  h-full mx-auto gap-10 flex flex-col  px-1 md:px-4  '>
                <div className=' font-semibold flex gap-8'>
                    <div className='flex gap-4 relative max-w-max'>
                        <div className='z-[2]'>Contact</div>
                        <div className={`${dark ? 'bg-pink-400' : 'bg-sky-400'}  absolute w-12 aspect-square -right-4 -top-3 opacity-50 rounded-full animate-bubble`}></div>
                    </div>

                    <div className={` font-subheading scale-125 ${dark ? 'text-green-600' : 'text-sky-600'}`}>Me</div>

                </div>

                <div className='w-full flex flex-col lg:flex-row gap-6 gap-y-10 '>
                    <div className='max-w-max flex items-center justify-center  mx-auto'
                        data-aos="fade-right">
                        <div className={`max-w-max flex flex-col gap-4  justify-center  text-[1rem] shadow-sm  rounded-3xl ${dark ? 'border-slate-400 shadow-slate-100' : 'border-slate-800 shadow-slate-800'} py-10 px-4 md:px-10  `}>
                            <div className={`text-[2.5rem] w-max ${dark ? 'text-pink-600' : 'text-sky-600'} font-semibold tracking-widest  font-heading `}>
                                {aboutMe?.intro}</div>
                            <div className='text-[1.4rem]'>{aboutMe?.info}</div>
                            <div> {aboutMe?.current}</div>
                            <div>Email : {aboutMe?.email}</div>
                            <div>Location : {aboutMe?.location}</div>
                        </div>
                    </div>

                    <div className='w-full'
                        data-aos="fade-left">
                        <div
                            className={`w-full  shadow-md rounded-lg ${dark ? 'shadow-stone-100' : 'shadow-stone-700'}`}>
                            <ContactUsForm dark={dark} />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Contact
