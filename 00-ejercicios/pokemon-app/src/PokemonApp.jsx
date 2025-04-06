import { useState } from "react"
import { Grid } from "./components/Grid"
import { Search } from "./components/Search"
import { Title } from "./components/Title"

const title = 'PokeDid'


export const PokemonApp = () => {
  
  const [items, setItems] = useState([])

  const onChangeList = (event) => {
    const newValue = [event]
    setItems([ newValue, ...items])
  }

  console.log(' ITEMS', items)

  return (
    <>
    {/* Titulo del sitio */}
    <Title title={title} />

    {/* Buscador de Pokemoms */}
    <Search  onChangeListItems={onChangeList} />
    
    {
      items.map((item ) => (
        
        <Grid pokemon={item} />
      ))
    }
    </>


  )
}
