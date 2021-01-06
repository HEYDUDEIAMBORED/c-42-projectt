var world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
var drops=[]
var ground;
var maxDrops=100;
var umbrella,dropsG;
var lightning,lightning1,lightning2,lightning3,lightning4;

function preload(){
    lightning1=loadImage("light1.png")
    lightning2=loadImage("light2.png")
    lightning3=loadImage("light3.png")
    lightning4=loadImage("light4.png")
    
}

function setup(){
   createCanvas(400,700)
   engine = Engine.create();
	world = engine.world;
    //ground=new Ground(200,height,400,10)
    umbrella=new Umbrella(200,1000)
    if (frameCount%30===0){
        for (var k=0;k<maxDrops;k++ ){
        
            drops.push(new Drop(random(1,400),random(1,50)))
        }
    }
   
    var render = Render.create({ element: document.body, engine: engine, options: { width: 800, height: 700, wireframes: false } });
  Render.run(render)

}

function draw(){
    background(0)
    Engine.update(engine)
    for (var k=0;k<drops.length;k++ ){
        
       
        drops[k].display()
        drops[k].update()
        
    }
    
  
    umbrella.display()
   // drops.update()
    callLightning()
    
    drawSprites()
}   
function callLightning(){
    
   
    
    if (frameCount%60===0){
        lightning=createSprite(random(50,350),50,20,20)
        var rand=Math.round(random(1,4))
        switch(rand){
       
            case 1:lightning.addImage(lightning4)
            break;
            case 2:lightning.addImage(lightning3)
            break;
            case 3:lightning.addImage(lightning2)
            break;
            case 4:lightning.addImage(lightning1)
            break;
            default: break;
        }
        lightning.lifetime=1
    }
    
    
}

