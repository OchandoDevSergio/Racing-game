
class Event {

    //Propiedades de los eventos
    constructor(titulo, texto) {
        this.titulo = titulo;
        this.texto = texto;
    }

    //Métodos de los eventos

    sobornar(player, playerOtro){
    let playerScript = "";
    eventstate.innerHTML = `La policía ha parado a ${player.name} <br> ${controlPolicial.texto}`
    document.addEventListener("keypress", (event) => {
        playerScript += event.key;
        const contador = setTimeout(()=>{
          ganador = playerOtro.name;
          eventstate.innerHTML = `${player.name} ha sido detenido por la policía y descalificado.`
         //poner que player ha sido detenido por la policía y descalificado
         setTimeout(()=>{

            Pageselector(4);
      
          },3000);
          
          },5000);
          sobornarCheck(playerScript, "soborno", player, contador);

          console.log("soborno")
    });

    };

    recoger(player){
    eventstate.innerHTML = `${player.name} ha recogido a un autoestopista y ha ganado 100 HP`
    player.hp += 100;
    console.log("autoestopista recogido")

    };

    sortear(player, playerOtro){
    let dificulty = Math.random() * 50;
    if (player.maniobrabilidad < dificulty) {
        player.hp -= parseInt(Math.random() * 100);
        hpCheck(player, playerOtro);
        eventstate.innerHTML = `${player.name} ha colisionado contra un obstáculo y perdido HP.`;
        console.log("no lo ha sorteado");
    } else {
        eventstate.innerHTML = `${player.name} ha sorteado un obstáculo.`;
    }

    };

    boost(player){
        let playerScript = "";
        eventstate.innerHTML = `${player.name} ha encontrado un bidón de combustible especial<br> ${combustibleEspecial.texto}`
        document.addEventListener("keypress", (event) => {
            playerScript += event.key;
            const contador = setTimeout(()=>{
              eventstate.innerHTML = `${player.name} no ha podido repostar.`
              },5000);
              boostCheck(playerScript, "gas", player, contador);
        });

        console.log("gasolina")

    };


};

let controlPolicial = new Event("Control Policial", "Soborna a los agentes escribiendo soborno");
let autoestopista = new Event("Autoestopista", "Recoge al autoestopista y recupera vida");
let obstaculo = new Event("Obstáculo", "Sortea el obstáculo en función de tu maniobrabilidad");
let combustibleEspecial = new Event("Combustible especial", "Reposta escribiendo gas");
