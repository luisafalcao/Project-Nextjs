import { NextResponse } from "next/server";
import { getUsuarioPorEmail } from "@/app/lib/infra/usuarios";

export async function GET(request: Request, {params}: {params: {id: string}}) {
    let usuarios;
    try {
        usuarios = await getUsuarioPorEmail(params.email);
    } catch (error) {
        return NextResponse.json({error});
    }
    return NextResponse.json({data: usuarios})
}