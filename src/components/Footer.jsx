import React from 'react'
import { social } from '../data/socialLinkData'
const Footer = ({ dark }) => {
  return (
    <div className={`w-full h-max  ${dark ? 'dark' : 'light'}`}>
      <div className={`w-full md:w-10/12 mx-auto h-[1px] ${dark ? 'bg-slate-400' : 'bg-slate-900'}`} />
      <div className={`w-full md:w-10/12  max-w-[600px] mx-auto py-6 px-2`} >

        <div className='flex flex-row gap-2 justify-around px-4   w-full md:w-max items-center  mx-auto'>
          <div className='max-w-[80px] cursor-pointer hover:scale-75 transition-all duration-300'>
            <a href={social.instagram}><img src={require('../assets/Instagram.png')} loading="lazy" alt="Insta" /></a>
          </div>
          <div className='max-w-[80px] cursor-pointer hover:scale-75 transition-all duration-300'>
            <a href={social.linkedin}><img src={require('../assets/LinkedIn.png')} loading="lazy" alt="linked" /></a>
          </div>
          <div className='max-w-[80px] cursor-pointer hover:scale-75 transition-all duration-300'>
            <a href={social.gmail}><img src={require('../assets/Gmail.png')} loading="lazy" alt="telegram" /></a>
          </div>
          <div className='max-w-[80px] cursor-pointer hover:scale-75 transition-all duration-300'>
            <a href={social.github}>
              <img src={require('../assets/github.png')} loading="lazy" alt="twitter" />
            </a>
          </div>
        </div>

        <div className={`${dark ? 'text-slate-100' : 'text-slate-900'} text-[1rem] text-center mx-auto max-w-max py-4`}>
          © 2024. All rights reserved by Deepanshu Singhal
        </div>

      </div>

    </div>
  )
}

export default Footer
