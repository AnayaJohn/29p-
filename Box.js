class Box{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.4,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rect(0,0,width,height);
      pop();
    }
}