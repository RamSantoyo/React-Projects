const url = 'https://jsonplaceholder.typicode.com/users';

//peticion get con fetch
fetch(url)
    .then(response => response.json())
    .then(json => console.log(json));

//peticion post con fetch
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 123'
    },
    body: JSON.stringify({
        name: 'Juan',
        website: 'juan.com'
    })   
 })  


 //ejemplo con async await

async function getTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getTodos();

//metodo post con async await

async function postTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 123'
            },
            body: JSON.stringify({
                name: 'Juan',
                website: 'juan.com'
            })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

postTodos();