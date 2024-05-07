/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { memo } from "react"



export const ShowIncrement = memo(({ sumar }) => {

  console.log('Se redibuja')
  return (
    <>
      <button className="btn btn-primary"
              onClick={ () => sumar() }>

        Sumar
      </button>
    
    
    </>
  )
})
