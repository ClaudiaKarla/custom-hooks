import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

{/* podemos saber cuando estamos cargando,
 cuando hay cambios, aquí tenemos el control 
absoluto y también le podemos decir a nuestro 
computer cuando volverse  a redibujar.
con esto, nos creamos un useState
*/}

    const [state, setState] = useState({
     //vamos a poner la data, que es el producto
     //de nuestra petición, isLoading: que nos va a decir 
     //cuando estoy cargando(por defecto cuando se monta el
     //hook esta cargando.)
     //y si hay un error, que lo pondremos como un hasError
            data: null,
            isLoading: true,
            hasError: null,
    })

        const getFetch = async() => {

            setState({
                ...state,
                isLoading: true
            })

            const resp = await fetch(url);
            const data = await resp.json();

            setState({
                data,
                isLoading:false,
                hasError: null,
            })
        }

    useEffect(() => {
      getFetch();
    }, [url])
    
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  };
}
