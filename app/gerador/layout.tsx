import { listarOpcoes } from "@/lib/opcoes"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export default async function GeradorLayout({ children }: any) {
    const opcoes: any = await listarOpcoes();
    
    return (
        <main>
            <h2 className="text-center lowercase font-thin my-10">Últimos Lançamentos</h2>
            <ul className="w-6/12 mx-auto">
                {opcoes.map((opcao: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; overview: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => (
                <li className='p-5 flex gap-4 mb-10' key={opcao.id}>
                    <div>
                        <img src="" alt="" className="h-80 w-40" />
                    </div>
                    <div>
                        <h6>{opcao.title}</h6>
                        <br />
                        <p className="font-thin">{opcao.overview}</p>
                    </div>
                </li>
                ))}
            </ul>
            {children}
        </main>

    )
}

