


export const getGifts = async( category ) => {

  const url  = `https://api.giphy.com/v1/gifs/search?api_key=BVEOWsE2PD33Hg45DLhSNslHEn4YZ5t5&q=${category}&limit=10`
  const respuesta = await fetch(url)
  const { data } = await respuesta.json() 


  const gifts = data.map(gift => ({
    id: gift.id,
    title: gift.title,
    url : gift.images.downsized_medium.url
  }))


  return gifts
}