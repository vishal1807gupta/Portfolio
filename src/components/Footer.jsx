import React from 'react'
import { social } from '../data/socialLinkData'
import { AiFillInstagram, AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Footer = ({ dark }) => {
  return (
    <div className={`w-full h-max  ${dark ? 'dark' : 'light'}`}>
      <div className={`w-full md:w-10/12 mx-auto h-[1px] ${dark ? 'bg-slate-400' : 'bg-slate-900'}`} />
      <div className={`w-full md:w-10/12  max-w-[600px] mx-auto py-6 px-2`} >

        <div className='flex flex-row gap-6 justify-around px-4 w-max items-center  mx-auto'>
          <div className='text-[2rem]  cursor-pointer  duration-300'>
            <a href={social.linkedin} target='_blank' rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
          </div>
          <div className='text-[2rem]  cursor-pointer  duration-300'>
            <a href={social.gmail} target='_blank' rel="noopener noreferrer">
              <BiLogoGmail />
            </a>
          </div>
          <div className='text-[2rem] cursor-pointer  duration-300'>
            <a href={social.github} target='_blank' rel="noopener noreferrer">
              <AiFillGithub />
            </a>
          </div>
          <div className='text-[2rem] cursor-pointer  duration-300'>
            <a href={social.whatsapp} target='_blank' rel="noopener noreferrer">
              <AiOutlineWhatsApp />
            </a>
          </div>
          <div className='text-[2rem] cursor-pointer  duration-300'>
            <a href={social.instagram} target='_blank' rel="noopener noreferrer">
              <AiFillInstagram />
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
