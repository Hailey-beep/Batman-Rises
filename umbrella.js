class Umbrella {

    constructor(x,y) {
    
        this.body = Bodies.circle(x,y,137,{isStatic:true, 'restitution':0.8, 'friction':0.6})
        this.image = loadImage("Walking Frame/walking_1.png");
        this.animation = loadAnimation(
            'Walking Frame/walking_1.png', 'Walking Frame/walking_2.png',
            'Walking Frame/walking_3.png', 'Walking Frame/walking_4.png', 
            'Walking Frame/walking_5.png', 'Walking Frame/walking_6.png', 
            'Walking Frame/walking_7.png', 'Walking Frame/walking_8.png'
        );

        this.bestman = loadImage("Walking Frame/batman.png");

        //Matter.this.image.scale(0.5);

        World.add(world,this.body)
    }

    display() {

        var pos = this.body.position;

        if(frameCount <= 200) {
            rectMode(CENTER)
            //fill("black")
            //ellipse(pos.x, pos.y, 265, 265)
            image(this.image, 100, 275, 550, 550)
        }

        if(frameCount >= 200) {
            image(this.bestman, 130, 300, 550, 530)
        }
    }
}