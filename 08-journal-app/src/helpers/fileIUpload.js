

export const fileUpload = async( file ) => {

  const cloudURL = '/prueba/v1_1/journal-app-react-david/upload'
  const formData = new FormData()
  formData.append('upload_preset', 'react-journal')
  formData.append('file', file)

  try{

    const resp = await fetch(cloudURL, {
      method: 'POST',
      body: formData
    })

    console.log(resp)
    if(!resp.ok) throw new Error('No se pudo subir la imagen')
    
    const cloudResponse = await resp.json()
    return cloudResponse

  }catch (error){
    console.log(error)
    throw new Error('Error en la subida de archivo.')
  }

}