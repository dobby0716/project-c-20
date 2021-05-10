var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,600);

    //create 4 different surfaces
    block1=createSprite(80,590,150,10)
    block1.shapeColor="green"

    block2=createSprite(250,590,150,10)
    block2.shapeColor="red"

    block3=createSprite(420,590,150,10)
    block3.shapeColor="blue"

    block4=createSprite(600,590,150,10)
    block4.shapeColor="purple"



    //create box sprite and give velocity
    box=createSprite(80,80,20,20)
    box.shapeColor="white"
    box.velocityX=7
    box.velocityY=-4


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    box.bounceOff(edges)
    
    //add condition to check if box touching surface and make it box
    if(box.isTouching(block1)){
        box.shapeColor="green"
        box.bounceOff(block1)
    }

    if(box.isTouching(block2)){
        box.shapeColor="red"
        box.bounceOff(block2)
    }

    if(box.isTouching(block3)){
        box.shapeColor="blue"
        box.bounceOff(block3)
    }

    if(box.isTouching(block4)){
        box.shapeColor="purple"
        box.velocityX=0
        box.velocityY=0
    }
    drawSprites()
}
