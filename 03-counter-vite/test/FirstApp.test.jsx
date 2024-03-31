import { render } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('FirstApp test', () => { 

    
    test('Debe de ser igual que nuestro componente', () => { 
        const title = 'Hola bebe'
        const { container }  = render( <FirstApp title={ title }></FirstApp>)
        // Toma una fotografia de lo que se esta renderizando. Nos permite comparar con el componente y con el test
        // Este tipo de pruebas es para archivos que van a durar en el tiempo

        // expect( container ).toMatchSnapshot()
    })

    test('Debe mostrar el titulo en un h1', () => { 
        const title = 'Hola bebe'
        const { container, getByText, getByTestId }  = render( <FirstApp title={ title }></FirstApp>)
        expect( getByText(title) ).toBeTruthy()


        const h1 = container.querySelector('h1')
        expect(h1.innerHTML).toContain(title)

        expect( getByTestId('test-title').innerHTML).toContain(title)
    })

    test('Debe de mostrar el subtitulo enviado por props', () => { 
        const title = 'Hola bebe'
        const subtitle = 'Soy un subtitulo'
        const {   getAllByText }  = render( <FirstApp title={ title } subtitle={ subtitle }  ></FirstApp>)
        
        expect(getAllByText(subtitle).length).toBe(1);
    })
})