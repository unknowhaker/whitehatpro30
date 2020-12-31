class Box{
    constructor(x, y, width, height) {
        var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
    }
    display(){
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        var pos =this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
        push();
        this.visible=this.visible-5;
        tint(255,this.visible);
        //rect(this.rect,this.body.position.x,this.body.position.y,50,50);
        pop();
    }
}