//creacion de objetos
let personas = [];


class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura

    personas.push(this);
  }
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  }
  soyAlto() {
    return this.altura > 1.8
  }
  
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}

class niño {
  nombre = 'Sacha'
  #hambre = false //privado y se puede acceder solamente por la misma clase
  static altura = 1.72 //statico y se puede acceder sin instanciar la clase

  constructor(estado){
    this.estado = estado
  }

  hablar(){
    console.log(`Hola, me llamo ${this.nombre} y estoy ${this.estado} y estoy ${this.#hambre == true ? 'con hambre' : 'sin hambre'}`)
  }

 

 static getPrivado(){
    console.log(`La altura es ${this.altura}`)
  }
  
}

let sacha = new Persona('Sacha', 'Lifszyc', 1.72)
let erika = new Persona('Erika', 'Luna', 1.65)

let arturo = new Desarrollador('Arturo', 'Martinez', 1.89)



const niño1 = new niño('feliz')
niño1.hablar();


niño.getPrivado();

sacha.saludar();
arturo.saludar();
//console.log(personas);

console.log(personas);

      
