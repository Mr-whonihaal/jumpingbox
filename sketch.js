var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1=createSprite(100,580,100,20)
box1.shapeColor="red"
box2=createSprite(300,580,100,20)
box2.shapeColor="green"
box3=createSprite(500,580,100,20)
box3.shapeColor="blue"
box4=createSprite(700,580,100,20)
box4.shapeColor="orange"
ball=createSprite(50,200,50,50)

    //create box sprite and give velocity
ball.velocityX=6
ball.velocityY=12
}

function draw() {
    background(0);
    //create edgeSprite
edges=createEdgeSprites()
ball.bounceOff(edges)


    //add condition to check if box touching surface and make it box
if(ball.isTouching(box1)){
    ball.shapeColor="red"
}
if(ball.isTouching(box2)){
    ball.shapeColor="green"
}
if(ball.isTouching(box3)){
    ball.shapeColor="blue"
}
if(ball.isTouching(box4)){
    ball.shapeColor="orange"
}
    drawSprites()
}
