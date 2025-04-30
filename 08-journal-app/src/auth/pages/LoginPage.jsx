import { Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Google, Password } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import {  useDispatch, useSelector } from 'react-redux'
import { checkingAutentication, startGoogleSignIn } from "../../store/auth/thunks";
import { useMemo } from "react";

export const LoginPage = () => {

  // Acceso al store
  const { status } = useSelector( state =>  state.auth)
  // Al hacer el SigIn con email y password, tenemos que acceder al store, y hacer el dispatch del checking
  const dispatch = useDispatch()
  
  // Custom hook para recuperar los valores del formulario
  const { email, password, onInputChange, formState} = useForm({
    email: 'david@email.com',
    password: '1234'
  })

  // Memorizamos la variable, solo cuando el status cambie
  const isAutenticating = useMemo( ()  => status === 'checking', [status] )

  // LLamamos al dispatch con las funciones asincronas que hemos definido en los thunks.
  const onSubmit = (event) => {
    event.preventDefault()
    // Dispatch definido en la funcion asincrona de los thunks
    dispatch(checkingAutentication())
  }

  const onGoogleSignIn = () => {
    // Dispatch definigo en los thunks, por que es una funcion asincrona.
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        {/* Input de email */}
        <Grid container xs={12}>
          <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              type="email"
              placeholder="correo@mail.com"
              label="Correo"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
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
            />
          </Grid>
        </Grid>

        {/* Botones de formulario */}
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item size={{ xs: 12, sm: 6 }} sx={{ mt: 1 }}>
            <Button type="submit" variant="contained" fullWidth disabled={isAutenticating}>
              Login
            </Button>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }} sx={{ mt: 1 }}>
            <Button variant="contained" fullWidth onClick={onGoogleSignIn}  disabled={isAutenticating}>
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* FUERA DE FOMRULARIO. Link para redireccionar al registro */}
      <Grid container direction="row" justifyContent="flex-end">
        <Link component={RouterLink} color="info" to="/auth/register">
          Crear una nueva cuenta
        </Link>
      </Grid>
    </AuthLayout>
  );
};
