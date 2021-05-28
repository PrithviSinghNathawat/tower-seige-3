class Player {
    constructor(x, y, radius){
      
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':3.0
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.polygon=loadImage('image/player.png');
    this.radius = radius;
    World.add(world,this.body)
    }
  
    display(){
      
    
    var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.polygon, 0,0,this.radius, this.radius);
          pop();
  
    
    }
  
  };