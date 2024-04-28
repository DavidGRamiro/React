
import { render, screen } from "@testing-library/react"
import { GiftItem } from "../../src/components/GiftItem"

// Primera prueba, hacer match con el snapshot
describe('Prueba en Gift Item', () => { 

  const titulo = 'David'
  const url = 'http://google.com'
  test('hacer match con snapsot', () => { 
    const { container } = render(<GiftItem title={titulo} url={url} ></GiftItem>)
    expect( container ).toMatchSnapshot();
  
  })

  test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {

    render(<GiftItem title={titulo} url={url} ></GiftItem>)

    // expect( screen.getByRole('img').src ).toBe(url + '/')
    const { src, alt } =  screen.getByRole("img")
    expect( src ).toBe(url + '/');
    expect( alt ).toBe( titulo );
  })


  test('Debe de mostrar el titulo de nuestro componente', () => {

    render(<GiftItem title={titulo} url={url} ></GiftItem>);
    expect( screen.getByText(titulo)).toBeTruthy()
  })
})