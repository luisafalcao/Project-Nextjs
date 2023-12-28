"use client"

import { useState } from 'react'
import Image from 'next/image'
import mainImage from '../public/home.svg'
import Button from './components/button'
import Conteudo from './components/conteudo'

export default function Home() {
  const [opcao, setOpcao] = useState("")

  function handleClick(opcao) {
    setOpcao(currState => currState = opcao)
  }

  function loadContent() {
    if (opcao === "tv") {
      return (<Conteudo type="tv"/>)
    } else if (opcao === "movie") {
      return (<Conteudo type="movie" />)
    } else {
      return
    }
  }

  return (
    <main className='grid text-center gap-5'>
        {!opcao && <Image 
          className='h-full max-h-80'
          src={mainImage}
          alt='Ilustração de uma pessoa sentada em um sofá com um balde de pipoca no colo'
        />}
        <h4 className="question">O que você quer assistir agora?</h4>
        <div className='flex gap-4 justify-center items-center'>
            <Button title="Série" type="tv" onClick={() => handleClick("tv")} />
            ou
            <Button title="Filme" type="movie" onClick={() => handleClick("movie")} />
        </div>

        {loadContent()}
  
    </main>
  )
}