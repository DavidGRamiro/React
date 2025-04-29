import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  // isFormValid, emailvalid, passwordValid, displayNameValid

  const [formState, setFormState] = useState(initialForm);
	const [formValidation, setFormValidation] = useState({})

	// cada vez que cambie un input del formulario de registro, se dispara
	useEffect(() => {
		createValidatos()
	}, [formState])

	const isFormValid = useMemo (() => {
		
		for (const formValue of Object.keys(formValidation)) {
			if(formValidation[formValue] !== null ) return false
		}
		
		return true
	},[formValidation])
	

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

	const createValidatos = () => {
		const formCheckedValues = {}
		// Obtenemos todos los keys de nuestro objeto de validacion.
		for (const formField of Object.keys(formValidations)) {
			const [ fn, errorMessage ] = formValidations[formField]
			
			// Aqui estamos creando nuevas variables, que vamos a devolcer, como passwordValid, emailValid, displayNameValid
			formCheckedValues[`${formField}Valid`] = fn( formState[formField] ) ? null : errorMessage
			setFormValidation(formCheckedValues)
		}
	}




  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
		...formValidation,
		isFormValid
  };
};
