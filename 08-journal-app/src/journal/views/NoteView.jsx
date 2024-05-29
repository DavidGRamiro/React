import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../components/ImageGallery'



export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb:1}}>
      <Grid item>
        <Typography fontSize={39} fontWeight='light' >28 de Agosto</Typography>
      </Grid>

      <Grid item>
        <Button color='primary' sx={{ p:2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField variant='filled' type='text' label='Titulo' placeholder='Ingrese el titulo' fullWidth sx={{ border: 'none', mb:1}} ></TextField>
        <TextField variant='filled' type='text' label='Descripción' minRows={5}  multiline placeholder='Que pasó en el día de hoy' fullWidth sx={{ border: 'none', mb:1}} ></TextField>
      </Grid>

      {/* GALERIA DE IMAGENES */}
      <ImageGallery></ImageGallery>

    </Grid>
  )
}

