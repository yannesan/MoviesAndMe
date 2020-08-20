const API_TOKEN = "e1400febfd0b838e0e3701e9645f7400";

export function getFilmsFromApiWithSearchedText (text) {
const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
return fetch(url)
.then((response)=> responses.json())
.catch((error)=> console.error(error))
}