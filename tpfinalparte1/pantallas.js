function ordendehistoria () {
  // muestra la imagen, texto y botones segun donde estamos
  if (estado === "inicio") {
    image(imagenes[0], 0, 0, width, height);
     if (frameCount - tiempo > 120) { //para que el botón tarde en aparecer siempre en la pantalla de inicio
    boton(width/2 - tamX/2, posYBoton, tamX, tamY, "Comenzar");
  } 
 } 
  else if (estado === "E1") {
    image(imagenes[1], 0, 0, width, height);
    mostrartexto(0);
    boton(width/2 - tamX/2, posYBoton, tamX, tamY, "Siguiente");
  } 
  else if (estado === "E2") {
    image(imagenes[2], 0, 0, width, height);
    mostrartexto(1);
    boton(width/2 - tamX/2, posYBoton, tamX, tamY, "Siguiente");
  } 
  else if (estado === "E3") {
    image(imagenes[3], 0, 0, width, height);
    mostrartexto(2);
    boton(width/2 - tamX/2, posYBoton, tamX, tamY, "Siguiente");
  } 
  else if (estado === "decisionsol") {
    image(imagenes[4], 0, 0, width, height);
    mostrartexto(3);
    boton(posXBoton, posYBoton, tamX, tamY, "No habla del sol");
    boton(posXBoton2, posYBoton2, tamX, tamY, "Habla del sol");
  } 
  else if (estado === "E5") {
    image(imagenes[5], 0, 0, width, height);
    mostrartexto(4);
    boton(width/2 - tamX/2, posYBoton, tamX, tamY, "Siguiente");
  } 
  else if (estado === "E6") {
    image(imagenes[6], 0, 0, width, height);
    mostrartexto(5);
    boton(width/2 - tamX/2, posYBoton, tamX, tamY, "Reiniciar");
  } 
  else if (estado === "E7") {
    image(imagenes[7], 0, 0, width, height);
    mostrartexto(6);
    boton(width/2 - tamX/2, posYBoton, tamX, tamY, "Siguiente");
  } 
  else if (estado === "E8") {
    image(imagenes[8], 0, 0, width, height);
    mostrartexto(7);
    boton(width/2 - tamX/2, posYBoton, tamX, tamY, "Siguiente");
  } 
  else if (estado === "decisionescape") {
    image(imagenes[9], 0, 0, width, height);
    mostrartexto(8);
    boton(posXBoton, posYBoton, tamX, tamY, "No logra escapar");
    boton(posXBoton2, posYBoton2, tamX, tamY, "Logra escapar");
  } 
  else if (estado === "E10") {
    image(imagenes[10], 0, 0, width, height);
    mostrartexto(9);
    boton(width/2 - tamX/2, posYBoton, tamX, tamY, "Siguiente");
  } 
  else if (estado === "E11") {
    image(imagenes[11], 0, 0, width, height);
    mostrartexto(10);
    boton(width/2 - tamX/2, posYBoton, tamX, tamY, "Reiniciar");
  } 
  else if (estado === "E12") {
    image(imagenes[12], 0, 0, width, height);
    mostrartexto(11);
    boton(width/2 - tamX/2, posYBoton, tamX, tamY, "Siguiente");
  } 
  else if (estado === "E13") {
    image(imagenes[13], 0, 0, width, height);
    mostrartexto(12);
    boton(width/2 - tamX/2, posYBoton, tamX, tamY, "Reiniciar");
  } 
  else if (estado === "E14") {
    image(imagenes[14], 0, 0, width, height);
    mostrartexto(13);
    boton(width/2 - tamX/2, posYBoton, tamX, tamY, "Siguiente");
  } 
  else if (estado === "E15") {
    image(imagenes[15], 0, 0, width, height);
    mostrartexto(14);
    boton(width/2 - tamX/2, posYBoton, tamX, tamY, "Siguiente");
  } 
  else if (estado === "decisionfinal") {
    image(imagenes[16], 0, 0, width, height);
    mostrartexto(15);
    boton(posXBoton, posYBoton, tamX, tamY, "No logra ver el sol");
    boton(posXBoton2, posYBoton2, tamX, tamY, "Logra ver el sol");
  } 
  else if (estado === "E17") {
    image(imagenes[17], 0, 0, width, height);
    mostrartexto(16);
    boton(width/2 - tamX/2, posYBoton, tamX, tamY, "Reiniciar");
  }
}
