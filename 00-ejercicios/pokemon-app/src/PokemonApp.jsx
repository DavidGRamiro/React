import { useState } from "react"
import { Grid } from "./components/Grid"
import { Search } from "./components/Search"
import { Title } from "./components/Title"

const title = 'PokeDid'


export const PokemonApp = () => {
  
  const [items, setItems] = useState([])
  const pokemon = 'Pepe'

  const onChangeList = (event) => {
    const newValue = event
    setItems(...items, newValueß)
  }


  return (
    <>
    {/* Titulo del sitio */}
    <Title title={title} />

    {/* Buscador de Pokemoms */}
    <Search  onChangeListItems={onChangeList} />

    <Grid gridItems={items}  />
    </>


  )
}
