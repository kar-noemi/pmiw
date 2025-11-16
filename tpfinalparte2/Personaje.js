class Vida {
  constructor() {
    this.cantidad = 3;
  }
  perder() {
    this.cantidad--;
    if (this.cantidad < 0) this.cantidad = 0;
  }
  mostrar(x, y) {
    fill(0);
    textSize(20);
    text("Vidas: " + this.cantidad, x, y);
  }}
class Margot {
  constructor(pisoY) {
    this.w = 30;
    this.h = 40;
    this.x = width - this.w - 10;
    this.y = pisoY - this.h; // margot sobre el piso
    this.vida = new Vida();
  }
 mostrar() {
    fill(0, 255, 0);
    rect(this.x, this.y, this.w, this.h);
    this.vida.mostrar(10, 30);
  }
moverDerecha() {
  this.x += 10; 
  if (this.x + this.w > width) this.x = width - this.w; 
}
  moverIzquierda() { 
  this.x -= 10; 
  if (this.x < 0) this.x = 0; 
}
 moverArriba (){
  this.y -= 10; 
  if (this.y + this.h > height) this.y = height - this.h; 
}
moverAbajo (){
   this.y += 10; 
  if (this.y + this.h > height) this.y = height - this.h; 
}

  teclaPresionada(keyCode) {
    if (keyCode === LEFT_ARROW)
    this.moverIzquierda();
    else if (keyCode === RIGHT_ARROW) 
    this.moverDerecha();
    else if (keyCode=== UP_ARROW)
    this.moverArriba();
    else if (keyCode=== DOWN_ARROW)
    this.moverAbajo();
   
  }
}
   
