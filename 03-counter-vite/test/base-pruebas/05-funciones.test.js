/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"


describe('Pruebas 05', () => { 
    test('get user debe de retornar un objeto', () => {


        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        // Los objetos se evaluan con toStrictEqual o toEqual
        expect( testUser ).toStrictEqual( user )

        const name = 'David';
        const usuarioActivoTest = {
            uid: 'ABC567',
            username: name
        }
        const usuarioActivo = getUsuarioActivo(name)

        expect( usuarioActivoTest ).toStrictEqual(usuarioActivo)
    })
})