const { authReducer } = require("../../../auth/context/authReducer");
const { types } = require("../../../auth/types/types");



describe('Pruebas sobre Auth Reducer', () => {

  test('Debe de retornar el valor por defecto', () => {
    const state = authReducer({ loggued : false}, {})
    expect(state).toEqual(state)
  });

  test('Debe de llamar al login y autenticar al usuario', () => {

    const action = {
      type: types.login,
      payload: {
        name: 'Juan',
        id: '123'
      }
    }
    const state = authReducer({ loggued : false}, action)
    expect(state).toEqual( { logged: true, user: action.payload})
  });

  test('Debe de llamar al logout y retornar logueado a falso', () => {

    const action = {
      type: types.logout,
    }

    const state = { logged : true, 
      user :{ 
        name: 'David',
        id : '1234'
      }
    }
    const newState = authReducer(state, action)
    expect(newState).toEqual( { logged: false})
  });
  
  
});