import React from 'react'
import Image from 'next/image'

const AboutMe = () => {
    return (
        <div className='flex w-full h-screen overflow-hidden'>
            <section className=' flex flex-col items-center justify-center w-3/5'>
                <h1 className="heading text-center">¡Hola! Soy Dot Dager.</h1>
                <p className="sub-heading !max-w-3xl text-left pl-14 pr-14">
                    Soy un creador de contenido que se divierte tanto escribiendo código como disfrutando de una buena conversación sobre filosofía. Pero, si hay algo que realmente me apasiona (más que todo lo demás), son los pepinos. ¡Sí, esos crujientes y frescos vegetales que le dan un toque único a cualquier plato! Mis amigos dicen que tengo una relación especial con ellos… y no podría estar más de acuerdo.
                    <br /><br />
                    Aparte de mi amor por los pepinos, me encanta pasar tiempo con mis gatos, tocar la guitarra, y explorar las profundidades del pensamiento. Este espacio es una pequeña ventana a mi mundo, donde la creatividad, la reflexión y, por supuesto, los pepinos, se dan la mano para mostrar lo que soy.
                    <br /><br />
                    Así que, si te gustan las ideas frescas y algo fuera de lo común, ¡te invito a quedarte y descubrir más de mí!
                </p>
            </section>
            <section className=' flex items-center justify-center w-2/5'>
                <Image
                    src="/assets/aboutme.jpg"
                    alt="DotDager"
                    width={450} height={0}
                    className='  border-solid border-2 border-orange-500 rounded-lg shadow-2xl' />
            </section>
        </div>
    )
}

export default AboutMe