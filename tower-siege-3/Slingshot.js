class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            if(pointA.x<220){
                strokeWeight(5);
                stroke(48,22,8);
                line(pointA.x-20, pointA.y, pointB.x-15, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-5);
               
            }
            else{
            strokeWeight(2);
            stroke(48,22,8);
            line(pointA.x+20, pointA.y, pointB.x-15, pointB.y);
            line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-5);
            
            }
            
            pop();
        }


       

    }
    
}