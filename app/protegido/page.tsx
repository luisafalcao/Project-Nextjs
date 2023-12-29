import { signOut } from "@/auth";

export default function Protegido() {
    return (
        <main>
            <div>
                <h1>Área Protegida</h1>
                <div>
                    <form action={async () => { 'use server'; await signOut(); }} method="post">
                        <button>Logout</button>
                    </form>
                </div>
            </div>
        </main>
    )
}