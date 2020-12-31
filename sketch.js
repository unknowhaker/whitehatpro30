const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var ground,stand,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,poli,slingShot,stand1,ub1,ub2,ub3,ub4,ub5,ub6,ub7,ub8,ub9,ub10;
function setup() {
    createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;
    //1075,725,975,625
    ground = new Ground(600,680,1200,10);
    stand = new Ground(900,600,350,10);
    stand1 = new Ground(1000,300,200,10);
    ub1 = new Box(925,290,50,50);
    ub2 = new Box(975,290,50,50);
    ub3 = new Box(1025,290,50,50);
    ub4 = new Box(1075,290,50,50);
    ub5 = new Box(950,190,50,50);
    ub6 = new Box(1000,190,50,50);
    ub7 = new Box(1050,190,50,50);
    ub8 = new Box(975,140,50,50);
    ub9 = new Box(1025,140,50,50);
    ub10 = new Box(1000,80,50,50);
    //box11 = new Box(950,50,50);
    //box12 = new Box(1000,50,50);
    //box13 = new Box(850,50,50);
    //box14 = new Box(900,50,50);
    //box15 = new Box(950,50,50);
    //box16 = new Box(900,50,50);
    box1 = new Box(750,550,50,50);
    box2 = new Box(800,480,50,50);
    box3 = new Box(850,480,50,50);
    box4 = new Box(900,480,50,50);
    box5 = new Box(950,480,50,50);
    box6 = new Box(1000,480,50,50);
    box7 = new Box(1050,550,50,50);
    box8 = new Box(800,550,50,50);
    box9 = new Box(850,550,50,50);
    box10 = new Box(900,550,50,50);
    box11 = new Box(950,550,50,50);
    box12 = new Box(1000,550,50,50);
    box13 = new Box(850,420,50,50);
    box14 = new Box(900,420,50,50);
    box15 = new Box(950,420,50,50);
    box16 = new Box(900,350,50,50);
    poli = new Poligon(50,200,20);
    //slingShot = new SlingShot(this.poli,{x:100,y:200});
    slingShot = new SlingShot(poli.body,{x:100,y:200});
    

}
  
function draw() {
    background(220);
    Engine.update(engine);
    ground.display();
    stand.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box13.display();
    box12.display();
    box14.display();
    box15.display();
    box16.display();
    poli.display();
    stand1.display()
    slingShot.display();
    ub1.display();
    ub2.display();
    ub3.display();
    ub4.display();
    ub5.display();
    ub6.display();
    ub7.display();
    ub8.display();
    ub9.display();
    ub10.display();
}
function mouseDragged (){
    Matter.Body.setPosition(poli.body,{x:mouseX,y:mouseY});
}

function mouseReleased (){
    slingShot.fly();
}
function keyPressed() {
    if (keyCode===32) {
        Matter.Body.setPosition(poli.body,{x: 200,y: 50})
        slingShot.attach(poli.body);
    }
}