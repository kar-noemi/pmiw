class Vida {
  constructor() {
    this.cantidad = 5;
  }
  perder() {
    this.cantidad--;
    if (this.cantidad > 5) {this.cantidad = 0;}
  }
  mostrar(x, y) {
    fill(255);
    textSize(20);
    text("Vidas: " + this.cantidad, 50, 50);
  }}
class Margot {
  constructor(pisoY) {
    this.w = 50;
    this.h = 50;
    this.x = width - this.w - 10;
    this.y = pisoY - this.h; // margot sobre el piso
    this.vida = new Vida();
  }
 mostrar() {
    fill(0, 255, 0);
    image(margot,this.x, this.y, this.w, this.h);
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
  perderVida() {
    this.vida.perder();
  }
}
   
