function sonidolibro() {
 libro.amp(0.2);
 libro.play();
}

function botonesdedesicion() {
 posXBoton = width / 18;
  posYBoton = height - height / 6;
  posXBoton2 = width - width / 3;
  posYBoton2 = height - height / 6;
  tamX = width / 4;
  tamY = height / 10;
}


//color del boton 
function boton(x, y, w, h, textoboton) {
  if (mousedentro(x, y, w, h)) fill(255, 145, 26);
  else fill(200, 120, 0, 100);
  rect(x, y, w, h, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  text(textoboton, x + w/2, y + h/2);
}

// ve si el mouse se encuentra dentro del boton
function mousedentro(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}


function mousePressed() {
  // no hay bifurcacion, es lineal
  if (estado === "inicio" && mousedentro(width/2 - tamX/2, posYBoton, tamX, tamY)) {
    estado = "E1";
    sonidolibro();
  }
  else if (estado === "E1" && mousedentro(width/2 - tamX/2, posYBoton, tamX, tamY)) {
    estado = "E2";
  sonidolibro();
  }
  else if (estado === "E2" && mousedentro(width/2 - tamX/2, posYBoton, tamX, tamY)) {
    estado = "E3";
     sonidolibro();
  }
  else if (estado === "E3" && mousedentro(width/2 - tamX/2, posYBoton, tamX, tamY)) {
    estado = "decisionsol";
     sonidolibro();
  }
  else if (estado === "E5" && mousedentro(width/2 - tamX/2, posYBoton, tamX, tamY)) {
    estado = "E6";
     sonidolibro();
  }
  else if (estado === "E6" && mousedentro(width/2 - tamX/2, posYBoton, tamX, tamY)) {
    estado = "inicio"; 
    sonidolibro();
    tiempo = frameCount; 
  }
  else if (estado === "E7" && mousedentro(width/2 - tamX/2, posYBoton, tamX, tamY)) {
    estado = "E8";
     sonidolibro();
  }
  else if (estado === "E8" && mousedentro(width/2 - tamX/2, posYBoton, tamX, tamY)) {
    estado = "decisionescape";
     sonidolibro();
  }
  else if (estado === "E10" && mousedentro(width/2 - tamX/2, posYBoton, tamX, tamY)) {
    estado = "E11";
     sonidolibro();
  }
  else if (estado === "E11" && mousedentro(width/2 - tamX/2, posYBoton, tamX, tamY)) {
    estado = "inicio"; 
     sonidolibro();
     tiempo = frameCount;
  }
  else if (estado === "E12" && mousedentro(width/2 - tamX/2, posYBoton, tamX, tamY)) {
    estado = "E13";
    sonidolibro();
  }
  else if (estado === "E13" && mousedentro(width/2 - tamX/2, posYBoton, tamX, tamY)) {
    estado = "inicio"; 
     sonidolibro();
     tiempo = frameCount;
  }
  else if (estado === "E14" && mousedentro(width/2 - tamX/2, posYBoton, tamX, tamY)) {
    estado = "E15";
     sonidolibro();
  }
  else if (estado === "E15" && mousedentro(width/2 - tamX/2, posYBoton, tamX, tamY)) {
    estado = "decisionfinal";
    sonidolibro();
  }
  else if (estado === "E17" && mousedentro(width/2 - tamX/2, posYBoton, tamX, tamY)) {
    estado = "inicio"; 
     sonidolibro();
     tiempo = frameCount;
  }

  // desición
 else if (estado === "decisionsol") {
  if (mousedentro(posXBoton, posYBoton, tamX, tamY)) {
    estado = "E5";
     sonidolibro();
  } else if (mousedentro(posXBoton2, posYBoton2, tamX, tamY)) {
    estado = "E7";
     sonidolibro();
  }
}

else if (estado === "decisionescape") {
  if (mousedentro(posXBoton, posYBoton, tamX, tamY)) {
    estado = "E14";
    sonidolibro();
  } else if (mousedentro(posXBoton2, posYBoton2, tamX, tamY)) {
    estado = "E10";
    sonidolibro();
  }
}

else if (estado === "decisionfinal") {
  if (mousedentro(posXBoton, posYBoton, tamX, tamY)) {
    estado = "E12";
     sonidolibro();
  } else if (mousedentro(posXBoton2, posYBoton2, tamX, tamY)) {
    estado = "E17";
     sonidolibro();
  }
 }
}
