"use server"
export async function enviarMensagem(estadoAnterior, formData) {
    const nome = formData.get('nome')
    const conteudo = formData.get('conteudo')
    const email = formData.get('email')
    console.log({nome, conteudo, email})
    return {mensagem: `Mensagem enviada com sucesso`, nome: "", conteudo: "", email: ""}
}