/*https://youtu.be/4joIJ-zREUU
profesor no le pude encontrar el error al juego, le paso el 
código en el momento en el que el juego arrancaba para que vea mejor la idea
https://github.com/kar-noemi/practica/tree/etapa2
*/
let objPri;
let sonido;
let imagenFondo;

function preload(){
 sonido = loadSound ('data/musicaFondo.mp3');
  imagenFondo = loadImage ('data/fondo.jpg');
}

function setup() {
  createCanvas(640, 480);
  sonido.amp(0.2);
  sonido.loop();
  objPri = new Juego();
  
}

function draw() {
  background(220);
  image(imagenFondo,0,0)
  objPri.mostrar();
}

  
function keyPressed() {

 if (objPri.estado === "inicio" && key === ' ') {
    objPri.estado = "jugando"; 
 }
  else if (objPri.estado === "jugando") {
     objPri.teclaPresionada(keyCode);
   }
  if (objPri.estado === "jugando" && key === ' ') {
    objPri.estado = "creditos";
  }
  else if (objPri.estado === "creditos" && key === ' ') {
    objPri.estado = "perdido";
  }
}
function mousePressed (){
  sonido.play();
    
}
