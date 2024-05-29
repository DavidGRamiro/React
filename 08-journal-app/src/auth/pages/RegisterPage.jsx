import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear cuenta'>

      <form>
        <Grid container>
          {/* Item para el nombre completo */}
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField label="Nombre" type='text' placeholder='Nombre y apellidos' fullWidth></TextField>
          </Grid>
          {/* Item para el correo electronico */}
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField label="Correo electrónico" type='email' placeholder='correo@google.com' fullWidth></TextField>
          </Grid>
          {/* Item para la contraseña */}
          <Grid item xs={12}>
            <TextField label="Password" type='password' placeholder='Contraseña' fullWidth></TextField>
          </Grid>
          {/* Item para boton de crear nueva cuenta del formulario */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} >
              <Button variant='contained' fullWidth>Crear cuenta</Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}> ¿ Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login"> Iniciar sesión</Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>



  )
}

