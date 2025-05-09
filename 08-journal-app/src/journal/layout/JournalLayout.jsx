import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components"

const drawerWidth = 280


export const JournalLayout = ({ children }) => {
  return (
    
    <Box sx={{ display : 'flex'}} className="animate__animated animate__fadeIn animate__faster">

      {/* NAVBAR */}
      <NavBar drawerWidth={drawerWidth} />


      {/* SIDEBAR */}
      <SideBar  drawerWidth={drawerWidth}/>

      <Box
        component='main'
        sx={{ flexGrow: 1, padding: 3}}
        >

        <Toolbar></Toolbar>
        {children}

      </Box>
    </Box>


  )
}
