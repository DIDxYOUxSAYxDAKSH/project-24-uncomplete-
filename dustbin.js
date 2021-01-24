class DUSTBIN{
constructor(x,y,w,h,angle){
 var op = {
    isStatic : true,
 }

 this.body = Matter.Bodies.rectangle(x,y,w,h,op,angle);
 World.add(world,this.body);
 this.width = w;
 this.height = h;
 
}
display(){
 var angle = this.body.angle;   
 var posX = this.body.position.x;
 var posY = this.body.position.y;


 rectMode(CENTER);
 rotate(angle);
 rect(posX,posY,80,10);   
 Matter.Body.setAngle(this.body, angle);

}







}