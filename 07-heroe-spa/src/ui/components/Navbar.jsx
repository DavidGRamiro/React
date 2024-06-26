import { Link, NavLink, useNavigate } from 'react-router-dom';
import { SearchPage } from '../../heroes';
import { AuthContext } from '../../auth/context/AutContext';
import { AutProvider } from '../../auth/context/AutProvider';
import { useContext } from 'react';


export const Navbar = () => {

  const navigate = useNavigate();
  const  { user, logout } = useContext(AuthContext)


  const onLogout = () => {
  // Con la función replace evitamos que se pueda ir hacia atrás
    navigate('/login' ,{ replace: true });
    logout()
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

                    <NavLink  className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`  } 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink  className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`  } 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink  className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`  } 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                  
                  <span className='nav-item nav-link text-info'>
                    {  user?.name  }
                  </span>
                  <button className='nav-item nav-link btn' onClick={() => onLogout()}>
                    Logout
                  </button> 
                </ul>
            </div>
        </nav>
    )
}