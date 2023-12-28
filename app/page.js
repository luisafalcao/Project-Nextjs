"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import mainImage from '../public/home.svg'
import Button from './components/button'
import Escolhido from './components/escolhido'

export default function Home() {
  const [opcao, setOpcao] = useState("")

  function handleEvent(event) {
    setOpcao(opcao => opcao = event.target.id)
  }
  
  useEffect(() => {
    console.log(opcao)
  }, [opcao])

  return (
    <main className='grid text-center gap-5'>
        <Image 
          className='h-full max-h-80'
          src={mainImage}
          alt='Ilustração de uma pessoa sentada em um sofá com um balde de pipoca no colo'
        />
        <h4 className="text-center lowercase font-thin">O que você quer assistir agora?</h4>
        <div className='flex gap-4 justify-center items-center'>
            <Button title="Série" type="tv" onClick={handleEvent} opcaoEscolhida={opcao} />
            ou
            <Button title="Filme" type="movie" onClick={handleEvent} opcaoEscolhida={opcao} />
        </div>
        { opcao !== "" && <Escolhido type={opcao} /> }
    </main>
  )
}