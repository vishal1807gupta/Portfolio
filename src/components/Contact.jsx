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
        <div id='contact' className={`relative w-full py-20 min-h-[50vh]  ${dark ? 'dark' : 'light'}`
        }>
            <div className='w-full md:w-10/12  h-full mx-auto gap-10 flex flex-col   px-4  '>
                <div className=' font-semibold'>Contact Me</div>

                <div className='w-full flex flex-col md:flex-row gap-6 '>
                    <div className={`w-full flex flex-col gap-4  justify-center  text-[1rem] border-2 rounded-3xl ${dark?'border-slate-400':'border-slate-800'} py-6 px-4 md:px-10  `}>
                        <div className={`text-[1.8rem] ${dark ? 'text-purple-600' :'text-sky-600'} font-semibold tracking-wider`}>
                            {aboutMe?.intro}</div>
                        <div className='text-[1.4rem]'>{aboutMe?.info}</div>
                        <div> {aboutMe?.current}</div>
                        <div>Email : {aboutMe?.email}</div>
                        <div>Location : {aboutMe?.location}</div>
                    </div>
                    <div className='w-full drop-shadow-2xl'>
                        <ContactUsForm dark={dark} />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Contact
