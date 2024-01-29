import React, { useEffect, lazy, Suspense } from 'react'
import TypingAnimation from '../components/TypingAnimation'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ProfileImg = lazy(() => import('../components/ProfileImg'));
const SocialMedia = lazy(() => import('../components/SocialMedia'));
const Home = ({ dark }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div id='home' className={`pt-4 relative w-full  ${dark ? 'dark' : 'light'} pb-10`} >
            

            <div className='w-full md:w-10/12  mx-auto gap-4 flex flex-col md:flex-row  px-4  '>
                <div className='z-[2] w-full pt-28  flex flex-col gap-y-6 md:items-start  justify-center  '>

                    <div data-aos="fade-right" data-aos-delay="300"
                        className='text-[2rem]   flex flex-col gap-4 w-full'>
                        <p>Hey! I'm</p>
                        <p className={`${dark ? 'text-pink-600' : 'text-sky-600 '} tracking-widest font-bold text-[2.5rem]  leading-snug md:text-[3rem]    animate-pulse`}>DEEPANSHU <br /> SINGHAL</p>
                    </div>

                    <div
                        data-aos="fade-right" data-aos-delay="350"
                        className='w-full'>
                        <TypingAnimation />
                    </div>

                    <div data-aos="fade-up" data-aos-delay="250"
                        className='w-full my-5 flex flex-row  gap-x-6 md:gap-x-12  md:items-center   text-[1.2rem]'>
                        <div className={`w-max relative  group overflow-hidden rounded-3xl  border-2 
                        ${dark ? 'border-pink-600' : 'border-sky-500'}`}>
                            <button className={`relative group-hover:z-[2] px-4 py-1 ${dark ? 'text-slate-100 ' : 'text-slate-800 '}  transition-all duration-300`}>
                                <a href={'https://drive.google.com/file/d/1eXCJvOTBdCHThZwqRXRT3HAx-COD_sv1/view?usp=sharing'}>Hire Me</a>
                            </button>
                            <div className={`absolute z-1 w-full top-0 translate-x-[-100%] px-2 py-1 h-full   group-hover:translate-x-0 transition-all duration-300 ${dark ? 'bg-pink-600' : 'bg-sky-500'}`}
                            />
                        </div>

                        <div className={`w-max relative  group overflow-hidden rounded-3xl  border-2 
                        ${dark ? 'border-pink-600' : 'border-sky-500'}`}>
                            <button className={`relative group-hover:z-[2] px-4 py-1 ${dark ? 'text-slate-100 ' : 'text-slate-800 '}  transition-all duration-300`}>
                                <a href="#contact">Contact Me</a>
                            </button>
                            <div className={`absolute z-1 w-full top-0 translate-x-[-100%] px-2 py-1 h-full   group-hover:translate-x-0 transition-all duration-300 ${dark ? 'bg-pink-600' : 'bg-sky-500'}`} />
                        </div>
                    </div>

                    <div
                        className='w-full flex flex-col justify-center max-w-[350px]  '>
                        <p data-aos="fade-right" data-aos-delay="350" className='md:ml-4 text-[1.2rem]'>FIND ME ON </p>
                        <div className='flex flex-row gap-2 justify-between  w-full md:w-max items-center '>
                            <Suspense fallback={<></>}>
                                <SocialMedia />
                            </Suspense>
                        </div>
                    </div>
                </div>


                <div className='relative w-full min-h-[60vh] '>
                    <div className='animate-backdrop absolute w-[250px] md:w-[400px] aspect-square rounded-full    bg-[#eb26fd] z-1 blur-[130px]' />
                    <Suspense fallback={<p>Loading Img</p>}>
                        <ProfileImg dark={dark} />
                    </Suspense>

                </div>

            </div>
        </div>
    )
}

export default Home
