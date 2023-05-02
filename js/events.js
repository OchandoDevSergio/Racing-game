
class Event {

    //Propiedades de los eventos
    constructor(titulo, texto, distancia) {
        this.titulo = titulo;
        this.texto = texto;
        this.distancia = distancia;
    }

    //Métodos de los eventos

    sobornar(player){


    };

    recoger(player){


    };

    sortear(player){


    };

    boost(player){


    };


};

let controlPolicial = new Event("Control Policial", "Soborna a los agentes escribiendo ...", 0);
let autoestopista = new Event("Autoestopista", "Recoge al autoestopista y recupera vida", 0);
let obstaculo = new Event("Obstáculo", "Sortea el obstáculo en función de tu maniobrabilidad", 0);
let combustibleEspecial = new Event("Combustible especial", "Reposta escribiendo ...", 0);
