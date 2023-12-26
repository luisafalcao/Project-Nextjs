import { listarLancamentos } from "@/lib/lancamentos"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export default async function Lancamentos() {
    const lancamentos: any = await listarLancamentos();

    return (
        <main>
            <h1>Lançamentos</h1>
            <ul>
                {lancamentos.map((lancamento: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; overview: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => (
                <li className='m-5' key={lancamento.id}>
                    <br />
                    {lancamento.title}
                    <br />
                    {lancamento.overview}
                </li>
                ))}
            </ul>
        </main>
    )
}
