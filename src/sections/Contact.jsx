import React from 'react'
import ContactUsForm from '../form/ContactUsForm'
const Contact = ({ dark }) => {

    const aboutMe = {
        intro: "Deepanshu Singhal",
        current: ` <b>B.Tech  CSE  NSIT<b>`,
        info: "Full Stack Developer ",
        email: `Email: <i>deepanshusinghal2003@gmail.com</i>`,
        location: "Location: <b>New Delhi, IN </b>"
    }

    return (
        <div id='contact' className={`relative w-full py-20 min-h-[50vh]  ${dark ? 'dark' : 'light'} overflow-hidden`
        }>
            <div className=' w-full md:w-10/12  h-full mx-auto gap-10 flex flex-col  px-1 md:px-4  '>
                <div className=' font-semibold flex gap-8'>
                    <div className='flex gap-4 relative max-w-max'>
                        <div className='z-[2]'>Contact</div>
                        <div className={`${dark ? 'bg-pink-400' : 'bg-sky-400'}  absolute w-12 aspect-square -right-4 -top-3 opacity-50 rounded-full animate-bubble`}></div>
                    </div>

                    <div className={` font-subheading scale-125 ${dark ? 'text-green-600' : 'text-sky-600'}`}>Me</div>

                </div>

                <div className='w-full flex flex-col lg:flex-row gap-6 gap-y-10 '>
                    <div className='relative max-w-max flex items-center justify-center  mx-auto group'
                        data-aos="fade-right">
                        {/* drop shadow */}
                        <div className={`absolute w-1/2 md:w-1/2 aspect-square rounded-full  top-[20%]  left-[20%]  ${dark ? 'bg-[#d580dd]' : 'bg-[#7873c4]'}  blur-[100px] group-hover:translate-x-[30%] group-hover:translate-y-[10%] transition-all duration-500`} />
                        <div className={`max-w-max flex flex-col gap-4  justify-center  text-[1rem] shadow-sm  rounded-3xl ${dark ? 'border-slate-400 shadow-slate-100' : 'border-slate-800 shadow-slate-800'} py-10 px-4 md:px-10  `}>
                            <div className={`text-[2.5rem] w-max ${dark ? 'text-pink-600' : 'text-sky-600'} font-semibold tracking-widest  font-heading `}>
                                {aboutMe?.intro}</div>
                            <div className='text-[1.4rem]'>{aboutMe?.info}</div>
                            <div dangerouslySetInnerHTML={{ __html: aboutMe?.current }} />
                            <div dangerouslySetInnerHTML={{ __html: aboutMe?.email }} />
                            <div dangerouslySetInnerHTML={{ __html: aboutMe?.location }} />
                        </div>
                    </div>

                    <div className='w-full'
                        data-aos="fade-left">
                        <div
                            className={`w-full  shadow-md rounded-lg ${dark ? 'shadow-stone-100' : 'shadow-stone-400'}`}>
                            <ContactUsForm dark={dark} />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Contact
