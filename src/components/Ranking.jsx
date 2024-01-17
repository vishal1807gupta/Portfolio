import React from 'react'
import { rankings } from '../data/Ranking'
import CertificateCard from './CertificateCard';

const Ranking = ({ dark }) => {
    return (
        <div id='rankings' className={`relative w-full py-20  md:py-20   ${dark ? 'dark' : 'light'}`}>
            <div className='w-full md:w-10/12  h-full mx-auto gap-10 flex flex-col px-4  '>

                <div className=' font-semibold flex gap-8'>
                    <div className='flex gap-4 relative max-w-max'>
                        <div className='z-[2]'>Ranking</div>
                        <div className={`${dark ? 'bg-pink-400' : 'bg-sky-400'} animate-bubble  absolute w-12 aspect-square -right-4 -top-3 opacity-50 rounded-full`}></div>
                    </div>

                    <div className={` font-subheading scale-125 ${dark ? 'text-green-600' : 'text-sky-600'}`}>Highlights</div>

                </div>

                <div className='flex flex-col md:flex-row flex-wrap  gap-x-3 gap-y-10 w-full items-center justify-around '>
                    {
                        rankings?.map((rank, i) =>
                            <div className='w-full lg:max-w-[35%] h-max' key={i}>
                                <CertificateCard dark={dark} certificate={rank} />
                            </div>)
                    }
                </div>
            </div>

        </div>
    )
}

export default Ranking

