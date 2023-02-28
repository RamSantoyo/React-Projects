import './App.css';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const App = () => {
  const [photos, setPhotos] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <Formik
        initialValues={{buscar : ''}}

        validate={values => {
          const errors = {};

          if (!values.buscar) {
            errors.buscar = 'Required';
          }

          return errors;
        }}

        onSubmit={async(values, { setSubmitting }) => {
          const searchQuery = values.buscar;
          const response = await 
          fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchQuery}`, {
            method: 'GET',
            headers: {
              'Authorization': 'Client-ID zXC58LR2buCcnBJxOvcbwD4by-Lu5lKajnB3Soy9KYA',
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          setPhotos(data.results);
          setSubmitting(false);// para que el botón no se quede deshabilitado
        }}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <h1>Buscador</h1>
              {values.buscar ? <p>{values.buscar}</p> : <p>Ingrese un valor</p>}
              <label htmlFor="buscar">Buscar</label>
              <Field type="text" name="buscar" />
              <ErrorMessage name="buscar" component="div" />

              <button type="submit" disabled={isSubmitting}>
                Buscar
              </button>                          
            </Form>
          )} 
        </Formik>              
      </header>
      {photos ? 
        <div className="photos">
          {photos.map((photo) => (
            <img src={photo.urls.small} alt={photo.alt_description} key={photo.id} />
          ))}
        </div> 
          : 
          ''
      }           
    </div>
  );
}

export default App;
