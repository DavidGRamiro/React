const { renderHook, act } = require("@testing-library/react");
import { useForm } from '../../hooks/useForm'

describe('Test sobre el formulario', () => {

  const initialForm = {
    name : 'david',
    email : 'd@email.com'
  }

  test('Debe de retornar la información por defecto', () => {

    const { result }  = renderHook( () => useForm(initialForm) )
    expect(result.current).toEqual({
      name : initialForm.name,
      email : initialForm.email,
      formState : initialForm,
      onInputChange : expect.any(Function),
      onResetForm : expect.any(Function)
    })
  });

  test('Debe de cambiar el nombre del formulario', () => {

    const newValue = 'Juan' 
    const { result }  = renderHook( () => useForm(initialForm) )
    const { onInputChange }  = result.current
    
    act(() => {
      onInputChange( { target: { name: 'name', value : newValue} })
    })

    expect(result.current.name).toBe(newValue)

    
  });

}); 