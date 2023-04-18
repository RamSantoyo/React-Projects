import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const App = () => {

  //resultado en usestate
  const [intereses, setIntereses] = useState(0);

  const calculadora = (cantidad, aporte, interes, tiempo) => {
    let total = cantidad;
       for (let i = 0; i < tiempo; i++) {
          total = (total + aporte) * (interes + 1);
       }      
      return Math.round(total);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Formik
        initialValues={{ cantidad: 0, aporte : 0, interes : 0, tiempo : 0 }}

        onSubmit={(values, { setSubmitting }) => { // esto es para que no se envie el formulario
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }
          , 400);

          // Aqui va la logica de la calculadora

          setIntereses(calculadora(values.cantidad, values.aporte, values.interes, values.tiempo));
        }}

        validate={values => {
          const errors = {};
          if (!values.cantidad) {
            errors.cantidad = 'Required';
          } else if (values.cantidad < 0) {
            errors.cantidad = 'Must be greater than 0';
          }
          if (!values.aporte) {
            errors.aporte = 'Required';
          } else if (values.aporte < 0) {
            errors.aporte = 'Must be greater than 0';
          }
          if (!values.interes) {
            errors.interes = 'Required';
          } else if (values.interes < 0) {
            errors.interes = 'Must be greater than 0';
          }
          if (!values.tiempo) {
            errors.tiempo = 'Required';
          } else if (values.tiempo < 0) {
            errors.tiempo = 'Must be greater than 0';
          }
          return errors;
        }}
        >{({ isSubmitting }) => (
          <Form>
            <label htmlFor="cantidad">Cantidad</label>
            <Field name="cantidad" type="number" />
            <ErrorMessage name="cantidad" component="div" />

            <label htmlFor="aporte">Aporte</label>
            <Field name="aporte" type="number" />
            <ErrorMessage name="aporte" component="div" />

            <label htmlFor="interes">Interes</label>
            <Field name="interes" type="number" />
            <ErrorMessage name="interes" component="div" />

            <label htmlFor="tiempo">Tiempo</label>
            <Field name="tiempo" type="number" />
            <ErrorMessage name="tiempo" component="div" />

            <button type="submit">Submit</button>

            <p>Resultado: {intereses}</p>
          </Form>
        )}
        </Formik>
      </header> 
    </div>
  );
}

export default App;
