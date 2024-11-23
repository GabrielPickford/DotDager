import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div
      className="bg-[url('/assets/footer-bg.png')] bg-cover bg-center w-full h-[180px] shadow-2xl">
      <div className="text-center text-white flex items-center justify-center h-full">
        <a href='https://tbot.xyz/lumber/' target='blank'>
          <Image
            src="/assets/lumberjack.png"
            alt="DotDager"
            width={200} height={0}
            className='m-5 w-[50px]' />
        </a>

        <a href='https://gabrieltambare.vercel.app/' target='blank'>
          Gabriel Tambare © 2024. All rights are reserved
        </a>
      </div>

    </div>
  )
}

export default Footer
