export default function Button(props: any) {
    return (
        <button 
            onClick={props.onClick} 
            id={props.tipo} 
            className="button">
                {props.nome}
        </button>
    )
}