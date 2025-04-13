

const initialState = [{
  id: 1,
  todo: 'Aprender React',
  done: false
}];


// Un recucer, lo utilizamos para agrupar diferentes acciones de una manera mas sencilla.
// Es decir, vamos  a tener una unica función que se va a encargar de hacer los metodos HTTP, por ejemplo.
// En este caso, se add nuevos todos.
// IMPORTANTE : El state nunca se debe de mutar, no se hara push, del nuevo estado, si no que retornamos un nuevo array, con la copia del anterior, incluyendo el nuevo.
const todoReducer  = (state = initialState, action)  => {

  if(action?.type === '[TODO] Add Todo') {
    return [...state, action.payload];
  }

  return state;
}

// Aqui recibimos la lista de todos, en este caso, solo 1, el incial.
let todos = todoReducer();

const newTodo = {
  id:2,
  todo: 'Aprender Redux',
  done: false
}

// Para agregar un nuevo todo, en un useReducer existe un estandar, en el que le mandamos la lista de todos actuales 
// que tenemo, y le mandamos el Action, que tiene la estructura como estandar, como type, y payload.

const addTodoAction = {
  type:  '[TODO] Add Todo',
  payload: newTodo 
}


// Aqui agredamos un nuevo todo.
todos = todoReducer( todos,  addTodoAction);
// Obtenemos los 2 TODOS agregados.
// console.log(todos);