class Ball {
  constructor(x, y, width, height, angle) {
    var options = { 
      density: 1, 
      frictionAir: 0.005};

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    //we write these two bc these two propoerites are common for all the objects we are creating in this class
    //has to be soomething constant
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    //helps to give new setting
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse(0, 0, this.width, this.height);
    pop();
   //restores old setting
    //push and pop help you to restore
  }
}
