const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//metodo filter

const r = arr.filter((item) => item % 2 === 0);

console.log(r);

//retornar los que sean diferentes de 2
const r2 = arr.filter((item) => item !== 2);

console.log(r2);

//recorrer indice y valor

const r3 = arr.map((item, index) => item+ ' ' + index);

console.log(r3);