

export const todoReducer = ( initialState = [], action) => {


  switch (action.type) {
    case '[TODO] add Todo':
      return [ ...initialState, action.payload ]
    case '[TODO] remove Todo':
      // Return un nuevo array, solo aquellos que no contengan el id que le mandamos en el payload.
      return initialState.filter( todo => todo.id !== action.payload )
    case '[TODO] toggle Todo':
      return initialState.map( todo => {
        if (todo.id === action.payload){
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo
      })
    default:
      return initialState;
  }
}