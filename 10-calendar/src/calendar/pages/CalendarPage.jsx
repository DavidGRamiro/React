import { NavBar } from "../components/NavBar"
import { Calendar } from 'react-big-calendar'
import  'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours } from 'date-fns'
import { localizer } from "../../helpers/calendarLocalizer"
import { getMessagesES } from "../../helpers/getMessages"
import { CalendarEvent } from "../components/CalendarEvent"
import { useState } from "react"
import { CalendarModal } from "../components/CalendarModal"
import { useUiStore } from "../../hooks/useUiStore"
import { useCalendarStore } from "../../hooks/useCalendarStore"
import { FabAddNew } from "../components/FabAddNew"
import { FabDelete } from "../components/FabDelete"


export const CalendarPage = () => {

  const [lastView, setLasrView] = useState(localStorage.getItem('lastView') || 'week')
  const { openDateModal } = useUiStore()
  const { events, setActiveEvent } = useCalendarStore()

  // Esta función esta asociada a los eventos del calendario para obtener los estilos y personalizarlo
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor : '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
    return {style}
  }

  // Funcion para mostar un modal al hacer docle click
  const onDoubleClick = (event) => {
    openDateModal()
  }

  // Funcion al selecionar una nota
  const onSelect = (event) => {
    setActiveEvent( event )
  }

  // Evento en el cambio de visualizacion de nuestro calendario, al recargar, se queda en la ultima pagina visitada.
  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event)
  }

  return (
    <>
      <NavBar />
      
      {/* Big calendar */}
      <Calendar
        localizer={localizer}
        events={events}
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px)' }}
        culture="es"
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />

      <CalendarModal />

      <FabAddNew />
      <FabDelete />

    </>
  )
}
