//VARIABLES

let player1;
let player2;
let selectionscript = document.getElementById("playerselectionscript");
let distanciaEvento = 250;

//FUNCIONES

const Pageselector = (numpage) => {
  //función para mostrar una página concreta y ocultar el resto estando todas en el mismo .html
  let arrPages = ["page1", "page2", "page3", "page4"];
  let goingPage = "page" + numpage;
  arrPages = arrPages.filter((val) => !goingPage.includes(val));
  document.getElementById(goingPage).style.display = "block";

  for (let i = 0; i < arrPages.length; i++) {
    document.getElementById(arrPages[i]).style.display = "none";
  }
};

const selectCar = (car) => {
  //función para la selección de personajes por parte de los jugadores
  if (!player1) {
    player1 = car;
    document.getElementById(player1.ref).onclick = null;
    document.getElementById(player1.ref).classList.add("grey");
    selectionscript.innerHTML = `Player1 ha seleccionado ${player1.name}`;
    return;
  }

  player2 = car;
  document.getElementById(player2.ref).onclick = null;
  document.getElementById(player2.ref).classList.add("grey");
  selectionscript.innerHTML += `<br> Player2 ha seleccionado ${player2.name}`;
  document.getElementById("car1").onclick = null;
  document.getElementById("car2").onclick = null;
  document.getElementById("car3").onclick = null;
  document.getElementById("car4").onclick = null;

  setTimeout(() => {
    Pageselector(3);

    buildRacingView();
  }, 1500);
};

const race = () => {
  //función para asignar de forma aleatoria quien acelera y tras ello comrpobar si hay un ganador
  let randomicer = Math.random() * 10;
  if (randomicer <= 5) {
    player1.acelerar(player1);
    checkEvents(player1, player2);
    checkWinner(player1);
  } else if (randomicer > 5) {
    player2.acelerar(player2);
    checkEvents(player2, player1);
    checkWinner(player2);
  }
};

const checkEvents = (player, playerOtro) => {
  //Función para introducir un evento cada 250m
  if (player.metros >= distanciaEvento) {
    distanciaEvento += 250;
    randomEvent(player, playerOtro);
  }
};

const randomEvent = (player, playerOtro) => {
  //Función para seleccionar qué eventos se introducen de forma aleatoria
  let randomNum = Math.random() * 10;
  if (randomNum > 9) {
    document.getElementById("steeringwheel").style.display = "none";
    document.getElementById("page3space2").classList.add("policia");
    controlPolicial.sobornar(player, playerOtro);
  } else if (randomNum < 9 && randomNum > 7) {
    document.getElementById("steeringwheel").style.display = "none";
    document.getElementById("page3space2").classList.add("gas");
    combustibleEspecial.boost(player);
  } else if (randomNum < 7 && randomNum > 4) {
    document.getElementById("steeringwheel").style.display = "none";
    document.getElementById("page3space2").classList.add("autoestopista");
    autoestopista.recoger(player);
  } else if (randomNum < 4) {
    document.getElementById("steeringwheel").style.display = "none";
    document.getElementById("page3space2").classList.add("obstaculo");
    obstaculo.sortear(player, playerOtro);
  }
};

const sobornarCheck = (player, playerOtro) => {
  //función auxiliar del evento controlPolicial
  let playerScript = "";
  const contadorpolicia = setTimeout(() => {
    winnerscript.innerHTML = `${playerOtro.name} ha ganado la carrera ¡felicidades!`;
    eventstate.innerHTML = `${player.name} ha sido detenido por la policía y descalificado.`;
    setTimeout(() => {
      document.getElementById("steeringwheel").style.display = "flex";
      document.getElementById("page3space2").classList.remove("policia"); //aunque ya no haría falta
      Pageselector(4);
    }, 3000);
  }, 5000);
  document.addEventListener("keypress", (event) => {
    playerScript += event.key;
    if (playerScript === "soborno") {
      clearTimeout(contadorpolicia);
      eventstate.innerHTML = `${player.name} se ha librado de una detención.`;
      backToRace("policia");
    }
  });
};

