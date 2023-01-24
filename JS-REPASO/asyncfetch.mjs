//envio de informacion a una api con fetch

const url = 'https://jsonplaceholder.typicode.com/users';//url de la api

fetch(url, {
    methods: 'POST', // GET POST PUT DELETE
    headers: {
        'Content-Type': 'application/json', //como se envia la informacion
        'Accept': 'CLAVE O TOKEN'// credenciales de la api
    },

    body: JSON.stringify({//informacion que se envia
        name: 'Juan',
        website: 'juan.com'
    })
})

.then(resp => resp.json())//respuesta de la api
.then(console.log)//imprime la respuesta
.catch(console.log)//imprime el error


//envio de informacion a una api con axios

const url2 = 'https://jsonplaceholder.typicode.com/users';//url de la api

axios.post(url2, {
    name: 'Juan',
    website: 'juan.com'
}, {
    headers: {
        'Content-Type': 'application/json', //como se envia la informacion
        'Accept': 'CLAVE O TOKEN'//
    }
})
.then(resp => resp.json())//respuesta de la api
.then(console.log)//imprime la respuesta
.catch(console.log)//imprime el error


//consumo de informacion de una api con fetch

const url3 = 'https://jsonplaceholder.typicode.com/users';//url de la api

fetch(url3) 
.then(resp => resp.json())//respuesta de la api
.then(console.log)//imprime la respuesta


//consumo con fetch de una api 
const url4 = 'https://jsonplaceholder.typicode.com/users';

fetch(url4)
    .then(response => response.json())
    .then(json => console.log(json));


//consumo con async de una api

async function getTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}