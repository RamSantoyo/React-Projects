import React, { useRef } from "react";

const Form = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const fileRef = useRef();
  const areaRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
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
      <input type="password" placeholder="Password" ref={passwordRef} />
      <input type="file" placeholder="File" ref={fileRef} />
      <textarea placeholder="Message"  ref={areaRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
