import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <header className='px-5 py-3 bg-white shadow-xl font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>
                <nav className='flex items-center gap-12 text-black'>
                    {/* <Link href="/work">
                        <span>Sobre mí</span>
                    </Link>
                    <Link href="/work">
                        <span>Mi trabajo</span>
                    </Link> */}
                    <a href="https://gabrieltambare.vercel.app/" target='blank'>
                        <span className='text-20-medium'>Gabriel Tambare</span>
                    </a>
                </nav>
            </nav>
        </header>
    )
}

export default Navbar