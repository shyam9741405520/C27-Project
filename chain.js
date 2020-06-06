class Chain{
    constructor(bodyA,bodyB){

        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            length:15,
            stiffness:0.04
    
        }

        this.chain =Constraint.create(options);
        World.add(world,this.chain);
            }
            display(){
                strokeWeight(10);
                line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
            
            
    
    }
    
}