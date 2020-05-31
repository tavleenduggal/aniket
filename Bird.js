class Bird extends Box {
    constructor(x, y) 
    {
       super(x,y,50,50);


       //OVERRIDING
       this.image=loadImage("sprites/bird.png")
    }

    display()
    {
      this.body.position.x=mouseX
      this.body.position.y=mouseY

      super.display();
    }


  }
  