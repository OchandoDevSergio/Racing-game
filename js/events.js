
class Event {

    //Propiedades de los eventos
    constructor(titulo, texto) {
        this.titulo = titulo;
        this.texto = texto;
    }

    //Métodos de los eventos

    sobornar(player, playerOtro){

    sobornarCheck(player, playerOtro);
    eventstate.innerHTML = `La policía ha parado a ${player.name} <br> ${controlPolicial.texto}`

    };

    recoger(player){
    eventstate.innerHTML = `${player.name} ha recogido a un autoestopista y ha ganado 100 HP`
    player.hp += 100;
    setTimeout(()=>{
        // document.getElementById("steeringwheel").onclick = race();
        document.getElementById("page3space2").classList.remove("autoestopista");
      },2000);
    console.log("autoestopista recogido")

    };

    sortear(player, playerOtro){
    let dificulty = Math.random() * 50;
    if (player.maniobrabilidad < dificulty) {
        player.hp -= parseInt(Math.random() * 100);
        hpCheck(player, playerOtro);
        eventstate.innerHTML = `${player.name} ha colisionado contra un obstáculo y perdido HP.`;
        setTimeout(()=>{
            // document.getElementById("steeringwheel").onclick = race();
            document.getElementById("page3space2").classList.remove("obstaculo");
          },2000);
        console.log("no lo ha sorteado");
    } else {
        eventstate.innerHTML = `${player.name} ha sorteado un obstáculo.`;
        setTimeout(()=>{
            // document.getElementById("steeringwheel").onclick = race();
            document.getElementById("page3space2").classList.remove("obstaculo");
          },2000);
    }

    };

    boost(player){
        gas(player);
        eventstate.innerHTML = `${player.name} ha encontrado un bidón de combustible especial<br> ${combustibleEspecial.texto}`
         console.log("gasolina")
    };


};

let controlPolicial = new Event("Control Policial", "Soborna a los agentes escribiendo soborno");
let autoestopista = new Event("Autoestopista", "Recoge al autoestopista y recupera vida");
let obstaculo = new Event("Obstáculo", "Sortea el obstáculo en función de tu maniobrabilidad");
let combustibleEspecial = new Event("Combustible especial", "Reposta escribiendo gas");
