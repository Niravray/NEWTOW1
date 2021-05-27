class bob {
  constructor(x,y) {
    var options = {
        isStatic: false,
        restitution: 1,
        friction: 0,
        density: 0.8
    }
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(this.x,this.y,30,options);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push ();
    translate (pos.x,pos.y);
    ellipseMode(CENTER);
    stroke ("black")
    fill("blue");
    ellipse(0, 0, 60, 60);
    pop ();
  }
};