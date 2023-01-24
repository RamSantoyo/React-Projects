import './App.css';
import Boton from './Boton.js';

const Li = ({ children }) => <li style = {seleccion('red')} className='clase-li'>Soy lista y {children}</li>

const espacio = () => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '.5rem',
  justifyContent: 'space-between',
  listStyle: 'none',
  color: 'blue',
})

const seleccion = (colortxt) => ({
  color: colortxt,
  fontWeight: 'bold',
  cursor: 'pointer',
})

const objcss = {
  color: 'red',
}

const estado = true;
const arreglo = [
  'persona1',
  'persona2',
  'persona3'
];

const App = () => {
  
  if (estado) {
    return (
    <>
    <h1>Estoy en true</h1>
    {arreglo.map(item => <h1 key={item}>{item}</h1>)}
    </>
    );
  }

  return (
    <div className='div-app'>
      <header>
        <nav>
          <ul style={espacio()}>
            <li style = {seleccion('black')}>Home</li>
            <li style = {seleccion('black')}>About</li>
            <li style = {seleccion('black')}>Contact</li>
            <li style = {{...objcss}}>Login</li>
            <Li>estoy aqui</Li>
          </ul>
        </nav>    
      </header>
      <Boton onClick={(e) => alert('Me pincho :(', e)}>Click Me</Boton>              
    </div>
  );
}
//con e se puede acceder a los eventos del navegador
export default App;
