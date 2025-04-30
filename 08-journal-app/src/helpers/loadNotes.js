import { collection, getDocs } from "firebase/firestore"
import { FirebaseDB } from "../firebase/config"


export const loadNotes = async( uid = '') => {

  const collecionRef = collection( FirebaseDB, `${uid}/journal/notes`)
  const docs = await getDocs(collecionRef)
  
  const notes = []
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