const gas = (player) => {
  //función auxiliar del evento combustibleEspecial
  let playerScript = "";
  const contadorgas = setTimeout(() => {
    eventstate.innerHTML = `${player.name} no ha podido repostar.`;
    backToRace("gas");
  }, 5000);
  document.addEventListener("keypress", (event) => {
    playerScript += event.key;
    if (playerScript === "gas") {
      player.velocidad += 25;
      actualizador();
      eventstate.innerHTML = `${player.name} ha repostado ganando velocidad.`;
      clearTimeout(contadorgas);
      backToRace("gas");
    }
  });
};

const actualizador = () => {
  //función para acturalizar los stats de los personajes
  document.getElementById("cardescription2").innerHTML = `Nombre: ${player2.name} <br>
  HP: ${player2.hp} Velocidad: ${player2.velocidad} Maniobrabilidad: ${player2.maniobrabilidad}<br>
  Metros recorridos: ${player2.metros} <br>`;
  document.getElementById("cardescription1").innerHTML = `Nombre: ${player1.name} <br>
  HP: ${player1.hp} Velocidad: ${player1.velocidad} Maniobrabilidad: ${player1.maniobrabilidad}<br>
  Metros recorridos: ${player1.metros} <br>`;
};

const backToRace = (classtoremove) => {
  //función para eliminar los cambios estéticos tras un evento
  setTimeout(() => {
    document.getElementById("steeringwheel").style.display = "flex";
    document.getElementById("page3space2").classList.remove(classtoremove);
    eventstate.innerHTML = `La carrera continua.`;
  }, 2000);
};

const checkWinner = (player) => {
  //comprobarmos si los metros recorridos son superiores o iguales a 2000...
  if (player.metros >= 2000) {
    winnerscript.innerHTML = `${player.name} ha ganado la carrera ¡felicidades!`;
    Pageselector(4);
  }
};

const hpCheck = (player, playerOtro) => {
  //función para comprobar si algún jugador queda eiminado por perder todos los HP
  if (player.hp <= 0) {
    winnerscript.innerHTML = `${playerOtro.name} ha ganado la carrera ¡felicidades!`;
    `${player.name} se ha averiado y pierde.`;
    setTimeout(() => {
      backToRace("obstaculo");
      Pageselector(4);
    }, 3000);
  }
};

const buildRacingView = () => {
  let page3 = document.getElementById("page3");
  //al emplear elementos que aparecerán después de generar la página incluimos todo el html de la page3
  //en el documento js después de haber introducido todo lo que necesitará
  page3.innerHTML = `<div class="centrar">            <div id="page3row1">
  <div class="carpic" id="carpicplayer1"></div>
  <div class="info" id="eventstate"></div>
  <div class="carpic" id="carpicplayer2"></div>
</div>
<div id="page3row2">
  <div class="carspace">
  <div class="cardescription" id="cardescription1">Nombre: ${player1.name} <br>
  HP: ${player1.hp} Velocidad: ${player1.velocidad} Maniobrabilidad: ${player1.maniobrabilidad}<br>
  Metros recorridos: ${player1.metros} <br></div></div>
  <div id="page3space2"></div>
  <div class="carspace">
  <div class="cardescription" id="cardescription2">Nombre: ${player2.name} <br>
  HP: ${player2.hp} Velocidad: ${player2.velocidad} Maniobrabilidad: ${player2.maniobrabilidad}<br>
  Metros recorridos: ${player2.metros} <br></div></div>
</div>
<div id="page3row3">
<div id="steeringwheel" onclick="race()"></div>
</div></div>`;
  eventstate.innerHTML = `¡Comienza la carrera!<br> Haz click en el volante para acelerar.`;
  document.getElementById("carpicplayer1").classList.add(player1.ref);
  document.getElementById("carpicplayer2").classList.add(player2.ref);
};
