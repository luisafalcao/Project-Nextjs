"use client"

import { useState } from 'react'
import Image from 'next/image'
import mainImage from '../public/home.svg'
import Button from './components/button'
import Conteudo from './components/conteudo'

export default function Home() {
  const [tipo, setTipo] = useState("")
  const [click, setClick] = useState(false)
  const [reset, setReset] = useState(false)

  function handleClick(tipo) {
    setTipo(currState => currState = tipo)
    setClick(true)
    setReset(true)
  }

  function renderConteudo() {
    if (tipo === "tv") {
      return (<Conteudo tipo="tv" />)
    } else if (tipo === "movie") {
      return (<Conteudo tipo="movie" />)
    } else {
      return
    }
  }

  function handleReset() {
    setTipo("")
    setClick(false)
    setReset(false)
  }
  return (
    <main className='grid text-center'>
        {!tipo && 
        <div>
          <Image
            className='h-full max-h-80'
            src={mainImage}
            alt='Ilustração de uma pessoa sentada em um sofá com um balde de pipoca no colo'
          />
          <h4 className="pergunta">O que você quer assistir agora?</h4>
        </div>
        }
        {
        !click &&
        <div className='button-wrapper'>
            <Button nome="Série" tipo="tv" onClick={() => handleClick("tv")} />
            ou
            <Button nome="Filme" tipo="movie" onClick={() => handleClick("movie")} />
        </div>
        }

        {renderConteudo()}

        {reset &&
        <div className="button-wrapper">
            <Button nome="Começar novamente" onClick={handleReset}/>
        </div>
        }
  
    </main>
  )
}