function moviename() {
    let movie = document.getElementById('input-movie').value
    movieapi(movie)
}

async function movieapi(movie){
    let data = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=11ce539a&t=${movie}`)
    let response = await data.json()
    showmovie(response)
}

function showmovie(response){
    
    document.getElementById('poster-movie').src = response.Poster
    document.getElementById('title-movie').innerHTML = response.Title
    document.getElementById('release-movie').innerHTML = response.Released
    document.getElementById('plot-movie').innerHTML = response.Plot
    

}