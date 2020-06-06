const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var ball,stand,chain;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    stand=new Stand(500,40,90,50) 
    ball=new Ball(200,300,20,20)
    fill("orange") 
    chain =new Chain(ball.body,stand.body)

}

function draw(){
    background("green");
    Engine.update(engine);
   stand.display();
   ball.display();
   chain.display()

  if (keyCode===32) {
      ball.body.position.x=mouseX
      ball.body.position.y=mouseY 
    }
    console.log(ball.body.position)
    if (keyCode===13) {
        ball.x=200
        ball.y=300
         }
}