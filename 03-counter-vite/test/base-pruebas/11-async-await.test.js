import { getImagen } from "../../src/base-pruebas/11-async-await"



describe('11- Pruebas async await', () => { 
    test('getImagen debe de retornar una URL de una imagen', async() => { 

        const url = await getImagen()
        expect( typeof( url) ).toBe('string')
    })
})