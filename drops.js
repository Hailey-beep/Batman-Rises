class Drops {

    constructor(x,y) {

        var options = {isStatic:false, 'restitution':0.4, 'friction':0.8, 'density':1}

        this.body = Bodies.circle(x,y,3.5,options)
        this.radius = 6;

        World.add(world,this.body)
    }

    display() {
        var pos = this.body.position;

        push()
        fill("blue")
        rectMode(CENTER)
        ellipse(pos.x, pos.y, this.radius, this.radius)
        pop()
        
    }
    respawn() {
        if(this.body.position.y > height) {
            Matter.Body.setPosition(this.body, {x:random(50,750), y:random(20,100)})
        }
    }
}