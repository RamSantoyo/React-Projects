import style from 'styled-components';

const P = style.p`
font-size: 50px;
color: red;
`;

const Contenedor = style.div`
width: 100%;
max-width: 1200px;
margin: 0 auto;
padding: 20px;
box-sizing: border-box;
`;

const H1 = style.h1`
font-size: 50px;
color: red;
`;

const Buton = style.button`
background-color: ${props => props.active ? 'red' : 'white'};
color : ${props => props.active ? 'white' : 'black'};
padding: 1rem;
border: 1px solid ${props => props.active ? 'white' : 'black'};
border-radius: 5px;
font-size: 1rem;
font-weight: bold;
cursor: pointer;
transition: all 0.3s ease-in-out;
margin-right: 10px;
&:focus {
  outline: none;
}
&:hover {
  background-color: ${props => props.active ? 'white' : 'red'};
  color: ${props => props.active ? 'black' : 'white'};
  border: 1px solid ${props => props.active ? 'black' : 'white'};
}
`;

const Boton2 = style(Buton)`
width: 100%;
`;

const Link = ({className, ...props}) => {
  return <a className={className} {...props}>{props.children}</a>
}

const Enlace = style(Link)`
color: red;
`;

const Input = style.input.attrs(props => ({
  type: 'text',
  placeholder: 'Ingrese su nombre'
}))`
width: 100%;
padding: 1rem;
border: 1px solid black;
border-radius: 5px;
font-size: 1rem;
font-weight: bold;
margin-bottom: 10px;
`;

const Pass = style(Input).attrs(props => ({
  type: 'password',
  placeholder: 'Ingrese su contraseña'
}))``;

const App = () => {
  return (
    <Contenedor>
      <H1>Styled Components</H1>
      <P>Esto es un párrafo</P>
      <Buton active>Botón</Buton>
      <Buton>Botón</Buton>
      <Boton2>Botón</Boton2>
      <Boton2 active as="a" href="#">Botón</Boton2>
      <Link href="#">Link</Link>
      <Enlace href="#">Enlace</Enlace>
      <Input />
      <Pass />
    </Contenedor>
  );
}

export default App;
