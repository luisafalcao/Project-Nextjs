import Image from "next/image"
import refresh from '@/public/refresh.svg'

export default function Grid({ data, titulo, tituloOriginal, sinopse, poster, rating, onClick, streaming}: any) {
    console.log(data)
    return (
        <div className="flex flex-wrap gap-5">
            <div className="flex-1 text-right">
                <img src="" alt="" className="h-96 w-full bg-white"/>
            </div>
            <div className="flex flex-col flex-1 text-left gap-3">
                <h5>{titulo} {tituloOriginal && <span className="text-sm"> | <em>{tituloOriginal}</em></span>}</h5>
                <p><span className="text-amber-400">★</span> {rating}</p>
                <p>{sinopse}</p>
                <p><span className="font-bold">Onde Assistir:</span> {streaming}</p>
                <Image
                    className='mt-auto rounded-full cursor-pointer scale-75 hover:scale-105 hover:rotate-45 transition-all'
                    src={refresh}
                    alt='Ilustração de uma pessoa sentada em um sofá com um balde de pipoca no colo'
                    onClick={onClick}
                />
            </div>
        </div>
    )
}