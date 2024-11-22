import React from 'react'
import Image from 'next/image'
import Card from './Card'

const Interests = () => {
  return (
    <>
      <section className='flex'>
        <h1 className='uppercase px-6 py-3 font-work-sans font-extrabold text-white sm:text-[36px] sm:leading-[64px] text-[24px] leading-[46px] max-w-5xl my-5'>Lo que puedo hacer por tí</h1>
      </section>
      <section className='w-full overflow-hidden p-5 pb-10 grid md:grid-cols-3 sm:grid-cols-2 gap-3'>
        <Card
          image="/assets/pepinos.jpg"
          title="Mi Título"
          text="Este es el texto descriptivo."
        />
        <Card
          image="/assets/guitarra.jpg"
          title="Mi Título"
          text="Este es el texto descriptivo."
        />
        <Card
          image="/assets/programacion.jpg"
          title="Mi Título"
          text="Este es el texto descriptivo."
        />
        <Card
          image="/assets/filosofia.jpg"
          title="Mi Título"
          text="Este es el texto descriptivo."
        />
        <Card
          image="/assets/gatos.jpg"
          title="Mi Título"
          text="Este es el texto descriptivo."
        />
        <Card
          image="/assets/pepinos.jpg"
          title="Mi Título"
          text="Este es el texto descriptivo."
        />
      </section>
    </>
  )
}

export default Interests