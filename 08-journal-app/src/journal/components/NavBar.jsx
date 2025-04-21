import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'

export const NavBar = ({ drawerWidth = 240 }) => {
  return (

    <AppBar position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)`, ml: { sm: `${drawerWidth}` }}
      }}
    >
      <Toolbar>
        <IconButton color="inherit" edge="start" sx={{ mr:2, display: {sm:' none'} }}>
          <MenuOutlined />
        </IconButton>

        <Grid sx={{ width: '100%' }} container direction='row' alignItems='center' justifyContent='space-between'>
          <Typography variant="h6" noWrap component='div'> Journal App</Typography>
          <IconButton color="error">
            <LogoutOutlined />
          </IconButton>
        </Grid> 
      </Toolbar>
    </AppBar>


  )
}
