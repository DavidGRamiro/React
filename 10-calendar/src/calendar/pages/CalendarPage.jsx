import { NavBar } from "../components/NavBar"
import { Calendar } from 'react-big-calendar'
import  'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours } from 'date-fns'
import { localizer } from "../../helpers/calendarLocalizer"
import { getMessagesES } from "../../helpers/getMessages"
import { CalendarEvent } from "../components/CalendarEvent"
import { useState } from "react"
import { CalendarModal } from "../components/CalendarModal"


const events = [{
  title: 'Cumple del jefe',
  notes: 'Comprar la tarta',
  start: new Date(),
  end: addHours( new Date(), 2),
  bgColor: '#fafafa',
  user : {
    _id:'1234',
    name: 'David'
  }
}]


export const CalendarPage = () => {

  const [lastView, setLasrView] = useState(localStorage.getItem('lastView') || 'week')

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
    console.log('Doucle click',event)
  }

  // Funcion al selecionar una nota
  const onSelect = (event) => {
    console.log('Click', event);
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

    </>
  )
}
