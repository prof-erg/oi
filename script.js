let cor;
let posicaoHorizontal;
let posicaoVertical;

function setup() {
  createCanvas(400, 400);
  background(color(0,255,0));
  cor = color(random(0,255),random(0,255),random(0,255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
  
}

function draw() {
  circulo();
}

function circulo(){
  
  if(mouseIsPressed){
    fill(color(random(0,255),random(0,255),random(0,255)));
    circle(mouseX,mouseY,30)
  }
  
}
