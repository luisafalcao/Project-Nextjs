// esse arquivo pega o conteúdo da API
export const listarGeneros = async (type) => {
    // const API_KEY = process.env.API_KEY;

    let generos;
    const apiUrl = `https://api.themoviedb.org/3/genre/${type}/list?api_key=fcb3d3cb23bc249914164b04bfb15491`

    await fetch(apiUrl, { next: { revalidate: 3600 } })
    .then(response => response.json())
    .then(data => {
        generos = data.genres

    })

    return generos
}