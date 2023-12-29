import { listarLancamentos } from "@/app/lib/listarlancamentos"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import Grid from "../components/grid";
import formatDate from "../lib/formatdate"

export default async function Lancamentos() {
    const lancamentos: any = await listarLancamentos();

    return (
        <main>
            <ul className="w-6/12 mx-auto">
                {lancamentos.map((lancamento: { 
                    id: Key | null | undefined; 
                    poster_path: string;
                    title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; 
                    overview: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; 
                    vote_average: number;
                    release_date: string;
                }) => (
                <li className='p-5 flex gap-4 mb-10' key={lancamento.id}>
                    <Grid 
                        pagina="lancamento"
                        poster={lancamento.poster_path} 
                        titulo={lancamento.title} 
                        sinopse={lancamento.overview}
                        rating={lancamento.vote_average} 
                        release={formatDate(lancamento.release_date)}
                    />
                </li>
                ))}
            </ul>
        </main>
    )
}
