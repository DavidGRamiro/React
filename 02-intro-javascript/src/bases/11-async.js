


const getImagen = async() => {

    try{ 
        const API_KEY = '0dhl4cRelhKICOIyowRgIww7D9zIHu4W'
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
        const { data } = await respuesta.json()
    
        const { url } = data.images.original 
        const HTML = document.createElement('img')
        HTML.src = url;
        
        document.body.append(HTML)
    }catch(err){
        console.log('Error peticion',err)
    }


}

getImagen()
