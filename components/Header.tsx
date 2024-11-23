import React from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogo } from "react-icons/pi";
import { PiTwitchLogo } from "react-icons/pi";

const Header = () => {
    return (
        <div className='flex w-full h-screen overflow-hidden'>
            <section className=' flex items-center justify-center w-2/5'>
                <Image
                    src="/assets/portrait.png"
                    alt="DotDager"
                    width={400} height={0}
                    className='  border-solid border-2 border-orange-500 rounded-lg shadow-2xl' />
            </section>
            <section className=' flex flex-col items-center justify-center w-3/5'>
                <h1 className="heading text-center">Mariano Dot Dager<br/></h1>
                <p className="sub-heading !max-w-3xl text-center">Programador, streamer, filósofo,<br/> guitarrero, gatofílico y amante de los pepinos</p>
                <div className='flex p-10 gap-10'>
                    <a href={"https://www.instagram.com/dager.32/"} target="_blank">
                    <FaInstagram size='2.5rem' />
                    </a>
                    <a href="https://www.youtube.com/@DotDager" target='blank'>
                    <PiYoutubeLogo size='2.5rem'  />
                    </a>
                    <a href='https://www.twitch.tv/dagerxiv'  target='blank'>
                    <PiTwitchLogo size='2.5rem' />
                    </a>
                    
                </div>
            </section>
        </div>
    )
}

export default Header