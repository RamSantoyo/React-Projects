import { useReducer } from "react";

const inicial = 0;
const fijo = 100;

const reduce = (state, action) => {
    switch (action.type) {
        case "incrementar":
            return state + 1;
        case "decrementar":
            return state - 1;
        case "reset":
            return 0;
        case "set":
            return action.payload;
        default:
            return state;                        
    }
}

const UseReduce = () => {
    const [state, dispatch] = useReducer(reduce, inicial);

    return (
        <div>
            <h1>UseReduce</h1>
            <p>Contador: {state}</p>
            <button onClick={() => dispatch({ type: "incrementar" })}>Incrementar</button>
            <button onClick={() => dispatch({ type: "decrementar" })}>Decrementar</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <button onClick={() => dispatch({ type: "set", payload: fijo })}>Set</button>
        </div>
    );
}

export default UseReduce;