const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;


var boy;
var rain = [];
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation;
var bat = [];
var maxDrops = 100;
var maxBats = 15;

//var thunderCreatedFrame=0;

function preload(){
    ThundImg1 = loadImage("thunderbolt/1.png");
    ThundImg2 = loadImage("thunderbolt/2.png");
    ThundImg3 = loadImage("thunderbolt/3.png");
    ThundImg4 = loadImage("thunderbolt/4.png");

    batAnimation = loadAnimation(
    "bat/bat1.png","bat/bat2.png","bat/bat3.png",
    "bat/bat4.png","bat/bat5.png","bat/bat6.png",
    "bat/bat7.png","bat/bat8.png","bat/bat9.png",
    "bat/bat10.png","bat/bat11.png","bat/bat12.png");
}

function setup() {
    var canvas = createCanvas(800,800);

    engine = Engine.create();
    world = engine.world;

    //Makes boy with unbrella
    boy = new Umbrella(397,470);

    //Makes the individual drops
    for(var i=0; i<maxDrops; i++) {
        rain.push(new Drops(random(50,750), random(0,150)))
        //console.log(rain[i]);
    }
  
}

function draw(){
    background("black");
    Engine.update(engine);

    //shows boy with unbrella
    boy.display();
    
    //Shows the individual drops
    for(var i=0; i<maxDrops; i++) {
        rain[i].display();
        rain[i].respawn();
    }

    //Makes thunder
    Thunderbolt();

    //Makes bats
    if(frameCount % 100 === 0){
        for(var i=0; i<maxBats; i++) {
            bat.push(createSprite(Math.round(random(200,750)), Math.round(random(100,450))));
            bat[i].addAnimation("moving_bat",batAnimation)
            bat[i].velocityX = Math.round(random(-4,4));
            bat[i].velocityY = Math.round(random(-4,4));
            console.log(bat[i]);
        }
} 
} 

function Thunderbolt() {
    thunder = Math.round(random(1,4))

    if(frameCount %80 === 0) {

        switch(thunder) {

            case 1: image(ThundImg1, random(100,600),random(-10,35),300,300);
            break;
            case 2: image(ThundImg2, random(100,600),random(-10,35),300,300);
            break;
            case 3: image(ThundImg3, random(100,600),random(-10,35),300,300);
            break;
            case 4: image(ThundImg4, random(100,600),random(-10,35),300,300);
            break;
            default: break;
        }
    }
}
