import { HeroList } from "../components/HeroList"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const MarvelPage = () => {

  const heroes = getHeroesByPublisher('Marvel Comics')
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />

      <HeroList  heroes={heroes}/>

    </>

  )
}
