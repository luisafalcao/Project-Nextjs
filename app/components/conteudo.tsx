import { useEffect, useState } from "react";
import { listarGeneros } from "../lib/listargeneros"
import { listarSugestoes } from "@/app/lib/listarsugestoes"
import Sugestao from "./sugestao";

export default function Conteudo({ tipo, setHideImage }:any) {
    const [generos, setGeneros] = useState([]);
    const [sugestao, setSugestao] = useState(null)
    const [idioma, setIdioma] = useState(null)
    const [generoSelecionado, setGeneroSelecionado] = useState("")

    useEffect(() => {
        async function getListadeGeneros() {
            const listaGeneros: any = await listarGeneros(tipo);
            setGeneros(listaGeneros);
        }
        getListadeGeneros();
    }, [tipo]);
    
    function handleChangeIdioma(e:any) {
        setIdioma(e.target.value)
    }

    async function getSugestao(e: any = generoSelecionado) {
        let genero = e.target ? e.target.value : e
        const sugestaoData: any = await listarSugestoes(tipo, genero, idioma);
        setSugestao(sugestaoData);
        setGeneroSelecionado(genero)
        setHideImage(true)
    }

    return (
        <section className="max-w-1/2 m-auto">
            
            {!idioma &&
            <>
            <h4 className="pergunta">Escolha um idioma</h4>
            <select onChange={handleChangeIdioma} name="selecionar-idioma" id="selecionar-idioma" className="block appearance-none w-80 m-auto mb-10 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option value="-">-</option>
                <option value="en">Inglês</option>
                <option value="pt">Português</option>
                <option value="fr">Francês</option>
                <option value="es">Espanhol</option>
                <option value="it">Italiano</option>
                <option value="de">Alemão</option>
                <option value="ko">Coreano</option>
            </select>
            </>
            }

            {idioma && !sugestao &&
            <>
            <h4 className="pergunta">Qual gênero você prefere?</h4>
            <select onChange={getSugestao} name="selecionar-genero" id="selecionar-genero" className="block appearance-none w-80 m-auto mb-10 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option value="-">-</option>
                {generos.map((genero: any) => {
                    return <option key={genero.id} value={genero.id}>{genero.name}</option>;
                })}
            </select>
            </>
            }

            {sugestao && 
            <Sugestao data={sugestao} onClick={getSugestao} genero={generoSelecionado} tipo={tipo}/>
            }
            
        </section>
    )
}

