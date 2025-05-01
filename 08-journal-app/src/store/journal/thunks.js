import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote} from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileIUpload";


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

// Función para actualizar una nota en BBDD
export const startSavingNote = () => {
  return async(dispatch, getState) => {

    dispatch(setSaving())

    const { uid } = getState().auth
    const { active:note } = getState().journal

    // Eliminamos el id de la nota que mandamos a actualizar en firestore, por que si no, nos crearia una nueva
    const noteToFirestore = {...note}
    delete noteToFirestore.id

    // Referencia al documento que queremos actualizar
    const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}`)
    // La sopciones, como merge,hace que si mandamos campos en noteFireStore
    // que no existian, entonces mantiene los anteriores
    await setDoc(docRef, noteToFirestore, { merge: true })

    //Actualizamos todas las notas de nuestro State.
    dispatch(updateNote( note ))
  } 
}


//Funcion para la carga de imagenes a Cloudinary
export const startUploadingDiles = ( files = []) => {
  return async(dispatch) => {
    // Bloquea botones.
    dispatch(setSaving())
    const fileUploadPromises = []
    
    //Llamamos a la funcion asincrona que hemos creado. y alamacenamos todas las respuestas en un array
    for (const file of files) {
      fileUploadPromises.push( fileUpload(file) )
    }
    // Con esto hacemos que resulva todas las promesas 
    const photosURL = await Promise.all( fileUploadPromises )
    // Despues de tener nuestro arreglo de imagenes, lo asignamos a nuestra nota activa.
    dispatch(setPhotosToActiveNote(photosURL))
  }
}

export const startDeletingNote = () => {
  return async(dispatch, getState) => {

    const { uid } = getState().auth
    const { active:note } = getState().journal
    console.log(note)
    const refDoc = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
    await deleteDoc(refDoc)

    dispatch(deleteNoteById(note.id))

  }
}