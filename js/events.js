
class Event {

    //PROPIEDADES DE LOS EVENTOS

    constructor(titulo, texto) {
        this.titulo = titulo;
        this.texto = texto;
    }

    //MÉTODOS DE LOS EVENTOS

    sobornar(player, playerOtro){
    sobornarCheck(player, playerOtro);
    eventstate.innerHTML = `La policía ha parado a ${player.name} <br> ${controlPolicial.texto}`
    };

    recoger(player){
    eventstate.innerHTML = `${player.name} ha recogido a un autoestopista y ha ganado 100 HP`
    player.hp += 100;
    actualizador();
    backToRace("autoestopista");
    };

    sortear(player, playerOtro){
    let dificulty = Math.random() * 50;
    if (player.maniobrabilidad < dificulty) {
        player.hp -= parseInt(Math.random() * 100);
        actualizador();
        hpCheck(player, playerOtro);
        eventstate.innerHTML = `${player.name} ha colisionado contra un obstáculo y perdido HP.`;
        backToRace("obstaculo");
    } else {
        eventstate.innerHTML = `${player.name} ha sorteado un obstáculo.`;
        backToRace("obstaculo");
    }
    };

    boost(player){
        gas(player);
        eventstate.innerHTML = `${player.name} ha encontrado un bidón de combustible especial<br> ${combustibleEspecial.texto}`
    };

};
    //EVENTOS
    
let controlPolicial = new Event("Control Policial", "Soborna a los agentes escribiendo soborno");
let autoestopista = new Event("Autoestopista", "Recoge al autoestopista y recupera vida");
let obstaculo = new Event("Obstáculo", "Sortea el obstáculo en función de tu maniobrabilidad");
let combustibleEspecial = new Event("Combustible especial", "Reposta escribiendo gas");
