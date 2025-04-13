

export const todoReducer = ( initialState = [], action) => {


  switch (action.type) {
    case '[TODO] add Todo':
      return [ ...initialState, action.payload ]
    case '[TODO] remove Todo':
      // Return un nuevo array, solo aquellos que no contengan el id que le mandamos en el payload.
      return initialState.filter( todo => todo.id !== action.payload )
    default:
      return initialState;
  }
}