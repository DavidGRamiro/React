


const initialState = [{
  id: 1,
  todo: 'Terminar el curso de REACT',
  done: false,
}]


const todoReducer = ( state = initialState, action  ) => {
  if(action.type === 'POST'){
    return [...state, action.payload]
  }
  return state;
}

let newTodo = {
  id: 2,
  todo: 'Hacer la cena',
  done: false,
}

let addTodo = {
  type : 'POST',
  payload : newTodo
}

let tareas = todoReducer(  initialState, addTodo )
console.log(tareas)
