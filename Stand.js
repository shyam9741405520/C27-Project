class Stand{
constructor(x,y,width,height){
     var Options={
        isStatic : true
    }
    this.body=Bodies.rectangle(x,y,width,height,Options)
    World.add(world,this.body)
    this.x=x
    this.y=y
    this.height=height
    this.width=width
}
display(){
    var pos = this.body.position
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
}
}