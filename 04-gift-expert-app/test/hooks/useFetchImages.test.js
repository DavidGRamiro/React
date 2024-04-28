import { useFetchImages } from "../../src/hooks/useFetchImages";
import { renderHook, waitFor } from '@testing-library/react'

describe('Pruebas en el Hook de Fetch Images', () => { 

  test('Debe de regresar el stado inicial del hook', () => {
    
    //Estado inicial : Imagenes arreglo vacio y isLoading a False
    const { result } =  renderHook( () => useFetchImages('Dragon Ball') )
    const { images, isLoading } = result.current

    expect( images.length ).toBe(0)
    expect( isLoading ).toBeTruthy()

  });

  test('Debe de regresar array de imagenes e isLoading en False', async() => {
    
    const { result } =  renderHook( () => useFetchImages('Dragon Ball') )
    
    // Decimos a JEST que espere a evaluar esta funcion asincrona. Es await, hacer el test asincrono
    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0)
    )

    const { images, isLoading } = result.current

    expect( images.length ).toBeGreaterThan(0)
    expect( isLoading ).toBeFalsy()

  });


})