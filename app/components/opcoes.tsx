import Button from "./button";

export default function Opcoes() {
    return (
        <div className='flex gap-4 justify-center items-center'>
            <Button targetPage="Série" targetLink="serie"/>
            ou
            <Button targetPage="Filme" targetLink="filme"/>
        </div>
    )
}