import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>

      <form>
        <Grid container>
          {/* Item para el correo electronico */}
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField label="Correo electrónico" type='email' placeholder='correo@google.com' fullWidth></TextField>
          </Grid>
          {/* Item para la contraseña */}
          <Grid item xs={12}>
            <TextField label="Password" type='password' placeholder='Contraseña' fullWidth></TextField>
          </Grid>
          {/* Item para los botones del formulario */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6} >
              <Button variant='contained' fullWidth>Login</Button>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Button variant='contained' fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}> Google </Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register" >Crear una cuenta</Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>



  )
}

