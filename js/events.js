
class Event {

    //Propiedades de los eventos
    constructor(titulo, texto, distancia) {
        this.titulo = titulo;
        this.texto = texto;
        this.distancia = distancia;
    }

    //Métodos de los eventos

    sobornar(player, playerOtro){
    let playerScript = "";
    document.addEventListener("keypress", (event) => {
        playerScript += event.key;
        const contador = setTimeout(()=>{
          ganador = playerOtro.name;
         //poner que player ha sido detenido por la policía y descalificado
         setTimeout(()=>{

            Pageselector(4);
      
          },3000);
          
          },5000);
          sobornarCheck(playerScript, "soborno");
    });

    };

    recoger(player){
    player.hp += 100;

    };

    sortear(player, playerOtro){
    let dificulty = Math.random() * 50;
    if (player.maniobrabilidad < dificulty) {
        player.hp -= parseInt(Math.random() * 100);
        hpCheck(player, playerOtro);
    } else {
        //poner texto de player tal ha sorteado el obstáculo.
    }

    };

    boost(player){
        let playerScript = "";
        document.addEventListener("keypress", (event) => {
            playerScript += event.key;
            const contador = setTimeout(()=>{
             //poner que player no ha podido repostar
              },5000);
              boostCheck(playerScript, "gas");
        });

    };


};

let controlPolicial = new Event("Control Policial", "Soborna a los agentes escribiendo soborno", 0);
let autoestopista = new Event("Autoestopista", "Recoge al autoestopista y recupera vida", 0);
let obstaculo = new Event("Obstáculo", "Sortea el obstáculo en función de tu maniobrabilidad", 0);
let combustibleEspecial = new Event("Combustible especial", "Reposta escribiendo ...", 0);
