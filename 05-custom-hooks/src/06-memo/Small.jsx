import {memo} from 'react'


// La función Memo, se suele utilizar cuando los componentes son muy grandes.
// Al implementar Memo, se dice que memorice el estado del componente, y que solo se redibuje cuando sus 
// propiedades, en este caso, value, cambie.
// Se importa el memo antes de las properties, y se envuelve todo en parentesis.
// Tambien se puede ver como React.memo.

export const Small = memo(({value}) => {

  console.log(' Me volvi a generar')

  return (
    <small>{value}</small>
  )
})
