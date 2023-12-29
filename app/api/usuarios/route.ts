import { NextResponse } from "next/server";
import { getUsuarios } from "@/app/lib/infra/usuarios";

export async function GET() {
    let usuarios;
    try {
        usuarios = await getUsuarios();
    } catch (error) {
        return NextResponse.json({error});
    }
    return NextResponse.json({data: usuarios})
}