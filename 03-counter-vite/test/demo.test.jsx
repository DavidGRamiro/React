/* eslint-disable no-undef */


// Instalar la libreria  yarn add -D @types/jest para tener el linter
 
// eslint-disable-next-line no-undef
test('Esto es una prueba no debe de fallar, claro', () => {

    // 1. Inicialización
    const message1 = "Hola";


    // 2.Estimulo
    const message2 = 'Hola';


    // 3.Observar el comportamiento esperado.
    // expect(message1).toBe(message2)
    expect(message1).toBe(message2)

})