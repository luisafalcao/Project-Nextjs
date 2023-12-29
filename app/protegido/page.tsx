import { signOut } from "@/auth";
import Button from "../components/button";

export default function Protegido() {
    return (
        <main>
            <div>
                <h1>Área Protegida</h1>
                <div>
                    <form action={async () => { 'use server'; await signOut(); }} method="post">
                        <Button nome="Sair"/>
                    </form>
                </div>
            </div>
        </main>
    )
}