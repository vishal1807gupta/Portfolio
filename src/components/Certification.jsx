import React from 'react'
import { certificates } from '../data/certificationData'
import CertificateCard from './CertificateCard'

const Certification = ({ dark }) => {
    return (
        <div id='certification' className={`relative w-full py-20  md:py-20   ${dark ? 'dark' : 'light'}`}>
            <div className='w-full md:w-10/12  h-full mx-auto gap-10 flex flex-col px-4  '>

                <div className=' font-semibold flex gap-8'>
                    <div className='flex gap-4 relative max-w-max'>
                        <div className='z-[2]'>Certification</div>
                        <div className={`${dark ? 'bg-pink-400' : 'bg-sky-400'} animate-bubble  absolute w-12 aspect-square -right-4 -top-3 opacity-50 rounded-full`}></div>
                    </div>

                    <div className={` font-subheading scale-125 ${dark ? 'text-green-600' : 'text-sky-600'}`}>Highlights</div>

                </div>

                <div className='flex flex-wrap gap-8 w-full'>
                    {certificates?.map((certificate,i) => <CertificateCard dark={dark} certificate={certificate} key={i} />)}
                </div>
            </div>

        </div>
    )
}

export default Certification
