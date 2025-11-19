class Piso {
  constructor(y){
  this.y = y; 
  this.h = 10; 
} 
  mostrar() { 
  fill(100); 
  rect(0, this.y, width, this.h); 
 }}
class Escalera {
  constructor(x, pisoInferiorY, pisoSuperiorY) {
    this.x = x;
    this.w = 30;
    this.y = pisoSuperiorY;
    this.h = pisoInferiorY - pisoSuperiorY;
  }
  mostrar() { 
  fill(150, 75, 0);
rect(this.x, this.y, this.w, this.h); 
 }}
class Puerta {
  constructor(x, pisoSuperiorY) {
    this.x = x;
    this.y = pisoSuperiorY - 60;
    this.w = 40;
    this.h = 60;
  }
  mostrar() { 
  fill(0, 0, 255); 
image(puerta, this.x, this.y, this.w, this.h); 
 }}
class Escenarios {
  constructor() {  
    this.piso1 = new Piso(420);
    this.piso2 = new Piso(320);
    this.piso3 = new Piso(220);
    this.piso4 = new Piso(120);
  
    this.escalera1 = new Escalera(10, this.piso1.y, this.piso2.y);
    this.escalera2 = new Escalera(width - 40, this.piso2.y, this.piso3.y);
    this.escalera3 = new Escalera(10, this.piso3.y, this.piso4.y);
    this.puerta = new Puerta(width - 60, this.piso4.y);
  }
  mostrar() {  
    this.piso1.mostrar();
    this.piso2.mostrar();
    this.piso3.mostrar();
    this.piso4.mostrar();
  
    this.escalera1.mostrar();
    this.escalera2.mostrar();
    this.escalera3.mostrar();
  

    this.puerta.mostrar();
  }}
