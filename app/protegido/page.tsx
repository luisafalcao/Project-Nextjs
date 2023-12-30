import { signOut } from "@/auth";
import Button from "../components/button";

export default function Protegido() {
    return (
        <main className="w-8/12 mx-auto text-center mt-10">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h4 className="pergunta">Meus Favoritos</h4>
                    <hr className="w-1/2 m-auto mt-2"/>
                    <ul className="mt-5">
                        <li>Law and Order SVU</li>
                        <li>Grey's Anatomy</li>
                        <li>The OC</li>
                        <li>Friends</li>
                    </ul>
                </div>
                <div>
                    <h4 className="pergunta">Minha Watchlist</h4>
                    <hr className="w-1/2 m-auto mt-2"/>
                    <ul className="mt-5">
                        <li>Gilded Age</li>
                        <li>Dopesick</li>
                        <li>Yellowstone</li>
                        <li>The Office</li>
                    </ul>
                </div>            
            </div>

            <div>
                <form action={async () => { 'use server'; await signOut(); }} method="post">
                    <Button nome="Sair"/>
                </form>
            </div>
        </main>
    )
}