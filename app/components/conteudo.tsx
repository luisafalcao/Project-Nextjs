import { listarGeneros } from "@/lib/generos"

export default async function Conteudo({ type }:any) {
    const generos: any = await listarGeneros(type);

    console.log(generos)

    return (
        <section>
            <h4 className="question">Qual gênero você prefere?</h4>
            <select name="" id="">
                {generos.map((genero: any) => {
                    return <option key={genero.id} value={genero.name}>{genero.name}</option>
                })}
            </select>
        </section>
    )
}