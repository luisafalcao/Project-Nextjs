export default function Button(props: any) {
    return (
        <button onClick={props.onClick} id={props.type} className={`${props.type === props.opcaoEscolhida && 'active'} button`}>{props.title}</button>
    )
}