import { getGifts } from "../../src/helpers/getGifts"


describe('Pruebas en el helper de GetGifts', () => { 

  test(' Debe de retornar un arreglo de gifts', async() => {
    
    const gifts = await getGifts('Motorbikes')
    // Que por lo menos el array no este vacio
    expect( gifts.length ).toBeGreaterThan(0)
    // Esperamos que nuestro objeto siempre nos devuelva estas propiedades.
    expect( gifts[0] ).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })

})