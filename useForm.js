import { useState } from "react";

export const useForm = ( inicialForm = {} ) => {

    const [formState, setformState] = useState( inicialForm );

{/* para hacer el cambio de cualquier imput*/}
    const onImputChanges = ({target}) => {
        const { name, value } = target
        setformState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setformState(inicialForm);
    }

  return {
    ...formState,
    formState,
    onImputChanges,
    onResetForm
  }
}
