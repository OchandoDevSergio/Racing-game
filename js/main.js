
//Variables de juego

let ganador = "";
let player1;
let player2;
let selectionscript = document.getElementById("playerselectionscript");

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
    document.getElementById(player1.name).onclick = null;
    document.getElementById(player1.name).classList.add("grey");
    selectionscript.innerHTML = `Player1=${player1.name}`
    return;
  }

  player2 = car;
  document.getElementById(player2.name).onclick = null;
  document.getElementById(player2.name).classList.add("grey");
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
  estampado: ${player1.estampado} <br> transmisión: ${player1.transmisión} <br>
   velocidad: ${player1.velocidad} <br>resistencia: ${player1.resistencia} <br></div>
  <div id="page3space2"></div>
  <div class="cardescription" id="cardescription2">color: ${player2.color} <br>
  estampado: ${player2.estampado} <br> transmisión: ${player2.transmisión} <br>
   velocidad: ${player2.velocidad} <br>resistencia: ${player2.resistencia} <br></div>
</div>
<div id="page3row3">
  <div id="steeringwheel"></div>
</div></div>`;
document.getElementById("carpicplayer1").classList.add(player1.name);
document.getElementById("carpicplayer2").classList.add(player2.name);
}

