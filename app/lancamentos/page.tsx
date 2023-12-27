import { listarLancamentos } from "@/lib/lancamentos"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export default async function Lancamentos() {
    const lancamentos: any = await listarLancamentos();

    return (
        <main>
            <hr />
            <h2 className="text-center lowercase font-thin my-10">Últimos Lançamentos</h2>
            <ul className="w-6/12 mx-auto">
                {lancamentos.map((lancamento: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; overview: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => (
                <li className='p-5 flex gap-4 mb-10' key={lancamento.id}>
                    <div>
                        <img src="" alt="" className="h-80 w-40" />
                    </div>
                    <div>
                        <h6>{lancamento.title}</h6>
                        <br />
                        <p className="font-thin">{lancamento.overview}</p>
                    </div>
                </li>
                ))}
            </ul>
        </main>
    )
}
