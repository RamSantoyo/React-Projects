import React, { useRef, useState } from 'react';

const Form = () => {
//inicializamos el estado del formulario
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const fileRef = useRef();
  const areaRef = useRef();

  
//creamos una funcion que se ejecuta cuando se realiza un cambio en el input 
const [values, setValues] = useState(''); //inicializamos el estado del input
const validacion = (e) => {
  setValues(e.target.value);
}

//creamos una funcion que se ejecuta cuando se envia el formulario
  const handleSubmit = (event) => { 
    event.preventDefault();//evitamos que se recargue la pagina
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      file: fileRef.current.value,
      message: areaRef.current.value
    };
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" ref={nameRef} />
      <input type="email" placeholder="Email" ref={emailRef} />
      {values.length < 8 ? <p>La contraseña debe tener al menos 8 caracteres</p> : null}
      <input 
      type="password" 
      placeholder="Password" 
      ref={passwordRef} 
      value={values} 
      onChange={validacion} />      
      <input type="file" placeholder="File" ref={fileRef} />
      <textarea placeholder="Message"  ref={areaRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
