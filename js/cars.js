
class Car {

    //Todo lo que se contiene dentro de estas llaves corresponde al plano del coche

    //Las propiedades van a entrar a través del constructor
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
        //   console.log("entra en acelerar", player);
        player.metros = this.metros + this.velocidad + (parseInt(Math.random() * 10));
        actualizador();
        // document.getElementById("cardescription2").innerHTML= `Nombre: ${player2.name} <br>
        // HP: ${player2.hp} Velocidad: ${player2.velocidad} Maniobrabilidad: ${player2.maniobrabilidad}<br>
        // Metros recorridos: ${player2.metros} <br>`;

        //  document.getElementById("cardescription1").innerHTML= `Nombre: ${player1.name} <br>
        //  HP: ${player1.hp} Velocidad: ${player1.velocidad} Maniobrabilidad: ${player1.maniobrabilidad}<br>
        //  Metros recorridos: ${player1.metros} <br>`;
    };


};

let car1 = new Car("car1", "Chatarra Joe", 0, 35, 40);
let car2 = new Car("car2", "Purple Truck", 0, 45, 30);
let car3 = new Car("car3", "Johny el rojo", 0, 40, 35);
let car4 = new Car("car4", "Inferno", 0, 50, 25);
