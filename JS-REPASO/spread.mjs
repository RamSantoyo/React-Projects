const unafuncion = (a,b,c) => console.log(a,b,c);

const args = [1,2,3];

unafuncion(...args); // se pasan todos los elementos del array como argumentos

const arr1 = [1,2,3];

const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2]; // se concatena los dos arrays

console.log(arr3);

const objt1 = {a:1, b:2, c:3};

const objt2 = {d:4, e:5, f:'hola'};

const objt3 = {...objt1, ...objt2}; // se concatena los dos objetos

console.log(objt3);