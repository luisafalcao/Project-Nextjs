import { useEffect, useState } from "react";
import { listarGeneros } from "@/lib/listargeneros"
import { listarSugestoes } from "@/lib/listarsugestoes"
import Sugestao from "./sugestao";
import Button from "./button";

export default function Conteudo({ tipo }:any) {
    const [generos, setGeneros] = useState([]);
    const [sugestao, setSugestao] = useState(null)

    useEffect(() => {
        async function getLista() {
            const listaGeneros: any = await listarGeneros(tipo);
            setGeneros(listaGeneros);
        }
        getLista();
    }, [tipo]);

    async function handleChange(e: any) {
        const sugestaoData: any = await listarSugestoes(tipo, e.target.value);
        setSugestao(sugestaoData);
    }

    return (
        <section className="max-w-1/2 m-auto">
            <h4 className="pergunta">Qual gênero você prefere?</h4>
            <select onChange={handleChange} name="selecionar-genero" id="selecionar-genero" className="block appearance-none w-80 m-auto mb-10 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option value="-">-</option>
                {generos.map((genero: any) => {
                    return <option key={genero.id} value={genero.id}>{genero.name}</option>
                })}
            </select>
            {sugestao && 
            <>
            <Sugestao data={sugestao} />
            <div className="button-wrapper">
                <Button nome="Não quero assistir isso" onClick={handleChange}/>
                <Button nome="Começar novamente" onClick={handleChange}/>
            </div>
            </>
            }
            
        </section>
    )
}

