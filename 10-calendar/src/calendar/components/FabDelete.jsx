import { addHours } from "date-fns"
import { useCalendarStore } from "../../hooks/useCalendarStore"



export const FabDelete = () => {

  const {  startDeleingEvent , hasEventSelected } = useCalendarStore()
 
  const handdleDelete = () => {
    deleteEvent()
  }
  

  return (
    <button
        style={{ display: hasEventSelected ? '' : 'none' }}
        onClick={startDeleingEvent}
        className="btn btn-danger fab-danger"
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  )
}
