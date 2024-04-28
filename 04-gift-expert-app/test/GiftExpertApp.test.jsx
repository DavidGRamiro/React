
import { render, screen } from '@testing-library/react'
import { GiftExpertApp } from '../src/GiftExpertApp';


describe('Test en el test principal de la aplicación', () => {

  test('Evaluar el titulo', () => {
    
    render( <GiftExpertApp></GiftExpertApp>)
    const titulo = screen.getByTestId('titulo')
    expect(h1).toBe('GIPHY')
  });
});