class Box {
  constructor(x, y, radius){
    
    
    
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0,
     
  }
  this.body = Bodies.circle(x, y, radius, options);
  this.polygon=loadImage('image/pentagon.png');
    this.Visiblity = 255;
  this.radius = radius;
  World.add(world,this.body)
  }

  display(){
    if(this.body.speed < 3){
      var angle = this.body.angle;
        push();
        
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.polygon, 0,0,this.radius, this.radius);
        pop();
    }
  
    else{
      
      push();
      World.remove(world, this.polygon);
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.polygon, 50, 50);
      pop();
    }

  
  }

  score(){
    if(this.Visiblity<0 && this.Visiblity>100){
      score++;
    }
  }

};
