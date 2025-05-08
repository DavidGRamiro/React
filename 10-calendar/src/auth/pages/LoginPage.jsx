import { useEffect } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useForm } from "../../hooks/useForm";
import "./LoginPage.css";
import  Swal  from 'sweetalert2'


const loginFormFields = {
  loginEmail : '',
  loginPassword: ''
}

const registerFormFields = {
  registerEmail : '',
  registerPassword: '',
  registerPassword2: '',
  name: ''
}


export const LoginPage = () => {

  const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm( loginFormFields)
  const { registerEmail, registerPassword, registerPassword2, name ,onInputChange: onRegisterInputChange } = useForm( registerFormFields)

  const { startLogin, startRegister, errorMessage } = useAuthStore()

  useEffect(() => {
    if(errorMessage !== undefined){
      Swal.fire('Error en la autenticación', errorMessage, 'error')
    }
  }, [errorMessage])
  

  const loginSubmit = (event) => {
    event.preventDefault()
    startLogin({ email: loginEmail, password: loginPassword })
  }

  const registerSubmit = (event) => {
    event.preventDefault()
    if(registerPassword !== registerPassword2){
      Swal.fire('Error de registro', 'Password no coinciden', 'warning')
    }
    startRegister( {  email: registerEmail, password: registerPassword, name } )
  }


  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={loginSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="loginEmail"
                value={loginEmail}
                onChange={onLoginInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="loginPassword"
                value={loginPassword}
                onChange={onLoginInputChange}
              />
            </div>
            <div className="d-grid gap-2">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={registerSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="name"
                value={name}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="registerEmail"
                value={registerEmail}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="registerPassword"
                value={registerPassword}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="registerPassword2"
                value={registerPassword2}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
