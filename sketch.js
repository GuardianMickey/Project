var box,ground,slingshot;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  

block8 = new Block (330,235,30,40);

block9 = new Block (360,235,30,40);

block10 = new Block(390,235,30,40);

block11 = new Block(420,235,30,40); block12 = new Block(450,235,30,40);



block13 = new Block(360, 195,30,40);

block14 = new Block(390,195,30,40); block15 = new Block(420, 195,30,40);



block16 = new Block (390, 155,30,40);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}