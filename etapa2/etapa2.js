let objPri;
let sonido;
let imagenFondo, puerta, margot, caja, escalera1;

function preload(){
 sonido = loadSound ('data/musicaFondo.mp3');  
  imagenFondo = loadImage ('data/fondo.jpg');
  puerta = loadImage ('data/puerta.Webp');
  margot = loadImage ('data/margot.Webp');
  caja = loadImage ('data/caja.Webp');
  escalera1 = loadImage ('data/escalera1.Webp');
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
}
function mousePressed (){
  sonido.play();
    
}
