


# Proyecto: Racing game.

https://ochandodevsergio.github.io/Racing-game/

#### Indice 

- [Descripción del proyecto :capital_abcd:](#descripción-del-proyecto)

- [Tecnologías empleadas :hammer:](#tecnologías-empleadas) 

- [Funcionamiento :arrow_forward:](#funcionamiento-de-la-página) 


- [Errores conocidos y prestaciones por desarrollar :no_entry:](#errores-conocidos-y-prestaciones-por-desarrollar)  

#


# Descripción del proyecto

El proyecto consiste en la elaboración de un juego de carreras con la finalidad de mejorar el manejo de DOM BOM y adquirir experiencia en el empleo de clases de JavaScript. Se requiere que todo el juego esté incluido en una única página .html, que habrá de contener: una pantalla de inicio, una pantalla de selección de personajes (coches), una pantalla de juego y una pantalla que muestre al ganador y nos permita regresar a la pantalla de inicio reseteando el juego.

# Tecnologías empleadas

HTML5
CSS3
JavaScript

### Funcionamiento de la página

  Al inciar el juego nos encontramos con la primera pantalla, la pantalla de incio del juego en la que simplemente tenemos un fondo y un botón que al clickar nos conduciría a la siguiente pantalla. 
  La técnica empleada para que estando todas las pantallas en una misma página .html sólo se muestre la pantalla pertinente, consiste en la introducción de 4 divs (page1-page4) en el mismo .html a los que una función (a la que hemos llamado Pageselector()) se encargará de asignar display = block, si es la pantalla que queremos mostrar o display = none de lo contrario.
  
  ![](https://i.ibb.co/5sDJWKB/page1.jpg)

  En la siguiente pantalla encontramos un cuadro de selección de los personajes en el que nos aparece una breve descripción y una imagen de los mismos. Clickando sobre las imágenes se activa una función que los asigna a los jugadores, dando paso al cambio a la siguiente página, unos instantes tras haber completado la selección.
  Los personajes que aparecen han sido introducidos en el juego como clases de JavaScript.
 
   ![](https://i.ibb.co/L1bBKYH/page2.jpg)

  En la siguiente pantalla, que sería la pantalla principal del juego, nos encontramos con las imágenes asociadas a los personajes seleccionados en la pantalla anterior, un cartel que nos indica el estado de la carrera y por último una imagen de un volante en el margen inferior. Cuando clickamos ese volante se inician una serie de funciones que dan lugar a que aumenten los metros recorridos por uno de los dos jugadores seleccionado aleatoriamente. 
  Cada 250 metros se inicia un evento que afecta al primero de los dos jugadores en haber alcanzado ese punto. Los eventos han sido introducidos también a través del empleo de clases de JavaScript, siendo situaciones que favorecen o perjudican la partida dle jugador. Algunos de ellos no requieren interacción por parte del jugador, pero otros sin embargo le pedirán introducir un string por teclado para ser superados con éxito. 
  Finalmente un jugador es determiando ganador cuando alcanza los 2000 metros recorridos o el adversario es descalificado, dando paso a la última pantalla.

   ![](https://i.ibb.co/kG3PdNR/page3.jpg)

  En la pantalla final simplemente encontramos un cartel que indica quien ha sido el personaje ganador y un botón que recarga la página .html, conduciendonos de nuevo a la primera pantalla para inciar una nueva partida si así lo deseamos.

   ![](https://i.ibb.co/DKWR56b/page4.jpg)

### Errores conocidos y prestaciones por desarrollar

Las página no es totalmente responsive en su diseño, lo que se tratará de implementar en un futuro si se dispone del tiempo necesario.

