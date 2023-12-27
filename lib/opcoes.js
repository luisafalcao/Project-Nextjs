// esse arquivo pega o conteúdo da API
export const listarOpcoes = async () => {
    const API_KEY = process.env.API_KEY;
    const today = new Date()
    const last30days = new Date().setDate(today.getDate() - 30)

    let opcoes;
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_date.gte=${last30days}&sort_by=popularity.desc`

    await fetch(apiUrl, { next: { revalidate: 3600 } })
        .then(response => response.json())
        .then(data => {
            opcoes = data.results
        })

    return opcoes
}