class Chain{
    constructor(A,B){
     var   cproperties={
            bodyA:  A ,
            bodyB:  B ,
            length: 10   ,
            stiffness: 0.4  
        }
    
    
    this.link=Constraint.create(cproperties);
    
    World.add(world,this.link);
    }


    display(){


        strokeWeight(3);
line (this.link.bodyA.position.x,this.link.bodyA.position.y,this.link.bodyB.position.x,this.link.bodyB.position.y);
    

  }
}