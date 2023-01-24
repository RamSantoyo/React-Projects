const rectangulo = class {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return this.base * this.altura;
    }
}

class cuadrado {
    constructor(lado) {
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}

const cuadrado1 = new cuadrado(5);
console.log(cuadrado1.calcularArea());

const rectangulo1 = new rectangulo(5, 10);
console.log(rectangulo1.calcularArea());

