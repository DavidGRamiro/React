import { Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  // email: ['@', 'El correo debe de tener un @']
  email: [ (value) => value.includes('@') , 'El correo debe de tener un @'],
  password: [ (value) => value.length >= 6 , 'Password debe de tener más de 6 letras'],
  displayName: [ (value) => value.length >= 1 , 'El nombre es obligatorio']
  
}

export const RegisterPage = () => {

  // Control del formulario para que no apareza el formalario como invalido.
  const [formSubmitted, setFormSubmitted] = useState(false)
  const dispatch = useDispatch()

  // Custom hook para recuperar los valores del formulario
  const { formState, email, password, onInputChange, displayName, 
    isFormValid, emailValid, passwordValid, displayNameValid 
  } = useForm(formData, formValidations)

  // Submit del formulario
  const onSubmit = (event) => {
    setFormSubmitted(true)
    event.preventDefault()

    if(!isFormValid) return;
    // Le mandamos el formState a nuestra funcion definida en el Slice, en el que aqui dentro, desestrucuturaremos
    // el email, password y el displayName.
    dispatch(startCreatingUserWithEmailPassword(formState))
  }


  return (
    <AuthLayout title="Nueva cuenta">
      <form onSubmit={onSubmit}>
        {/* Input de email */}
        <Grid container xs={12}>

          <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              type="text"
              placeholder="David González"
              label="Nombre completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={ !!displayNameValid && formSubmitted}
              helperText={displayNameValid }
            />
          </Grid>

          <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              type="email"
              placeholder="correo@mail.com"
              label="Correo"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={ !!emailValid && formSubmitted}
              helperText={ emailValid }
            />
          </Grid>
          {/* Input de password */}
          <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              type="password"
              placeholder="Password"
              label="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }
            />
          </Grid>
        </Grid>

        {/* Botones de formulario */}
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item size={{ xs: 12, sm: 12 }} sx={{ mt: 1 }}>
            <Button variant="contained" fullWidth type="submit">
              Crear cuenta
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* FUERA DE FOMRULARIO. Link para redireccionar al registro */}
      <Grid container direction="row" justifyContent="flex-end">
        <Typography sx={{ mr:1 }} > Ya tienes cuenta ?</Typography>
        <Link component={RouterLink} color="info" to="/auth/login">
          Ingresar
        </Link>
      </Grid>
    </AuthLayout>
  );
};
