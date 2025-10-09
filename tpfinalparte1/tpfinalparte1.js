//https://youtu.be/KhQ_lm-iySw
//Micaela Cardozo y Karen Quevedo
//comisión 1
let imagenes = [];
let frases = [];
let estado = "inicio";
let fondo, libro;
let tiempo = 0; 

let posXBoton, posYBoton, posXBoton2, posYBoton2, tamX, tamY;

function preload() {
  libro = loadSound('data/libro.mp3');
   fondo = loadSound('data/historia.mp3');
  for (let i = 0; i <= 17; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".jpg");
  }
}

function setup() {
  createCanvas(640, 480);
  fondo.amp(0.3);
  fondo.loop();
  
  
  textSize(20);
  narrativa();
  botonesdedesicion();
  
   
}

function draw() {
  background(0);
 ordendehistoria ();
}
