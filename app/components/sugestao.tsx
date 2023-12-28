import Grid from "./grid"
import Button from "./button"

export default function Sugestao({ data }:any) {
    console.log(data)
    return (
        <>
        <Grid 
            poster={data.poster_path} 
            titulo={data.name} 
            sinopse={data.overview} 
            rating={data.vote_average} />
        <Button />
        </>
    )
}