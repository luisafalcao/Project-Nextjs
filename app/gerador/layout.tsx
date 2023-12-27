import Opcoes from "../components/opcoes";

export default async function GeradorLayout({ children }: any) {    
    return (
        <main>
            <Opcoes />
            {children}
        </main>
    )
}

