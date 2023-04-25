
class Car {

    //Todo lo que se contiene dentro de estas llaves corresponde al plano del coche

    //Las propiedades van a entrar a través del constructor
    constructor(color, estampado, transmisión, velocidad, resistencia) {
        this.color = color;
        this.estampado = estampado;
        this.transmisión = transmisión;
        this.velocidad = velocidad;
        this.resistencia = resistencia;
        this.hp = 100;

    }

    //Métodos

    acelerar(){

        this.metros = this.metros + 20;

    };

    frenar(){

    };


};

let car1 = new Car("Gris","Liso",5,35,40);
let car2 = new Car("Morado","Llamas",7,45,30);
let car3 = new Car("Rojo","88",6,40,35);
let car4 = new Car("Verde","Llamas",8,50,25);