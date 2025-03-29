import { getGifts } from "../helpers/getGifts"




export const GiftGrid = ({ category}) => {

  getGifts(category)

  return (
    <>
      <h3>{category}</h3>
    </>

  )
}
