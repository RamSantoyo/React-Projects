//metodo map

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const maped = arr.map((item) => item * 2);

const users = [{ name: "John", age: 34 }, { name: "Jane", age: 32 }, { name: "Jack", age: 40 }];

const mapusarios = users.map((item) => `<h1>${item.name}</h1>`);

console.log(mapusarios);
