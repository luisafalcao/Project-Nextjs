"use client"

import Image from "next/image"
import refresh from '@/public/refresh.svg'

export default function Grid({ pagina, titulo, tituloOriginal, sinopse, poster, rating, onClick, streaming, genero }: any) {
    const posterUrl = `https://image.tmdb.org/t/p/w300${poster}`;
    return (
        <div className="flex flex-wrap gap-5">
            <div className="flex-1 text-right">
                <img src={posterUrl} alt={`Poster: ${titulo}`} />
            </div>
            <div className="flex flex-col flex-1 text-left gap-3">
                <h5>{titulo} {tituloOriginal && <span className="text-sm"> | <em>{tituloOriginal}</em></span>}</h5>
                <p><span className="text-customColor-accent">★</span> {rating}</p>
                <p>{sinopse}</p>
                {
                pagina === "sugestao" &&
                    <>
                    <p><span className="font-bold">Onde Assistir:</span> {streaming}</p>
                    <Image
                        className='mt-auto rounded-full cursor-pointer scale-75 hover:scale-105 hover:rotate-45 transition-all'
                        src={refresh}
                        alt='Refresh'
                        onClick={() => {onClick(genero)}}
                    />
                    </>
                }
            </div>
        </div>
    )
}