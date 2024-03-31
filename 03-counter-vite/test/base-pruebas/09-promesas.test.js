import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";



describe('Pruebas 09', () => { 
    test('GetHeroeByAsync debe de retornar un heroe', (done) => { 

        
        const id = 1;
        getHeroeByIdAsync(id).then( heroe => {
            
            expect( heroe ).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
            // Forma de decirle a Jest que tiene que esperar a la respuesta. LLamarlo en la cabecera.
            done();
        })
    })


    test('GetHeroeByAsync debe de retornar un error si no lo encuentra', (done) => { 
        const id = 9;
        getHeroeByIdAsync(id).catch( err => {
            expect( err ).toEqual('No se pudo encontrar el héroe')
            // Forma de decirle a Jest que tiene que esperar a la respuesta. LLamarlo en la cabecera.
            done();
        })
    })
})