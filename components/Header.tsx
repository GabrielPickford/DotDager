import React from 'react'
import Image from 'next/image'

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
                <h1 className="heading text-center">Pitch your startup,<br />Connect with entrepreneurs</h1>
                <p className="sub-heading !max-w-3xl text-center">Submit ideas, vote on pitches and get noticed in virtual competitions</p>
            </section>
        </div>
    )
}

export default Header