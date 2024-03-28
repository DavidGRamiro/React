

const API_KEY = '0dhl4cRelhKICOIyowRgIww7D9zIHu4W'
const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

const request = fetch(URL);
request
        .then( data => data.json())
        .then( ({ data }) => { 
            const { url } = data.images.original
            const imagen = document.createElement('img')
            imagen.src = url

            document.body.append(imagen)
        })
        .catch((err) => console.log(err))