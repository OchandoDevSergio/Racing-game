
class Car {

    constructor(ref, name, metros, velocidad, maniobrabilidad) {
        this.ref = ref;
        this.name = name;
        this.metros = metros;
        this.velocidad = velocidad;
        this.maniobrabilidad = maniobrabilidad;
        this.hp = 100;

    }

    //Métodos

    acelerar(player){
        player.metros = this.metros + this.velocidad + (parseInt(Math.random() * 10));
        actualizador();
    };


};
    //COCHES
    
let car1 = new Car("car1", "Chatarra Joe", 0, 35, 40);
let car2 = new Car("car2", "Purple Truck", 0, 45, 30);
let car3 = new Car("car3", "Johny el rojo", 0, 40, 35);
let car4 = new Car("car4", "Inferno", 0, 50, 25);
