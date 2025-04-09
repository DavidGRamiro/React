
export const PokemonCard = ({ id, name, sprites = [] }) => {

  return (
    <section style={{ height: 200}}>
      <h2 className="text-capitalize">#{id} - {name}</h2>

      <img src={sprites[0]}/>
      
    </section>
  )
}
