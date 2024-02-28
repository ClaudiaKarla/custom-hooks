import { useEffect ,useReducer } from "react";
import { todoReducer } from "./todoReducer";

const inicialState = [];

const init = () => {
    //si es nulo esto ||(entonces ||) vamos a regresar un string vacío
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer( todoReducer, inicialState, init );

    useEffect(() => {
        //con el localStorage, le decimos que guarde ahí, es 
        //un API que viene directamente de JavaScript
      localStorage.setItem('todos', JSON.stringify( todos )); 
    }, [ todos ])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }
        //dispatch, es la funcion que vamos a usar para 
        //mandar la action
        dispatch( action );
    }

    //para borrar
    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: 'Remove Todo',
            payload: id
        })
    } 

      //para con doble click se marque como realizado
      const handleToggleTodo = ( id ) => {
        dispatch({
            type: 'Marcar Toggle',
            payload: id
        })
    } 
    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo, 
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length,
     
    }

}