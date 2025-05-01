


import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: null
}

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    savingNewNote : (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote : (state, action ) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload
      state.messageSaved = ''
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = ''
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      const notaActualizar = action.payload
      // Esta accion se dispara, cuando hemos actualizado una nota, para que aparezca,
      // la actualizacion tambien en el componete princiapl de ntas, en el sideBar
      state.notes = state.notes.map( (nota) => {
        if(nota.id === notaActualizar.id ){          
          nota = notaActualizar
        }
        return nota
      })
      // Despues de actualizar la nota querremos mandar un mensaje de informacion
      state.messageSaved = `${ notaActualizar.title }, actualizada correctamente.`
      
    },
    clearNotesLogout : (state, action) => {
      state.isSaving = false,
      state.messageSaved = '',
      state.notes = [],
      state.active = null
    },
    setPhotosToActiveNote : (state, action) => {
      // Introducimos las nuevas imagenes, y mantenemos las anteriores.
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
      state.isSaving = false;
    },
    deleteNoteById: (state, action) => {

      state.active = null
      state.notes = state.notes.filter( note => note.id !== action.payload)

    },
  }
});

export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, savingNewNote, setPhotosToActiveNote, clearNotesLogout } = journalSlice.actions
