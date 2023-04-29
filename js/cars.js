
class Car {

    //Todo lo que se contiene dentro de estas llaves corresponde al plano del coche

    //Las propiedades van a entrar a través del constructor
    constructor(name, color, estampado, metros, velocidad, resistencia) {
        this.name = name;
        this.color = color;
        this.estampado = estampado;
        this.metros = metros;
        this.velocidad = velocidad;
        this.resistencia = resistencia;
        this.hp = 100;

    }

    //Métodos

    acelerar(player){
        //   console.log("entra en acelerar", player);
        player.metros = this.metros + this.velocidad;

        document.getElementById("cardescription2").innerHTML= `color: ${player2.color} <br>
        estampado: ${player2.estampado} <br> metros recorridos: ${player2.metros} <br>
         velocidad: ${player2.velocidad} <br>resistencia: ${player2.resistencia} <br>`;

         document.getElementById("cardescription1").innerHTML= `color: ${player1.color} <br>
         estampado: ${player1.estampado} <br> metros recorridos: ${player1.metros} <br>
          velocidad: ${player1.velocidad} <br>resistencia: ${player1.resistencia} <br>`;
    };


};

let car1 = new Car("car1", "Gris","Liso",0,35,40);
let car2 = new Car("car2", "Morado","Llamas",0,45,30);
let car3 = new Car("car3", "Rojo","88",0,40,35);
let car4 = new Car("car4", "Verde","Llamas",0,50,25);
