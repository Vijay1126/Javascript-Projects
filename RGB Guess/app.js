var colors = generateRandomColors(6);
var numSquares = 6
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor()
colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");

var easy = document.querySelector("#easyBtn")
var hard = document.querySelector("#hardBtn")

easy.addEventListener("click", function(){
    easy.classList.add("selected")
    hard.classList.remove("selected")
    numSquares = 3;
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    for (var i = 0 ; i<squares.length ; i++){
        if (colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
})

hard.addEventListener("click", function(){
    hard.classList.add("selected")
    easy.classList.remove("selected")
    numSquares = 6;
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    for (var i = 0 ; i<squares.length ; i++){
        squares[i].style.background = colors[i];    
        squares[i].style.display = "block";    
    }
    
})

hard.addEventListener("click", function(){
    hard.classList.add("selected")
    easy.classList.remove("selected")
})

resetButton.addEventListener("click", function(){
     colors = generateRandomColors(numSquares);
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
     for (var i =0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = ""
})

for (var i =0; i<squares.length; i++){
    //add initial colours to the squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners
    squares[i].addEventListener("click", function(){
        clickedColor = this.style.backgroundColor

        if (clickedColor == pickedColor){
            changeColors(pickedColor)
            h1.style.background = pickedColor
            messageDisplay.textContent = "Correct!"
            resetButton.textContent = "Play Again?"
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    })
}

function changeColors(color){
    for (var i =0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    randomNumber = Math.floor((Math.random()*colors.length))
    return colors[randomNumber]

}

function generateRandomColors(num){
    var arr = []
    for (var i = 0; i<num ; i++){
        arr.push(randomColor())
    }

    return arr
}

function randomColor(){
    var red = Math.floor(Math.random()*256)
    var green = Math.floor(Math.random()*256)
    var blue = Math.floor(Math.random()*256)

    return "rgb(" + red + ", " + green + ", " + blue + ")";

}