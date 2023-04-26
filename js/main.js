
//Variables de juego

let ganador = "";
let player1;
let player2;
let nameCarPlayer1;
let nameCarPlayer2;

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
    nameCarPlayer1 = car.name;
    return;
  }

  player2 = car;
  nameCarPlayer2 = car.name;
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
  },500);


}


const buildRacingView = () => {

  let page3 = document.getElementById("page3");

  page3.innerHTML = `<div class="centrar"><div id="page3row1"><div class="carpic" id="carpicplayer1"></div>
  <div id="page3spacebetween"></div><div class="carpic" id="carpicplayer2"></div>
</div></div>`;
document.getElementById("carpicplayer1").classList.add(nameCarPlayer1);
document.getElementById("carpicplayer2").classList.add(nameCarPlayer2);
}