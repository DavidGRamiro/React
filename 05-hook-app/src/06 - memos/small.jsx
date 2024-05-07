/* eslint-disable react/prop-types */
import { memo } from 'react'

// Memo solo usado para componentes muy complejos, hace que no se vuelva a redibujar
// eslint-disable-next-line react/display-name
export const Small = memo(({ value }) => {

  console.log('Volvi a ser dibujado =(')

  return (
    <small> { value } </small>

  )
},)
