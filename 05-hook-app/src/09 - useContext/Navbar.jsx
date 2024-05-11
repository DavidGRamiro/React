
import {  Link, NavLink } from 'react-router-dom'


export const Navbar = () => {

  return (
    
    <>

      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/">useContext</Link>
          
            <ul className="navbar-nav me-auto mb-2 mb-lg-0v">

              <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active'  : ''}` } 
                        to='/about'>About</NavLink>

              <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active'  : ''}` }  
                        to='/login'>Login</NavLink>
            </ul>
          </div>
      </nav>
    </>
  )
}
