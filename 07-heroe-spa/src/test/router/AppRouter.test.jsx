const { render, screen } = require('@testing-library/react');
const { AuthContext } = require('../../auth/context/AutContext');
const { MemoryRouter } = require('react-router-dom');
const { AppRouter } = require('../../router/AppRouter');

describe('Pruebas en el App Router', () => {
  

  test('Debe de mostar el login si no está autenticado', () => {

    const contextValue = { logged : false }
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value = { contextValue}>
          <AppRouter></AppRouter>
        </AuthContext.Provider>
      </MemoryRouter>
    )
    // recupera 2, el del h1 y el del botón
    expect(screen.getAllByText('Login').length).toBe(2)
  });

  
  test('Debe de mostar el componete Marvel si esta autenticado', () => {

    const contextValue = { logged : true , user : { name: 'David', id: '1234'}}
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value = { contextValue}>
          <AppRouter></AppRouter>
        </AuthContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
  });
});