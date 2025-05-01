import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../components'
import { useForm } from '../../hooks/useForm'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'

export const NoteView = () => {

  // COn esta sintaxis indicamos que active va a ser renombrada como note en este componente
  const { active: note } = useSelector( state => state.journal)
  const { body, title, onInputChange, formStatem, date}= useForm(note, )
  const dateString = useMemo( () => {
    const newDate = new Date(date);
    return newDate.toUTCString()
  }, [date])

  return (
    
    <Grid container direction='row' justifyContent='space-between' sx={{ mb:1}} className="animate__animated animate__fadeIn animate__faster">
      <Grid item>
          <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
      </Grid>

      <Grid item>
        <Button color='primary' sx={{ p:2}}>
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


      {/* Image Loader */}
      <ImageGallery />

    </Grid>
  )
}
