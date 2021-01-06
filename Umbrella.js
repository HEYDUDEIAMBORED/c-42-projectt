class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }

        this.body = Matter.Bodies.circle(x,y-500,100,options);
        
        World.add(world,this.body);
        this.image=loadImage('walking_1.png')
    }
    display(){
        var pos=this.body.position;
        
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);

        ellipseMode(RADIUS);
        ellipse(0,0,5,10);
        pop();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 300,300);
    }
}