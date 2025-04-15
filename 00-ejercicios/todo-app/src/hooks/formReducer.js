
export const formReducer = ( initialSate = [], action) => {

  switch (action.type){
    case 'add':
      return [...initialSate, action.payload]
    case 'delete':
      return initialSate.filter( item => item.id != action.payload)
    case 'done':
      return initialSate.map( item => {
        if(item.id === action.payload){
          return {
            ...item,
            done : !item.done 
          }
        }
        return item
      })
    default:
      return initialSate
  }
}
