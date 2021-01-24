class Ground {
    constructor(x,y,width,height) {
      var op = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,op);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var posX =this.body.position.x;
      var posY =this.body.position.y;
      rectMode(CENTER);
      rect(posX, posY, this.width, this.height);
    }
  }