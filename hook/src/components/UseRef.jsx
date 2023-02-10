import { useRef } from "react";

const UseRef = () => {
    const inputRef = useRef();
    const divRef = useRef();

    const focus = () => {
        inputRef.current.focus();
    }

    const cambiarColor = () => {
        divRef.current.style.color = "red";
    }

    return (
        <div>
            <h1>UseRef</h1>
            <input type="text" ref={inputRef} />
            <button onClick={focus}>Focus</button>
            <div ref={divRef}>Hola</div>
            <button onClick={cambiarColor}>Cambiar color</button>
        </div>
    );
}

export default UseRef;