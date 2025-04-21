import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../components'

export const NoteView = () => {
  return (
    
    <Grid container direction='row' justifyContent='space-between' sx={{ mb:1}}>
      <Grid item>
          <Typography fontSize={39} fontWeight='light'>28 de agosto, 2024</Typography>
      </Grid>

      <Grid item>
        <Button color='primary' sx={{ p:2}}>
          <SaveOutlined sx={{ fontSize:30, mr:1}}></SaveOutlined>
          Guardar
        </Button>
      </Grid>

      <Grid container width='100%'>
        <TextField type='text' variant='filled' fullWidth placeholder='Ingrese un titulo' label='Titulo' sx={{ boder: 'none', mb:1 }}></TextField>
        <TextField type='text' variant='filled' fullWidth  multiline placeholder='Que ocurrio hoy'  minRows={5}></TextField>
      </Grid>


      {/* Image Loader */}
      <ImageGallery />

    </Grid>
  )
}
