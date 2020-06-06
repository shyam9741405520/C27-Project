class Ball{
    constructor(x,y,radius,angle)
    {
        var Options={
            isStatic : true
        }
       this.body=Bodies.circle(500,300,20,Options)
        World.add(world,this.body)
    }
    display()
    {
        var pos = this.body.position
        ellipse(pos.x,pos.y,100,100)
        
    }
    }       