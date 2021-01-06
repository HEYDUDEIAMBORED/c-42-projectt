class Drop{
    constructor(x,y){
        var options ={
            isStatic:false,
            density: 1.2,
            friction: 0.5,
            restitution:0.8
        }
        this.body = Matter.Bodies.circle(x,y,5, options);
        
        World.add(world,this.body);
   
    }
    display(){
        var pos=this.body.position;
        
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        //angleMode(RADIANS);
        rotate(angle);

        ellipseMode(RADIUS);
        fill('blue')
        ellipse(0,0,5,5);
        pop();
    }
    update(){
        
        if (this.body.position.y>700){;Matter.Body.setPosition(this.body,{x:random(1,400),y:random(1,300)})}
        
    }
}