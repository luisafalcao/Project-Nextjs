export default function Grid({ titulo, sinopse, poster, rating}: any) {
    return (
        <div className="flex flex-wrap gap-5">
            <div className="flex-1 text-right">
                <img src="" alt="" className="h-96 w-full bg-white"/>
            </div>
            <div className="flex-col flex-1 text-left">
                <h5>{titulo}</h5>
                <p><span className="text-amber-400">★</span> {rating}</p>
                <p>{sinopse}</p>
            </div>
        </div>
    )
}