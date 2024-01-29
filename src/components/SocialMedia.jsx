import React from 'react'
import { social } from '../data/socialLinkData';

const SocialMedia = () => {
    return (
        <>
            {
                social.map((socialItem, index) => (
                    <div key={index}
                        data-aos="zoom-in" data-aos-delay="450"
                        className='max-w-12 cursor-pointer '>
                        <a href={socialItem.link}><img src={socialItem.img} loading="lazy" alt="linked"
                            className='hover:scale-75 transition-all duration-300' /></a>
                    </div>
                ))
            }
        </>
    )
}

export default SocialMedia
