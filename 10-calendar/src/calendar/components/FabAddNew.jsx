import { useDispatch } from "react-redux"
import { useUiStore } from "../../hooks/useUiStore"
import { useCalendarStore } from "../../hooks/useCalendarStore"
import { addHours } from "date-fns"



export const FabAddNew = () => {

  const {openDateModal} = useUiStore()
  const { setActiveEvent } = useCalendarStore()

  // Cuando abrimos una nueva nota, creamnos un nuevo objeto que se lo mandamos al store, y abrimos el modal.
  const handdleOpenNewModal = () => {
    setActiveEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours( new Date(), 2),
      bgColor:'#fafafa',
      user: {
        _id: '1234',
        name: 'David'
      }
    })
    openDateModal()
  }

  return (
    <button
        onClick={handdleOpenNewModal}
        className="btn btn-primary fab"
    >
      <i className="fas fa-plus"></i>
    </button>
  )
}
