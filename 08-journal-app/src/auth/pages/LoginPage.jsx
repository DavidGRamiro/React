import { Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Google } from "@mui/icons-material";

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}
      >
        {/* Title del formulario */}
        <Typography variant="h5" sx={{ mb: 1 }}>
          Login
        </Typography>

        <form>
        {/* Input de email */}
          <Grid container xs={12}>
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
            <Grid item size={{ xs: 12, sm: 6 }} sx={{ mt: 1 }}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6 }} sx={{ mt: 1 }}>
              <Button variant="contained" fullWidth>
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
      </Grid>
    </Grid>
  );
};
