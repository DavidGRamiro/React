const { render, screen } = require("@testing-library/react");
const { AuthContext } = require("../../auth/context/AutContext");
const { PublicRoute } = require("../../router/PublicRoute");
const { Route, Routes, MemoryRouter } = require("react-router-dom");

describe('Pruebas en el Private Route', () => {

  test('Debe de mostar el children si esta autenticado', () => {
    
    // Verificar si el localstorage ha sifo llamado
    // localStorage.setItem = jest.fn();

    const contextValue = { logged : true, user: { name: 'David', id: '1234'} }
    render(  
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={[ '/marvel']}>
          <Routes>
            <Route path="marvel" element={ <h1>MARVEL PAGE</h1> }></Route>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('MARVEL PAGE')).toBeTruthy()
    // expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
  });
  
}); 