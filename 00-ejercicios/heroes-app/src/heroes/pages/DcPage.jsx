import { HeroCard } from "../components/HeroCard"
import { HeroList } from "../components/HeroList"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const DcPage = () => {

  const heroes = getHeroesByPublisher('DC Comics')

  return (
    <>
      <h1>DC Comics</h1>
      <hr />
  
      <HeroList heroes={heroes} />
  
    </>

  )
}
