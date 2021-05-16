class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
          
          }
      this.visiblity=225
      this.image=loadImage("block.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);this.visiblity=255;
    
  
  
    if(this.body.speed<3){
  
      super.display();
    }
  else{
      this.visiblity=this.visiblity-5;
      World .remove(world,this.body);
      push();
      tint (255,this.visiblity);
      image (this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
  }
  console.log(this.body.speed);
  
}
  };
    
