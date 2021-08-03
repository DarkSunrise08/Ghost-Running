var ghost,ghostRunning;

function preload() {
ghostRunning = loadAnimation("ghost1.png","ghost2.png","ghost3.png");
}

function setup(){
createCanvas(400,400);
ghost = createSprite(200,200,150,150);
ghost.addAnimation("ghost running",ghostRunning);
}

function draw(){
background("black");
drawSprites();  
}