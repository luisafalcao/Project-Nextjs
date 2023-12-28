import { useEffect, useState } from "react";
import { listarGeneros } from "@/lib/listargeneros"
import { listarSugestoes } from "@/lib/listarsugestoes"
import Sugestao from "./sugestao";

export default function Conteudo({ type }:any) {
    const [generos, setGeneros] = useState([]);
    const [sugestao, setSugestao] = useState(null)

    useEffect(() => {
        async function getData() {
            const listaGeneros: any = await listarGeneros(type);
            setGeneros(listaGeneros);
        }
        getData();
    }, [type]);

    async function handleChange(e: any) {
        const sugestaoData: any = await listarSugestoes(type, e.target.value);
        setSugestao(sugestaoData);
    }

    return (
        <section>
            <h4 className="question">Qual gênero você prefere?</h4>
            <select onChange={handleChange} name="selecionar-genero" id="selecionar-genero" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option value="-">-</option>
                {generos.map((genero: any) => {
                    return <option key={genero.id} value={genero.id}>{genero.name}</option>
                })}
            </select>
            {sugestao && <Sugestao data={sugestao}/>}
        </section>
    )
}

