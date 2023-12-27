import { signOut } from "next-auth/react";

export default function Protegido() {
    return (
        <main className="">
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