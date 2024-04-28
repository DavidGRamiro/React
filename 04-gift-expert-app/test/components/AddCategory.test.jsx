import {fireEvent, render, screen} from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Pruebas en el componete de ADD ITEM', () => { 

  test('Debe de cambiar el valor de caja de texto', () => { 

    /*
      1. Se crea el sujeto de pruebas.
      2. Extraemos el input en el que queremos añádir la funcionalidad.
      3. Forzamos un evento, de cambio de valor del input.
      4. Evaluamos.
    */
    render( <AddCategory  onNewCategory={ () => {} } ></AddCategory> )
    const input = screen.getByRole('textbox');
    // Añádimos a nuestro input el valor.
    fireEvent.input( input , {  target: { value: 'David' } })
    expect( input.value).toBe('David')
  })

  test('Llama a newCategory si el input tiene valor', () => {
    
    const value = 'Moto'
    const onNewCategory = jest.fn()

    render( <AddCategory  onNewCategory={ onNewCategory } ></AddCategory> )
    const input =  screen.getByRole('textbox')
    const form =  screen.getByRole('form')

    fireEvent.input( input, { target : { value: value } })
    fireEvent.submit(form)

    // Evaluar que al final del submit se cambie el input value a vacio
    expect( input.value ).toBe('')
    // Evaluamos que nuestra funcion ha sido llamada  
    expect( onNewCategory ).toHaveBeenCalled()
    expect( onNewCategory ).toHaveBeenCalledWith( value )

  });


  test('No de be de llamar a newCategory si el input esta vacío ', () => {

    render( <AddCategory  onNewCategory={ onNewCategory } ></AddCategory> )
    
    const onNewCategory = jest.fn()
    const form =  screen.getByRole('form')
    fireEvent.submit(form)
    
    expect( onNewCategory ).toHaveBeenCalledTimes(0)
  });


})