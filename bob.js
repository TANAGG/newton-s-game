class Bob{
    constructor(x,y,radius){
        var options={
            isStatic: false
            
        }

        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        fill("white")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        
    }
}