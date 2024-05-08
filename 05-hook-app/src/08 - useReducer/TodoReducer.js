

export const todoReducer = (initialState = [], action) => {


  switch (action.type) {
    case 'ABC':
      throw new Error('Funcion no implementada')
  
    default:
      return initialState
  }


}