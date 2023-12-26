"use client";

import { useFormState } from 'react-dom';
import { gravarSugestao } from './Sugestoes';

export default function Sugestoes() {
    const [state, formAction] = useFormState(gravarSugestao, {})

    return (
        <main>
            <h1>Sugestões</h1>
            <form className="p-3 m-3 w-full max-w-sm" action={formAction} method='post'>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-nome">
                            Nome
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input name="nome" value={state.nome} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-nome" type="text" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-sugestao">
                            Sugestão
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input name="sugestao" value={state.sugestao} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-sugestao" type="text" />
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Enviar Sugestão
                        </button>
                    </div>
                </div>
                <div>
                    {state.mensagem}
                </div>
                </form>
        </main>
    )
}