import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const CertificateCard = ({ dark, certificate }) => {
    const { title, image, enterAnimation, delay } = certificate ?? {};
    return (
        <div
            data-aos={`${enterAnimation}`}
            data-aos-anchor-placement="top-bottom"
            data-aos-delay={`${delay}`}>
            <div

                className={`w-full     ${dark ? 'bg-slate-900 shadow-yellow-600' : 'bg-slate-300'} shadow-md  sha cursor-pointer  overflow-hidden rounded-3xl  hover:shadow-none duration-300 transition-shadow  `}>

                <div className=' w-full flex flex-col gap-y-2  '>

                   
                    <div className='relative group w-full  overflow-hidden aspect-video rounded-t-3xl'>
                        <LazyLoadImage
                            effect="blur"
                            height={image.height}
                            src={image}
                            width={image.width}
                            className='bg-cover aspect-video' />
                    </div>
                    <div className='flex flex-col px-2'>
                        <div className={`text-[1rem] text-center font-semibold tracking-wider ${dark ? 'text-pink-600' : 'text-blue-700'}`}>
                            {title}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CertificateCard
