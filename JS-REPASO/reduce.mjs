const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const red = arr.reduce((acc, item) => acc + item, 0);

const max = arr.reduce((acc, item) => Math.max(acc, item), 0);

console.log(red);
console.log(max);