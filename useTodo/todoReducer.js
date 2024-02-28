export const todoReducer = ( inicialState = [], action ) => {

    switch ( action.type ) {
        case 'Add Todo':
            return[...inicialState, action.payload]

        //para eliminar cosas que ya sean registradas
        //tenemos que crear un nuevo case
        case 'Remove Todo':
            return inicialState.filter( todo => todo.id !== action.payload );
        
        case 'Marcar Toggle':
            return inicialState.map( todo => {
                if( todo.id === action.payload ){//id
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
        
        default:
            return inicialState;
    }
}