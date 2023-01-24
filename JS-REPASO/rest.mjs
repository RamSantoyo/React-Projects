const rest = (a, ...argumentos) => { // se accede al primer argumento y el resto se almacena en un array
    console.log(argumentos);
    console.log(a);
}

rest(1,2,3,4,5,6,7,8,9,10);

const objt1 = {
    a:1,
    b:2,
    c:3
}

const arr = [4,5,6];


//destructuracion de objetos

const {a, b, c} = objt1; // se extraen los valores del objeto y se almacenan en variables con el mismo nombre que los atributos del objeto

const [...arreglo] = arr; // se extraen los valores del array y se almacenan en variables con el mismo nombre que los atributos del array
console.log(a,b,c);
console.log(arreglo);