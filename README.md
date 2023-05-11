


# Proyecto: Tic tac toe.


#### Indice 

- [Descripción del proyecto :capital_abcd:](#descripción-del-proyecto)

- [Tecnologías empleadas :hammer:](#tecnologías-empleadas) 

- [Funcionamiento :arrow_forward:](#funcionamiento-de-la-página) 


- [Errores conocidos y prestaciones por desarrollar :no_entry:](#errores-conocidos-y-prestaciones-por-desarrollar)  

#


# Descripción del proyecto

El proyecto consiste en la elaboración de un juego del tipo Tic tac toe (tres en raya), para dos jugadores. Se requiere que incluya: una página principal de inicio, una segunda página en la que se recoja el nombre d elos jugadores para indicarlo en el resto de la partida, la página del propio juego -donde se deberá representar el tablero e indicar tanto qué jugador está en posesión del turno cómo cuantos turnos han trancurrido de cada jugador- y por último la página que indique quién ha sido el ganador y nos permita iniciar una nueva partida.

# Tecnologías empleadas

HTML5
CSS3
JavaScript
Bootstrap


### Funcionamiento de la página

  La página inicia en un index.html que nos muestra una imagen de fondo de las dos facciones en pugna en el juego y nos permite a través de un link central dirigirnos a players.html.
  
  ![](https://i.ibb.co/2WRTW5q/indexttt.jpg)

  En players.html encontramos dos inputs en el centro de la página que nos piden que introduzcamos el nombre de los dos jugadores, el jugador de la facción de los depredadores y el jugador de la facción de los aliens. 
  A continuación encontramos bajo los imputs un botón que guarda la información introducida en los imputs en el sessionstorage y además con el mismo click nos dirige a game.html.
 
   ![](https://i.ibb.co/4mbmCWR/playersttt.jpg)

  En game.html encontramos, además de marcadores que indican de qué jugador es el turno (contando con un mecanismo para que sea aleatorio que facción dispone del primer turno) y de cuántos turnos ha dispuesto ya cada jugador, una representación del tablero de juego donde cada jugador marcará sus casillas. 
  Los marcadores nombran a cada jugador a través de los nombres que éstos han indicado en players.html, asignando los nombres "depredador" y "alien" en el caso de que se hayan dejado los imputs vacíos en players.html.
  El juego tiene una primera fase en la que cada jugador marca una casilla vacía en su turno asignándosela a su facción, pero en caso de no haber un ganador en el momento en que el segundo jugador haya marcado su tercera casilla, se pasaría a una segunda fase de juego. En la segunda fase de juego, cada jugador en su turno primero desmarca una de las casillas ya asignadas a su facción para en ese mismo turno y a continuación marcar cualquier casilla libre a su elección (incluso la que acaba de desmarcar), hasta que finalmente uno de los dos jugadores se declare ganador.
  Con la victoria automáticamente nos vemos conducidos a las páginas winneralien.html o winnerpredator.html.

   ![](https://i.ibb.co/CsKJBNJ/gamettt.jpg)

  En las páginas de los ganadores nos encontramos una imagen de fondo ilustrativa de la facción correspondiente a modo de recompensa, con un div en el que se indica el ganador y un botón que vacía el sessionstorage y nos conduce de nuevo a players.html para iniciar una nueva partida.

   ![](https://i.ibb.co/pJDJ0kn/predatorttt.jpg)
   ![](https://i.ibb.co/wBGT8zC/alienttt.jpg)

### Errores conocidos y prestaciones por desarrollar

Las páginas .html no son totalmente responsives en su diseño. 
Cuando en el juego se pasa de la primera fase en la que simplemente se marca una casilla, a la segunda en que se desmarca una casilla antes de marcar, hay que dar un click antes de que indique las instrucciones.
Todo ello se tratará de implementar y solucionar en un futuro si se dispone del tiempo necesario para ello.

