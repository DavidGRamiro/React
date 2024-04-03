import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from '../src/CounterApp'

describe('Pruebas sobre Counter App', () => { 

    test('Debe de hacer macth con el snapshot', () => { 
        const { container } = render( <CounterApp value={10} ></CounterApp>)
        expect( container).toMatchSnapshot()
    })

    test('Debe de mostrar el valor incial de 100', () => { 
        render(<CounterApp value={100}></CounterApp>)
        expect(screen.getByText(100)).toBeTruthy()
    })
    
    test('Debe incrementar con el boton +1', () => { 
        render(<CounterApp value={10}></CounterApp>)
        fireEvent.click(screen.getByText('+1'))

        expect( screen.getByText('11')).toBeTruthy()
    })

    test('Debe decrementar con el boton -1', () => { 
        render(<CounterApp value={10}></CounterApp>)
        fireEvent.click(screen.getByText('- 1'))
        expect( screen.getByText('9')).toBeTruthy()
    })

    test('Debe hacer reset el contador', () => { 
        render(<CounterApp value={10}></CounterApp>)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        // Tenemos un valor de 13 en este momento
        fireEvent.click(screen.getByText('Reset'))

        expect(screen.getByText(10)).toBeTruthy()

    })

    








})