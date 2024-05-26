const { render, screen } = require("@testing-library/react");
const { PublicRoute } = require("../../router/PublicRoute");
const { AuthContext } = require("../../auth/context/AutContext");
const { MemoryRouter, Routes, Route } = require("react-router-dom");


describe('Pruebas en el Public Route', () => {


  test('Si no esta autenticado debe de mostrar el children,', () => {

    const contextValue = { logged : false }
    render(  
      <AuthContext.Provider value={ contextValue }>
        <PublicRoute>
            <h1>Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Ruta publica')).toBeTruthy()    
  });
  

  
  test('Debe de navegar si esta autenticado,', () => {

    const contextValue = { logged : true, user: {
      name: 'David', id: '1234'
    } }

    render(  
      <AuthContext.Provider value={ contextValue }>

        <MemoryRouter initialEntries={['/marvel']}>

          <Routes>
            <Route path="login" element={
              <PublicRoute>
                <h1>Ruta publica</h1>
              </PublicRoute>
            }>
            </Route>
            <Route path="marvel" element={ <h1>Ruta MARVEL</h1>}></Route>
          </Routes>
          
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Ruta MARVEL')).toBeTruthy(); 
  });

});