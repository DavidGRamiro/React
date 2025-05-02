import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice"


export const useCalendarStore = () => {

  const dispatch = useDispatch()
  const { events, activeEvent } = useSelector( state => state.calendar)
  
  const setActiveEvent = ( calendarEvent ) => {
    dispatch(onSetActiveEvent( calendarEvent ))
  }

  const  startSavingEvent = async( calendarEvent) => {
    // TODO: Llamar al backend

    if(calendarEvent._id) {
      // Estoy actualizando
      dispatch(onUpdateEvent(calendarEvent))
    }else{
      // Estoy creando un nuevo
      dispatch(onAddNewEvent({...calendarEvent, _id: new Date().getTime()}))
    }
  }
  
  const startDeleingEvent = () => {
    dispatch(onDeleteEvent())
  }

  return {
    // Propiedades
    events,
    activeEvent,
    hasEventSelected : !!activeEvent,

    // Metodos
    setActiveEvent,
    startSavingEvent,
    startDeleingEvent
  }
}
