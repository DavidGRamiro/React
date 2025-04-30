import { collection, doc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes} from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";


// Asociada al empezar una nueva nota. Boton flotante.
export const startNewNote = () => {
  return async(dispatch, getState) => {
    // Para grabar en FireBase necesitamos el uid del usuario.
    const { uid } = getState().auth

    // Dispatch de la acion para indicar de que se esta creando una nueva nota.
    dispatch(savingNewNote())
    
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }
    // Aqui, lo que hacemos es llamar a FireBase para crear un nuevo documento, y sus colecciones.
    // La entarda, va a ser el id del usuario, seguido de la coleccion llamada journal, seguido de la coleccion de notas asociadas al usuario
    const newDoc = doc( collection( FirebaseDB, `${ uid}/journal/notes`))
    // Aqui, add la nueva nota a la BBDD
    const setDocRes = await setDoc(newDoc, newNote)

    // A la nota que creamos, le add la id del nuevo documento creado.
    newNote.id = newDoc.id
    // Funcion para add una nueva nota vacía
    dispatch(addNewEmptyNote(newNote))
    // Función para activar la nota.
    dispatch(setActiveNote(newNote))

  }
}

// Función que es llamada cuando hacamos login, y cargamos las notas de los usuarios.
export const startLoadingNotes = () => {
  return async(dispatch, getState) => {

    const { uid } = getState().auth
    const notes = await loadNotes( uid )
    dispatch(setNotes(notes))
  }
}