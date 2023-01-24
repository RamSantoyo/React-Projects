import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

//const Li = ({ children, propiedad, parametro}) => {
//  return(
//    <li>{children} y {propiedad} y {parametro === true ? 'verdadero' : 'falso'}</li>
//  )
//}

//const X = () => (
//  <ul>
//    <Li
//    propiedad={'feliz'}
//    parametro= {true}
//    >1</Li>
//    <Li
//    propiedad={'triste'}
//    parametro= {false}
//    >2</Li>
//  </ul>
//);  

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();//sirve para medir el rendimiento de la app