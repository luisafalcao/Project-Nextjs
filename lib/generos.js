// esse arquivo pega o conteúdo da API
export const listarGeneros = async () => {
    const API_KEY = process.env.API_KEY;

    let generos;
    const apiUrl = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}`

    await fetch(apiUrl, { next: { revalidate: 3600 } })
    .then(response => response.json())
    .then(data => {
        generos = data.genres

    })

    return generos
}