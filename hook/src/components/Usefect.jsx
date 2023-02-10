import { useState, useEffect } from "react";

//hook personalizado
const Usestate = (inicial) => {
    const [contador , setContador] = useState(inicial);

    const incrementar = () => {
        setContador(contador + 1);        
    }

    return [contador, incrementar];
}



const Micomponente2 = ({ nombre2 }) => {
    const [contador, incrementar] = Usestate(0);
    
//hook se ejecuta cuando se renderiza el componente o cuando cambia el estado de contador
    useEffect(() => {
        const intervalo = setInterval(() => {//se ejecuta cada segundo
            incrementar();
        }, 1000);
        return () => {
            clearInterval(intervalo);//limpia el intervalo
        }
      }, [contador, incrementar]);//cuando cambia el estado de contador se ejecuta el useEffect


    return (
        <div>
            <h1>Hola {nombre2}</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementar}>Incrementar</button>     
        </div>
    );
}

export default Micomponente2;