import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    // Es un custom Hook De react router dom. Lo que va hacer es ir a LocationProvider, y leer la ruta en la que nos encontramos.
    // Tambien podemos acceder a diferentes funciones que tiene internas, en este caso usaremos el push y el replace.
    const navigate = useNavigate()

    // Obtenemos del context el nombre de usuario
    const { user, logout } = useContext(AuthContext) 

    const onLogout = () => {
        // Le podemos mandar un obeto como options, en el que replace, va hacer que no podamos volver a la ruta anterior.
        logout()
        navigate('/login', {
            replace: true
        })
        
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive  }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive  }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'} 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive  }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 div-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                  <span className='nav-item nav-link text-primary'> { user?.name }</span>
                  <button  onClick={onLogout} className='nav-item nav-link btn'> Logout</button>
                </ul>
            </div>
        </nav>
    )
}