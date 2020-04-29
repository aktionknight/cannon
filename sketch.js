const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
ball1 = new Ball();
ground = new Ground(200,390,1200,30)
cannon = new Cannon(180,350,50,50)


}

function draw(){
    background(0);
    Engine.update(engine);
 
 ground.display();
 cannon.display();

 if (keyCode===32){
ball1.display();


 }


 
}