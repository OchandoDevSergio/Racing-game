
class Car {

    //Todo lo que se contiene dentro de estas llaves corresponde al plano del coche

    //Las propiedades van a entrar a través del constructor
    constructor(color, estampado, vel_max ) {
        this.color = color;
        this.estampado = estampado;
        this.vel_max = vel_max;
        this.ruedas = 4;
        this.hp = 100;

    }

    //Métodos

    acelerar(){

        this.metros = this.metros + 20;

    };

    frenar(){

    };


};

let car1 = new Car("Gris","Liso",100);
let car2 = new Car("Morado","Llamas",120);
let car3 = new Car("Rojo","88",100);
let car4 = new Car("Verde","Llamas",110);