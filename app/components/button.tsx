import Link from "next/link";

export default function Button(props: any) {
    const link = `/gerador/${props.targetLink}`

    return (
        <Link href={link} className="button">{props.targetPage}</Link>
    )
}