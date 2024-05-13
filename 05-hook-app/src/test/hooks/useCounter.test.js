import * as jest from '@testing-library/react' 
import { useCounter } from '../../hooks/useCounter';



describe('Pruebas en el useCounter', () => {

  test('Debe de retornar los valores por defecto', () => {

    const { result } =  jest.renderHook(  () =>  useCounter())
    const { counter, reset , restar, sumar } = result.current
    
    expect(counter).toBe(10)
    expect( restar ).toEqual( expect.any(Function))
    expect( sumar ).toEqual( expect.any(Function))
    expect( reset ).toEqual(expect.any(Function))
  });

  test('Debe de generar el counter con el valor de 100', () => {

    const { result } =  jest.renderHook(  () =>  useCounter(100))
    const { counter } = result.current

    expect(counter).toBe(100)
  });

  test('Debe de incrementar el contador ', () => {
    const { result } =  jest.renderHook(  () =>  useCounter())
    const { counter, sumar } = result.current

    jest.act( () => {
      sumar()
    })
    expect(result.current.counter).toBe(20)

  });


});