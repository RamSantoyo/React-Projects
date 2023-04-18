import './App.css';
import { useState } from 'react';
import imagen from './img/buscar.jpg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import fetchPhotos from './State/API';

const App = () => {
  const [photos, setPhotos] = useState([]);

  const [cargando, setCarga] = useState(false);


  const handleSearch = async (searchQuery, setSubmitting) => {
    const photos = await fetchPhotos(searchQuery);
    setPhotos(photos);
    setSubmitting(false);// sirve para que el boton no se quede cargando
  }

  return (
    <div>
      <header>
        <Formik
          initialValues={{ buscar: '' }}
          validate={values => {
            const errors = {};

            if (!values.buscar) {
              errors.buscar = 'Required';
            }

            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            await handleSearch(values.buscar, setSubmitting);
            setTimeout(() => {
              setCarga(true);                            
            }, 1000);
            setCarga(false);                          
          }}
        >
          {({ isSubmitting, values }) => (
            <Form className="buscador-head">
              <h1>Buscador</h1>
              <div className="contenedor-buscar">              
                <label htmlFor="buscar">Buscar</label>
                <Field type="text" name="buscar" className="inputbuscar"/>
                <ErrorMessage name="buscar" component="div" className="error"/>

                <button type="submit" disabled={isSubmitting} className="btn">
                  Buscar
                </button>
              </div> 
              {values.buscar ? <p>Categoria: {values.buscar}</p> : <p>Ingrese un valor</p>}                         
            </Form>
          )} 
        </Formik>              
      </header>
      <section className="contenedor">
        {photos.length === 0 ?
          <div className="imagen-ctn">
            <img src={imagen} alt="imagen" className="imagen"/>
          </div>
          :            
          cargando === true ?
            <div className="photos">
              {photos.map((photo) => (
                <img src={photo.urls.small} alt={photo.alt_description} key={photo.id} />
              ))}
            </div>
            :
            <div class="spinner-border center" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>              
        }        
      </section>             
    </div>
  );
}

export default App;
