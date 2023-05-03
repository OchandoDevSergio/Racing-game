//Variables de juego

let ganador = "";
let player1;
let player2;
let selectionscript = document.getElementById("playerselectionscript");
let arrEventos = [1, 0, 0, 0, 0, 0, 0, 0];

const Pageselector = (numpage) => {//función para mostrar una página concreta y ocultar el resto estando todas en el mismo .html
    let arrPages = ["page1", "page2", "page3", "page4"];
    let goingPage = "page" + numpage;
    arrPages = arrPages.filter (val => !goingPage.includes(val));
    document.getElementById(goingPage).style.display = "block";

    for (let i = 0; i < arrPages.length; i++) {
        document.getElementById(arrPages[i]).style.display = "none";
      }

}

const selectCar = (car) => {
  
  //Dado que si player1 es undefined, se puede representar con una exclamación
  //delante. Eso equivale a que no hemos escogido aun ningun elemento, por lo
  //tanto, el primero va al player1
  if(!player1){
    player1 = car;
    document.getElementById(player1.ref).onclick = null;
    document.getElementById(player1.ref).classList.add("grey");
    selectionscript.innerHTML = `Player1=${player1.name}`
    return;
  }

  player2 = car;
  document.getElementById(player2.ref).onclick = null;
  document.getElementById(player2.ref).classList.add("grey");
  selectionscript.innerHTML += `Player2=${player2.name}`
  document.getElementById("car1").onclick = null;
  document.getElementById("car2").onclick = null;
  document.getElementById("car3").onclick = null;
  document.getElementById("car4").onclick = null;

  //Si llegamos a este punto en el código, hemos escogido ya dos coches..uno
  //para el player1 y otro para el player2 ...

  setTimeout(()=>{

    console.log(player1, player2);
    Pageselector(3)

    buildRacingView();
  },1500);


}



const checkWinner = (player) => {

  //comprobarmos si carCheck sus metros recorr son superiores o iguales a 2000... 
  if (player.metros >= 2000) {
    ganador = player.name;
    Pageselector(4);
  }

};

const sobornarCheck = (combinacion, combinacionGanadora) => {

  if(combinacion === combinacionGanadora){
    clearTimeout(contador);
  }
};

const boostCheck = (combinacion, combinacionGanadora) => {

  if(combinacion === combinacionGanadora){
    player.velocidad += 25;
    //introducir texto player ha repostado ganando 25 de velocidad
    clearTimeout(contador);
  }
};

const hpCheck = (player, playerOtro) => {
  if (player.hp <=0) {
    ganador= playerOtro.name;
          //poner que player ha sido descalificado
    setTimeout(()=>{

      Pageselector(4);

    },3000);
  }
};

const race = () => {
  let randomicer = Math.random() * 10;
  // console.log("randomicer", randomicer);
  if (randomicer <= 5) {
    // console.log("entra1");
    player1.acelerar(player1);
    checkWinner(player1);
  } else if (randomicer > 5) {
    // console.log("entra2");
    player2.acelerar(player2);
    checkWinner(player2);
  }

  
}

const buildRacingView = () => {

  let page3 = document.getElementById("page3");
//al emplear elementos que aparecerán después de generar la página incluimos todo el html de la page3
//en el documento js después de haber introducido todo lo que necesitará
  page3.innerHTML = `<div class="centrar">            <div id="page3row1">
  <div class="carpic" id="carpicplayer1"></div>
  <div id="page3space1"></div>
  <div class="carpic" id="carpicplayer2"></div>
</div>
<div id="page3row2">
  <div class="cardescription" id="cardescription1">color: ${player1.color} <br>
  estampado: ${player1.estampado} <br> metros recorridos: ${player1.metros} <br>
   velocidad: ${player1.velocidad} <br>maniobrabilidad: ${player1.maniobrabilidad} <br></div>
  <div id="page3space2"></div>
  <div class="cardescription" id="cardescription2">color: ${player2.color} <br>
  estampado: ${player2.estampado} <br> metros recorridos: ${player2.metros} <br>
   velocidad: ${player2.velocidad} <br>maniobrabilidad: ${player2.maniobrabilidad} <br></div>
</div>
<div id="page3row3">
  <div id="steeringwheel" onclick="race()"></div>
</div></div>`;
document.getElementById("carpicplayer1").classList.add(player1.ref);
document.getElementById("carpicplayer2").classList.add(player2.ref);
}

//CIRCUITO
const checkEvents = (player, playerOtro) => {
if ((player.metros>= 250)&&(arrEventos[0]==1)) {
  arrEventos[0]=0;
  arrEventos[1]=1;
  obstaculo.sortear (player, playerOtro);
} else if ((player.metros>= 500)&&(arrEventos[1]==1)) {
  arrEventos[1]=0;
  arrEventos[2]=1;
  obstaculo.recoger (player);
} else if ((player.metros>= 750)&&(arrEventos[2]==1)) {
  arrEventos[2]=0;
  arrEventos[3]=1;
  obstaculo.sortear (player, playerOtro);
} else if 
}


