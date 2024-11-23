import React from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogo } from "react-icons/pi";
import { PiTwitchLogo } from "react-icons/pi";

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row w-full h-auto md:h-screen overflow-hidden'>
            <section className='flex items-center justify-center w-full md:w-2/5 p-4'>
                <Image
                    src="/assets/portrait.png"
                    alt="DotDager"
                    width={400} height={0}
                    className='border-solid border-2 border-orange-500 rounded-lg shadow-2xl' />
            </section>
            <section className='flex flex-col items-center justify-center w-full md:w-3/5 p-4'>
                <h1 className="heading text-center text-3xl font-bold">Mariano Dot Dager</h1>
                <p className="sub-heading text-base text-center max-w-3xl">Programador, streamer, filósofo,<br /> guitarrero, gatofílico y amante de los pepinos</p>
                <div className='flex p-10 gap-8 justify-center'>
                    <a href={"https://www.instagram.com/dager.32/"} target="_blank">
                        <FaInstagram size='2.5rem' />
                    </a>
                    <a href="https://www.youtube.com/@DotDager" target='blank'>
                        <PiYoutubeLogo size='2.5rem' />
                    </a>
                    <a href='https://www.twitch.tv/dagerxiv' target='blank'>
                        <PiTwitchLogo size='2.5rem' />
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Header
