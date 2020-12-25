class Paper
{
 constructor(x,y,r){
     var Op={
       isStatic:false,restitution:0.5,friction:1.5,density:1.2
     }
     this.body=Bodies.circle(x,y,r,Op);
     this.x=x;
     this.y=y;
     this.r=r;
    World.add(world,this.body);

    }   
    display()
    {
        var p=this.body.position;
        push();                        
        translate(p.x,p.y);                                
        fill("red")
        rectMode(CENTER);
        ellipse(0,0,this.r);
        pop();
    }
};