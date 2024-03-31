import { render , screen} from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('FirstApp test', () => { 

    const title = 'Hola soy David'
    const subtitle = 'Hola soy subtitulo'

    test('Match con snapshot', () => { 
        const { container } =  render( <FirstApp title={ title } ></FirstApp>)
        expect( container).toMatchSnapshot()
    })

    test('Debe mostrar el mensaje, hola soy David', () => { 
        render( <FirstApp title={ title } ></FirstApp>)
        expect( screen.getAllByText(title) ).toBeTruthy()
    })

    test('Debe mostrar el titulo en un H1', () => { 
        render( <FirstApp title={ title } ></FirstApp>)
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)
    })

    test('Debe mostrar el subtitulo enviado por props', () => { 
        render( <FirstApp title={ title } subtitle={ subtitle } ></FirstApp>)
        expect(screen.getAllByText(subtitle).length).toBe(1)
    })

    

    


})