import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe( 'Pruebas 08', () => {
    test('Debe de retonar el objeto por ID', () => { 
        const id = 2;
        const busqueda = getHeroeById(id)

        expect(busqueda).toEqual( {
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        })
    })

    test('Debe de retornar undefined al no encontrar un objeto', () => { 
        const id = 100;
        const busqueda = getHeroeById(id)
        // Forma de evaluar que esto sea null, udnefined o false
        expect( busqueda ).toBeFalsy()
    })

    // Tarea:
    // Pruebas sobre el getHeroByOwner.
    test('Debe de retonar un arreglo con los heroes DC', () => { 
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner)
        expect(heroes.length).toBe(3)
        expect( heroes ).toEqual(  [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])
    })

    test('Debe de retonar un arreglo con los heroes Marvel', () => { 
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner)
        expect(heroes.length).toBe(2)
        console.log(heroes)
        expect( heroes ).toEqual(      [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ])
    })






})