"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { login } from '@/app/lib/infra/usuarios';

export default function LoginForm() {
    const [errorMessage, formAction] = useFormState(login, undefined);

    return (
        <form action={formAction} className="space-y-3">
            <div className="flex-1 rounded-lg px-6 pb-4 pt-8">
                <div className="w-full">
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
                                required 
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label 
                            className="mb-3 mt-5 block text-xs font-medium" 
                            htmlFor="senha"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input 
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-black placeholder:text-gray-500"
                                id="senha" 
                                type="password" 
                                name="senha" 
                                required 
                                minLength={6} 
                            />
                        </div>
                    </div>
                </div>
                <div className="container py-5 px-5 mx-0 min-w-full flex flex-col items-center">
                    <button className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Entrar
                    </button>
                </div>
                <div className="flex h-5 items-end space-x-1">
                    {errorMessage && (
                        <>
                            <p className="text-sm text-red-500">{errorMessage}</p>
                        </>
                    )}
                </div>
            </div>
        </form>
    );
}