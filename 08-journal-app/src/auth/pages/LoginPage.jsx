import { Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Google, Password } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import {  useDispatch } from 'react-redux'
import { checkingAutentication, startGoogleSignIn } from "../../store/auth/thunks";

export const LoginPage = () => {

  // Al hacer el SigIn con email y password, tenemos que acceder al store, y hacer el dispatch del checking
  const dispatch = useDispatch()
  
  const { email, password, onInputChange, formState} = useForm({
    email: 'david@email.com',
    password: '1234'
  })

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(checkingAutentication())
  }

  const onGoogleSignIn = () => {
    console.log('Login en google')
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
            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }} sx={{ mt: 1 }}>
            <Button variant="contained" fullWidth onClick={onGoogleSignIn} >
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
