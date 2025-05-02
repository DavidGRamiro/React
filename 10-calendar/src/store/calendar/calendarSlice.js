import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns';

const tempEvent = {
  _id: new Date().getTime(),
  title: 'Cumple del jefe',
  notes: 'Comprar la tarta',
  start: new Date(),
  end: addHours( new Date(), 2),
  bgColor: '#fafafa',
  user : {
    _id:'1234',
    name: 'David'
  }
}

const initialState = {
  events :[ tempEvent ],
  activeEvent: null
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    onSetActiveEvent : (state, action) => {
      state.activeEvent = action.payload
    },
    onAddNewEvent : (state, action) => {
      state.events.push(action.payload)
      state.activeEvent = null
    },
    onUpdateEvent: (state, action) => {
      state.events = state.events.map( nota => {
        if(nota._id === action.payload._id){
          return action.payload
        }
        return nota
      }) 
    },
    onDeleteEvent: (state) => {
      if(state.activeEvent){
        state.events = state.events.filter( event => event._id !== state.activeEvent._id)
        state.activeEvent = null
      }
      
    }
  }
});

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions
