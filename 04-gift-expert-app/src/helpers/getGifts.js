


// Se usa el async por que estoy usando el await
export const getGifts = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=0dhl4cRelhKICOIyowRgIww7D9zIHu4W&q=${category}&limit=10`
  const response =  await fetch(url);
  const { data } = await response.json()

  const gifts =  data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  return gifts;
}