class GameObject{
    //This is what gets called when we do new GameObject()
    //pass in the canvas object
    constructor(canvas)
    {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        //Velocity on X axis
        this.vx = 10;
        //Velocity on Y axis
        this.vy = 10;
        //color of the object
        this.color = "cornflowerblue"
        //Reference to the canvas
        this.canvas = canvas
    }

    //Renders the Object on the screen
    renderRect()
    {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }

    //Moves the object
    move()
    {
        this.x += this.vx
        this.y += this.vy

        if(this.x > canvas.width - 50){
            this.vx *= -1
        }
        if(this.x < 50){
            this.vx *= -1
        }
        if(this.y < 50){
            this.vy *= -1
        }
        if(this.y > canvas.height - 50){
            this.vy *= -1
        }
    }

}