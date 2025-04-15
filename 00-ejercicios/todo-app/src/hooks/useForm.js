import { useState } from "react"

export const useForm = (initialForm = {}) => {
  
const [formSate, setFormSate] = useState(initialForm)

  const onInputChange = ({target}) => {
    const { name, value } = target
    setFormSate(
      {
        ...formSate,
        [name] : value
      }
    )
  }

  const resetForm = () => {
    setFormSate(initialForm)
  }

  
  return {
    ...formSate,
    formSate,
    onInputChange,
    resetForm,
  }
}
