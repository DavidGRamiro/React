/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"





describe('Pruebas en arreglos', () => {
    test( 'Debe de retornar un string y un numero', () => {
        
        const [ letters, number] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(number).toBe(123);

        expect(typeof letters).toBe('string')
        expect(letters).toStrictEqual(expect.any(String))

        expect(typeof number).toBe('number')





    })
})