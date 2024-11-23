import React from 'react'
import Card from './Card'

const Interests = () => {
  return (
    <div className='pt-10 '>
      <section className='flex'>
        <h1 className='text-center uppercase px-6 py-3 font-work-sans font-extrabold text-white sm:text-[36px] sm:leading-[64px] text-[24px] leading-[46px] w-full my-5'>Lo que puedo hacer por tí</h1>
      </section>
      <section className='w-full overflow-hidden p-5 pb-10 grid md:grid-cols-3 sm:grid-cols-2 gap-3'>
        <Card
          image="/assets/programacion.jpg"
          title="Programador"
          text="Este es el texto descriptivo."
        />
        <Card
          image="/assets/guitarra.jpg"
          title="Músico"
          text="Este es el texto descriptivo."
        />
        <Card
          image="/assets/pepinos.jpg"
          title="Comedor de pepinos"
          text="Este es el texto descriptivo."
        />
        <Card
          image="/assets/filosofia.jpg"
          title="Filósofo"
          text="Este es el texto descriptivo."
        />
        <Card
          image="/assets/streaming.jpg"
          title="Streamer"
          text="Este es el texto descriptivo."
        />
        <Card
          image="/assets/gatos.jpg"
          title="Cuidador de gatos"
          text="Este es el texto descriptivo."
        />
      </section>
    </div>
  )
}

export default Interests