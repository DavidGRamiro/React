

export const fileUpload = async( file ) => {

  const cloudURL = 'https://api.cloudinary.com/v1_1/journal-app-react-david/upload'
  const formData = new FormData()
  formData.append('upload_preset', 'react-journal')
  formData.append('file', file)

  try{
    const resp = await fetch(cloudURL, {
      method: 'POST',
      body: formData,
      mode: 'cors'
    })

    if(!resp.ok) throw new Error('No se pudo subir la imagen')
    
    const { secure_url } = await resp.json()
    return secure_url

  }catch (error){
    throw new Error('Error en la subida de archivo.')
  }

}