


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
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) => {
      state.isSaving = true;
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

    },
    deleteNoteById: (state, action) => {},
  }
});

export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, savingNewNote } = journalSlice.actions
