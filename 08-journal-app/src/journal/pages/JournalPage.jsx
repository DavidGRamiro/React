import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothinSelectedView } from "../views/NothinSelectedView"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* Componente cuando no hay nada seleccionado */}
      <NothinSelectedView />

      {/* Componente cuando hay una nota seleccionada. */}
      {/* <NoteView /> */}

      <IconButton 
          size="large" 
          sx={{ 
            color: 'white', 
            backgroundColor: 'error.main', 
            ':hover' : {backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
            }}>
          <AddOutlined sx={{ fontSize: 20 }} />
      </IconButton>


    </JournalLayout>
  )
}
