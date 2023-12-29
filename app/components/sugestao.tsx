import Grid from "./grid"

export default function Sugestao({ data }:any) {
    console.log(data)
    return (
        <Grid 
            poster={data.poster_path} 
            titulo={data.name ? data.name : data.title} 
            sinopse={data.overview} 
            rating={data.vote_average} 
        />
        
    )
}