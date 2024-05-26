const { render, screen, fireEvent } = require('@testing-library/react');
const { AutProvider } = require('../../auth/context/AutProvider');
const { AuthContext } = require('../../auth/context/AutContext');
const { Navbar } = require('../../ui');
const { MemoryRouter, useNavigate } = require('react-router-dom');

describe('Pruebas en el NavBar', () => {
  const context = { logged: true, user : { name: 'David', id: '1234'}, logout: jest.fn()}
  beforeEach(() => jest.clearAllMocks())


  test('Debe de mostrar el nombre del usuario', () => {
    
    render(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={['/marvel']}>
          <Navbar></Navbar>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('David')).toBeTruthy()
  });

  test('Debe de llamar al logout y navigate cuando se hace click en el botón de Logout', () => {
    
    render(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={['/marvel']}>
          <Navbar></Navbar>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    // REcuperamos que el boton ha sido llamado
    const btn = screen.getByRole('button');
    fireEvent.click(btn)
    expect(context.logout).toHaveBeenCalled() 
  });
  
});