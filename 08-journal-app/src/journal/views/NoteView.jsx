import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../components'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo, useRef } from 'react'
import { useEffect } from 'react'
import { setActiveNote } from '../../store/journal/journalSlice'
import { startDeletingNote, startSavingNote, startUploadingDiles } from '../../store/journal/thunks'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2'


export const NoteView = () => {

  // Con esta sintaxis indicamos que active va a ser renombrada como note en este componente
  const { active: note, messageSaved, isSaving } = useSelector( state => state.journal)
  const { body, title, onInputChange, formState, date}= useForm(note, )
  const dispatch = useDispatch()

  const dateString = useMemo( () => {
    const newDate = new Date(date);
    return newDate.toUTCString()
  }, [date])

  // Con este efecto, lo que conseguimos es que cada vez que cambiemos valores en el formlario, se actualice la nota en redux,
  // pero no en BBDD
  useEffect(() => {
    dispatch(setActiveNote( formState ))
  }, [formState])

  // Efecto que se dispara cuando el mensaje de messageSave cambia.
  useEffect(() => {
    if(messageSaved.length > 0){
        Swal.fire('Nota actualizada', messageSaved, 'success')
    }
  }, [messageSaved])

  const fileInputRef = useRef()
  
  // Para guardar, necesitamos disparar un thunk.
  const onSaveNote = () => {
    dispatch(startSavingNote());
  }

  // Recoge el evento del cambio de carga de archivos
  const onFileInputChange = ({target}) => {
    if(target.files.length === 0) return
    dispatch(startUploadingDiles(target.files))
  }

  const onDelete = () => {
    dispatch(startDeletingNote())
  }

  return (
  
    <Grid container direction='row' justifyContent='space-between' sx={{ mb:1}} className="animate__animated animate__fadeIn animate__faster">
      <Grid item>
          <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
      </Grid>

      <Grid item>

        <input 
            type='file'
            multiple
            ref={fileInputRef}
            onChange={onFileInputChange}
            style={{ display: 'none' }}
        />

        <IconButton color='primary' disabled={isSaving} onClick={ () => fileInputRef.current.click()}>
          <UploadOutlined />
        </IconButton>

        <Button color='primary' sx={{ p:2}} onClick={onSaveNote} disabled={isSaving}>
          <SaveOutlined sx={{ fontSize:30, mr:1}}></SaveOutlined>
          Guardar
        </Button>
      </Grid>

      <Grid container width='100%'>
        <TextField type='text' 
                  variant='filled' 
                  fullWidth 
                  placeholder='Ingrese un titulo' 
                  label='Titulo' 
                  sx={{ boder: 'none', mb:1 }}
                  name= 'title'
                  value={title}
                  onChange={onInputChange}
                  >
        </TextField>
        <TextField type='text' 
                  variant='filled' 
                  fullWidth  
                  multiline 
                  placeholder='Que ocurrio hoy'  
                  minRows={5}
                  name= 'body'
                  value={body}
                  onChange={onInputChange}
                  >
                  
        </TextField>
      </Grid>

      <Grid container justifyItems='end'>
        <Button onClick={ onDelete } color='error' sx={{mt:2}}>
          <DeleteOutline></DeleteOutline>
          Borrrar
        </Button>
      </Grid>


      {/* Image Gallery */}
      <ImageGallery  images={ note.imageUrls} />

    </Grid>
  )
}
