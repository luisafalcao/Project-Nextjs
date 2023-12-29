// esse arquivo pega o conteúdo da API
export const listarStreamings = async (tipo, id) => {
    const API_KEY = "fcb3d3cb23bc249914164b04bfb15491";
    
    const apiUrl = `https://api.themoviedb.org/3/${tipo}/${id}/watch/providers?api_key=${API_KEY}`
    let streamings;

    await fetch(apiUrl, { next: { revalidate: 3600 } })
        .then(response => response.json())
        .then(data => {
            streamings = data.results.BR.flatrate[0]?.provider_name
        })

    return streamings;

}