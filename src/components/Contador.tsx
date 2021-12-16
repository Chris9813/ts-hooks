import { useReducer } from "react";

const initState = {
    contador: 10,
}

type actionType = 
| { type: 'incrementar' }
| { type: 'decrementar' }
| { type: 'custom', payload: number }

const contadorReducer = ( state: typeof initState, action: actionType) => {

    switch(action.type) {

        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1,
            };
        
        case 'decrementar': 
            return{
                ...state,
                contador: state.contador - 1,
            }
        
            case 'custom': 
            return{
                ...state,
                contador: action.payload,
            }
        
        default:
        return state;
    }

}


export const Contador = () => {

    const [{contador}, dispatch] = useReducer(contadorReducer, initState)

    return (
        <div>
            <h1>Contador {contador}</h1>


            <button 
            onClick={() => dispatch({
                type: 'incrementar',
            })}
            className="btn btn-primary">+1</button>

        <button 
            onClick={() => dispatch({
                type: 'decrementar',
            })}
            className="btn btn-primary">-1</button>

        <button 
            onClick={() => dispatch({
                type: 'custom',
                payload: 100,
            })}
            className="btn btn-danger">100</button>

        </div>
    )
}
