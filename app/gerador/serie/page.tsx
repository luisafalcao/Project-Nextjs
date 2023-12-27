import { listarGeneros } from "@/lib/generos"
import { Key } from "react";

export default async function Serie() {
    const generos: any = await listarGeneros();
    return (
        <main>
            <h4 className="text-center lowercase font-thin mt-10 mb-5">Qual gênero você prefere?</h4>
            <select name="generos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {generos.map((genero: { id: Key | null | undefined; name: string })  => {
                    return (
                        <option key={genero.id} value={genero.name}>
                            {genero.name}
                        </option>
                    )
                })}
            </select>
        </main>
    )
}