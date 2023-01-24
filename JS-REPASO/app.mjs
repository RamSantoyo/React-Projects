//tipos de variables en JS 
//var, let, const

var nombre = 'Juan';// var sirve para declarar variables globales

let apellido = 'Perez';// let sirve para declarar variables locales

const edad = 30;// const sirve para declarar variables constantes o fijas


function saludar(){
    console.log('Hola');
}

const saludar2 = () => {
    console.log('Hola');
}

const saludar3 = () => console.log('Hola');


const chancho = ['chancho1', 'chancho2', 'chancho3'];
const perro = {'nombre': 'Firulais', 'edad': 5};

export {perro, saludar3};
export default chancho;
