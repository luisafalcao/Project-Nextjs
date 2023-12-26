"use server"

export async function gravarSugestao(estadoAnterior: any, formData: any) {
    const nome = formData.get("nome");
    const sugestao = formData.get("sugestao");

    console.log({ nome, sugestao });
    return { mensagem: `Sugestão enviada com sucesso`, nome: "", sugestao: "" }
};