class PAPER{
constructor(x,y,radius){
 var op={
    isStatic: false,
    restitution:0.3,
    friction:0.5,
    density:1.2,
}
 this.body = Matter.Bodies.circle(x,y,radius,op);
 World.add(world,this.body);  

}
display(){

ellipseMode(CENTER);
var posX = this.body.position.x;
var posY = this.body.position.y; 

circle(posX,posY,20);

}




}