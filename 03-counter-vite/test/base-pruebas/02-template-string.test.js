/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { getSaludo } from "../../src/base-pruebas/02-template-string"



describe('Pruebas en 02 template stings', () => { 
    test('Debe retornar Hola David', () => { 

        const name = 'David'
        const message = getSaludo( name )

        expect( message ).toBe(`${ message}`)

     })
 })