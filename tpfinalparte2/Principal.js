  class Juego {
  constructor() {
   
    this.estado="inicio";
    this.escenarios = new Escenarios();    
    this.margot = new Margot(this.escenarios.piso1.y);
    this.puerta = this.escenarios.puerta;
    this.cantidadCajas = 12;
    this.cajas = [];
  
   for (let i = 0; i < this.cantidadCajas; i++) {
      this.cajas[i] = new Caja(random(10, width - 10), -i * 50);
    }
  }
  
mostrar() {    
 if (this.estado ==="inicio"){
    this.pantallaInicio();
    }else if (this.estado ==="jugando"){
      this.pantallaJugando();
    }else if (this.estado ==="creditos"){
      this.pantallaCreditos();
   }else if (this.estado ==="perdido"){
      this.pantallaPerdido();
   }
}
 

/*pantalla de inicio*/
pantallaInicio() {

  fill(255, 224, 254, 100);
  rect(0, 0, width, height);
  
 
  fill(242, 288, 120);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("El Escape de Margot", width / 2, 100);
  
 
  fill(12, 19, 31);
  textSize(20);
  text("Instrucciones:\n\n" +
       "Margot se encuentra encerrada dentro del ropero.\n" +
       "Debe atravesar los estantes y escaleras hasta llegar a la puerta.\n" +
       "Necesita esquivar obstáculos y llegar con vida para ganar", width / 2, 350); 
}
/*pantalla de juego*/
 
 pantallaJugando(){

 this.imagenFondo.dibujar();
  this.escenarios.mostrar();
    
   for (let i = 0; i < this.cajas.length; i++) {
      this.cajas[i].mover();
      this.cajas[i].mostrar();
   }
  this.chocar();
  this.margot.mostrar ();
  this.vidas.mostrar ();
  
  this.ganarJuego();
  this.perderJuego();  
    }
/*lógicas de juego*/
/*colisión AABB*/
chocar() { 
  for (let i = 0; i < this.cajas.length; i++) {
    if (this.margot.x < this.cajas[i].x + this.cajas[i].w &&
        this.margot.x + this.margot.w > this.cajas[i].x &&
        this.margot.y < this.cajas[i].y + this.cajas[i].h &&
        this.margot.y + this.margot.h > this.cajas[i].y) {
          /*REINICIA CAJAS*/
          this.cajas[i].y = -this.cajas[i].h;
          this.cajas[i].x = random(10, width - 10);
          /*pierde vidas*/
          this.margot.vida.perder();
    }
  }
} 
ganarJuego() {
  /*Colisión de Matgot con la puerta.- Colisión AABB*/
  if (this.margot.x + this.margot.w > this.puerta.x &&
      this.margot.x < this.puerta.x + this.puerta.w &&
      this.margot.y + this.margot.h > this.puerta.y &&
      this.margot.y < this.puerta.y + this.puerta.h) {
        this.estado = "creditos";
  }
}


perderJuego() {
  if (this.vidas.cantidad <= 0) {
    this.estado = "perdido";
  }
}
/*para reiniciar el juego, tener en cuenta:
-estado inicial del personaje, ubicación y construcción,
-el reinicio de las vidas
-la posición incial, en este caso de los obstáculos,
- y la pantalla en la que se inicia el juego*/

teclaPresionada(keyCode) {
  this.margot.teclaPresionada(keyCode);
}

/*pantalla de creditos*/

pantallaCreditos() {

  fill(200, 200, 254, 100);
  rect(0, 0, width, height);
  fill(242, 288, 150);
  textSize(30);
  textAlign(CENTER, CENTER);
  
 
  text("Trabajo Final Etapa 2 \n"+"Comisión 1, Docente: José Luis Bugiolachi,\n"+
       "Alumna: Karen Quevedo", width / 2, height / 2);
}

pantallaPerdido() {
  background(0);
  fill(216,147,224);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("¡Perdiste!", width / 2, height / 2);
}


/*para reiniciar el juego, tener en cuenta:
-estado inicial del personaje, ubicación y construcción,
-el reinicio de las vidas
-la posición incial, en este caso de los obstáculos,
- y la pantalla en la que se inicia el juego*/

reiniciar() {
  this.margot.x = width - this.margot.w - 10;
  this.margot.y = this.escenarios.piso1.y - this.margot.h;
  

  this.vidas.cantidad = 3; 

  for (let i = 0; i < this.cantidadCajas; i++) {
    this.cajas[i] = new Caja(random(10, width - 10), -i * 50);
  }
  
  
  this.estado = "inicio";
}
}
