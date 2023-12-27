// esse arquivo pega o conteúdo da API
export const listarLancamentos = async () => {
    const API_KEY = process.env.API_KEY;
    const today = new Date()
    const last30days = new Date().setDate(today.getDate() - 30)

    console.log(API_KEY)
    let lancamentos;
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_date.gte=${last30days}&sort_by=popularity.desc`

    await fetch(apiUrl, { next: { revalidate: 3600 } })
        .then(response => response.json())
        .then(data => {
            lancamentos = data.results
        })

    return lancamentos
}