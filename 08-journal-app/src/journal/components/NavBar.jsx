import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { logoutFirebaseUser } from "../../firebase/providers"
import { startLogoutFirebase } from "../../store/auth/thunks"
export const NavBar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(startLogoutFirebase())
  }


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
          <IconButton color="error" onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid> 
      </Toolbar>
    </AppBar>


  )
}
