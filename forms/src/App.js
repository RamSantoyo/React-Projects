import Formulario from './components/formUXI';
import Titulo from './components/Titulo';
import './App.css';

function App() {
  return (
    <div className="container">
      <Titulo nombre="Sing In" />
      <div className="cnt-form">        
        <Formulario />
      </div>
    </div>
  );
}

export default App;
