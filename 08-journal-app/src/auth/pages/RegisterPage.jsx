import { Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {

  return (
    <AuthLayout title="Nueva cuenta">
      <form>
        {/* Input de email */}
        <Grid container xs={12}>

          <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              type="text"
              placeholder="David González"
              label="Nombre completo"
              fullWidth
            />
          </Grid>

          <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              type="email"
              placeholder="correo@mail.com"
              label="Correo"
              fullWidth
            />
          </Grid>
          {/* Input de password */}
          <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              type="password"
              placeholder="Password"
              label="Password"
              fullWidth
            />
          </Grid>
        </Grid>

        {/* Botones de formulario */}
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item size={{ xs: 12, sm: 12 }} sx={{ mt: 1 }}>
            <Button variant="contained" fullWidth>
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
