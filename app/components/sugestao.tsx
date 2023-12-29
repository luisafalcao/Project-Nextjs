import { useState, useEffect } from "react";
import { listarStreamings } from "@/app/lib/listarstreamings"
import Grid from "./grid"

export default function Sugestao({ data, onClick, genero, tipo }:any) {
    const [streamings, setStreamings] = useState([]);

    useEffect(() => {
        async function getListadeStreamings() {
            const listaStreamings: any = await listarStreamings(tipo, data.id);
            setStreamings(listaStreamings);
        }
        getListadeStreamings();
    }, [data.id]);
    
    return (
        <>
        <Grid
            pagina="sugestao"
            poster={data.poster_path}
            titulo={data.name ? data.name : data.title}
            tituloOriginal={data.original_title ? data.original_title : ""}
            sinopse={data.overview}
            rating={data.vote_average} 
            onClick={onClick}
            streaming={streamings}
            genero={genero}
            tipo={tipo}
        />
        </>
        
    )
}