import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothinSelectedView } from "../views/NothinSelectedView"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {
  
  // Llamamos al dispatch
  const dispatch = useDispatch()
  const { isSaving , active } = useSelector( state => state.journal )

  // Funcion para crear una nueva nota.
  const onNewNote = () => {
    dispatch(startNewNote())
  }
  
  
  return (
    <JournalLayout>
      {/* Si tenemos nota activa, mostramos la pantalla de la Notes, si no, la de nada seleccionado. */}
      {/* Convertimos active en un valor booleano con la doble negacion. Si active es true, significa que hay algo activo, */}
      {  ( !!active ) ?  <NoteView /> : <NothinSelectedView />   }


      <IconButton 
          onClick={onNewNote}
          size="large" 
          disabled={ isSaving}
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
