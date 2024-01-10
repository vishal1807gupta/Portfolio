import React from 'react'

const Footer = ({ dark }) => {
  return (
    <div className={`w-full h-max  ${dark ? 'dark' : 'light'}`}>
      <div className={`w-full md:w-10/12 mx-auto h-[1px] ${dark ? 'bg-slate-400' : 'bg-slate-900'}`} />
      <div className={`w-full md:w-10/12  max-w-[600px] mx-auto py-6 px-2`} >

        <div className='flex flex-row gap-2 justify-around px-4   w-full md:w-max items-center  mx-auto'>
          <div className='max-w-[80px] cursor-pointer hover:scale-75 transition-all duration-300'>
            <img src={require('../assets/Instagram.png')} loading="lazy" alt="Insta" />
          </div>
          <div className='max-w-[80px] cursor-pointer hover:scale-75 transition-all duration-300'>
            <img src={require('../assets/LinkedIn.png')} loading="lazy" alt="linked" />
          </div>
          <div className='max-w-[80px] cursor-pointer hover:scale-75 transition-all duration-300'>
            <img src={require('../assets/Telegram.png')} loading="lazy" alt="telegram" />
          </div>
          <div className='max-w-[80px] cursor-pointer hover:scale-75 transition-all duration-300'>
            <img src={require('../assets/X.png')} loading="lazy" alt="twitter" />
          </div>
        </div>

        <div className={`${dark ? 'text-slate-100' : 'text-slate-900'} text-[1rem] text-center mx-auto max-w-max`}>
          © 2024. All rights reserved by Deepanshu Singhal
        </div>

      </div>

    </div>
  )
}

export default Footer
