
class Car {

    //Todo lo que se contiene dentro de estas llaves corresponde al plano del coche

    //Las propiedades van a entrar a través del constructor
    constructor(marca, modelo, vel_max, modo_conduccion ) {
        this.marca = marca;
        this.modelo = modelo;
        this.vel_max = vel_max;
        this.modo_conduccion = modo_conduccion;
        this.ruedas = 4;
        this.damage = 0;
        this.metros = 0;

    }

    //Métodos

    acelerar(){

        this.metros = this.metros + 20;

    };

    frenar(){

    };


};

let car1 = new Car("Ford","Fiesta",5,"automatico");
let car2 = new Car("Mercedes","A",2,"manual");