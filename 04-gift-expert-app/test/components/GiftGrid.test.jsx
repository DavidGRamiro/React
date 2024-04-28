import { render, screen } from "@testing-library/react";
import { GiftGrid } from '../../src/components/GiftGrid'
import { useFetchImages } from "../../src/hooks/useFetchImages";

jest.mock('../../src/hooks/useFetchImages')

describe('Pruebas sobre el GRID ', () => { 

  const category = 'Dragon Ball'

  test('Debe de mostrar el loading inicialmente', () => {
    
    useFetchImages.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GiftGrid category={category}></GiftGrid>)
    
    expect(screen.getByText(category))
    expect(screen.getByText('Cargando....'))
  });

  test('Debe de mostrar Items cuando se cargar a traves del useFetchGrifts', () => {
    
    const gifts = [
      {
        id: 'ABC',
        title: 'Titulo',
        url: 'URL'
      },
      {
        id: 'EFG',
        title: 'Titulo 2',
        url: 'URL 2'
      },
    ]

    useFetchImages.mockReturnValue({
      images: gifts,
      isLoading: false
    })
    render(<GiftGrid category={category}></GiftGrid>)
    // Esperamos recibir dos imagenes, por que le estamos mandando dos.
    expect(screen.getAllByRole('img').length).toBe(2)
  });
})