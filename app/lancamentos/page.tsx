import { listarLancamentos } from "@/app/lib/listarlancamentos"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import Grid from "../components/grid";

export default async function Lancamentos() {
    const lancamentos: any = await listarLancamentos();

    return (
        <main className="w-8/12 mx-auto">
            <ul className="mt-5">
                {lancamentos.map((lancamento: { 
                    id: Key | null | undefined; 
                    poster_path: string;
                    title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; 
                    overview: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; 
                    vote_average: number
                }) => (
                <li className='p-5 flex gap-4 mb-5' key={lancamento.id}>
                    <Grid 
                        pagina="lancamento"
                        poster={lancamento.poster_path} 
                        titulo={lancamento.title} 
                        sinopse={lancamento.overview}
                        rating={lancamento.vote_average} 
                    />
                </li>
                ))}
            </ul>
        </main>
    )
}
