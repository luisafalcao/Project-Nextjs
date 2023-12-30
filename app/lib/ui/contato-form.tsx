"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { enviarMensagem } from "@/app/lib/enviarmensagem";

import Button from '@/app/components/button';

export default function ContatoForm() {
    const [state, formAction] = useFormState(enviarMensagem, {});

    return (
        <form action={formAction} className="space-y-3">
            <div className="flex-1 rounded-lg px-6 pb-4 pt-8">
                <div className="w-full">
                    <div>
                        <label 
                            className="mb-3 mt-5 block text-xs font-medium" 
                            htmlFor="nome"
                        >
                            Nome
                        </label>
                        <div className="relative">
                            <input 
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-black"
                                id="nome" 
                                type="text" 
                                name="nome" 
                                value={state.nome}
                                required 
                            />
                        </div>
                    </div>
                    <div>
                        <label 
                            className="mb-3 mt-5 block text-xs font-medium" 
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <input 
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-black"
                                id="email" 
                                type="email" 
                                name="email" 
                                value={state.email}
                                required 
                            />
                        </div>
                    </div>
                    <div>
                        <label 
                            className="mb-3 mt-5 block text-xs font-medium" 
                            htmlFor="conteudo"
                        >
                            Mensagem
                        </label>
                        <div className="relative">
                            <textarea 
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-black"
                                id="conteudo" 
                                type="text" 
                                name="conteudo" 
                                value={state.conteudo}
                                required 
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="container py-5 px-5 mx-0 min-w-full flex flex-col items-center">
                    <Button nome="Enviar"/>
                </div>
                <div className="flex h-5 items-end space-x-1">
                    {state.mensagem}
                </div>
            </div>
        </form>
    );
}