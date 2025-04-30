import { collection, getDocs } from "firebase/firestore"
import { FirebaseDB } from "../firebase/config"

// Carga de notas de FireStoreDV de forma asincrona
export const loadNotes = async( uid = '') => {
  // Referencia a la coleccion
  const collecionRef = collection( FirebaseDB, `${uid}/journal/notes`)
  // Obtenemos los documentos que tenemos en BBDD
  const docs = await getDocs(collecionRef)
  
  const notes = []
  // Agregamos al array todas las propiedades que tenemos en bse de datos, adicionalmente, el id del documento que recuperamos de la BBDD
  docs.forEach(documento => {
    notes.push(
      {
        id: documento.id,
        ...documento.data()
      }
    )
  });
  
  return notes
}