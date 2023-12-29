// esse arquivo pega o conteúdo da API
export const listarSugestoes = async (tipo, id, idioma) => {
    const API_KEY = "fcb3d3cb23bc249914164b04bfb15491";

    console.log(id)
    
    const apiUrl = `https://api.themoviedb.org/3/discover/${tipo}?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=${id}&with_original_language=${idioma}&page=1&include_null_first_air_dates=false&page=1`
    let sugestoes;
    let sugestao;

    await fetch(apiUrl, { next: { revalidate: 3600 } })
        .then(response => response.json())
        .then(data => {
            sugestoes = data.results 
            sugestao = sugestoes[(Math.floor(Math.random() * sugestoes.length))]           
        })

    return sugestao;

}