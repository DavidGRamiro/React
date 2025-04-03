
export const fetchApi = async(pokemon) => {


  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`

  const response = await fetch(url)
  const { abilities, types, weight} = await response.json()
  console.log(abilities)

  return {
    abilities,
    types, 
    weight
  }
}
