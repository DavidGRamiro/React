

const API_KEY = '0dhl4cRelhKICOIyowRgIww7D9zIHu4W'
const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

const request = fetch(URL);
request
        .then( data => data.json())
        .then( ({ data }) => { 
            const { url } = data.images.original
            return url
        })
        .catch((err) => 'No se encontro la imagen')