var fps = 60;
var timer = setInterval(main, 1000/fps)

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var x = 50;
var y = canvas.height / 2;
var w = 100;
var h = 100;
var moveAmountX = 10;
var moveAmountY = 10;

//Random number
//math.round = rounds up or down
//math.random will always return 0 - 1; can be increased by multiplying by a number 
var randomNumber = Math.round(Math.random() * 5)

//math.floor = aloways rounds down
var lowRandomNumber = Math.floor(Math.random() * 5)

//Outputting the random numbers
console.log(randomNumber)
console.log(lowRandomNumber)

var jimmyTheBox = new GameObject(canvas);
jimmyTheBox.width = 100;
jimmyTheBox.height = 100;
jimmyTheBox.x = 72;
jimmyTheBox.y = 84;

var paulTheBox = new GameObject()
paulTheBox.width = 50;
paulTheBox.height = 50;
paulTheBox.x = canvas.width / 2;
paulTheBox.y = canvas.height / 2;
paulTheBox.color = "purple"

function main(){

    //Clear the canvas every frame
    ctx.clearRect(0,0,canvas.width,canvas.height)

    jimmyTheBox.move()
    paulTheBox.move()

    jimmyTheBox.renderRect();
    paulTheBox.renderRect();



    //Updates our object's positions
    x += moveAmountX;
    y += moveAmountY;

    //Draw the object
    ctx.fillStyle = "maroon"

    ctx.beginPath();
    ctx.arc(x,y,50,0,2 * Math.PI);
    ctx.fill();

    //Stay in boundry of canvas
    // if position is greater then the width  
    // of the canvas minus half the width of the circle

    if(x > canvas.width - 50){
        moveAmountX *= -1
    }

    if(y > canvas.height - 50){
        moveAmountY *= -1
    }

    if(x < 50){
        moveAmountX *= -1

    }

    if(y < 50){
        moveAmountY *= -1
    }
}