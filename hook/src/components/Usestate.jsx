import { useState } from "react";

//hook personalizado
const Usestate = (inicial) => {
    const [contador , setContador] = useState(inicial);

    const incrementar = () => {
        setContador(contador + 1);        
    }

    return [contador, incrementar];
}

const Micomponente = ({ nombre }) => {
    const [contador, incrementar] = Usestate(0);
    return (
        <div>
            <h1>Hola {nombre}</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementar}>Incrementar</button>     
        </div>
    );
}

export default Micomponente;