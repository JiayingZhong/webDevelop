var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    // mode buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
            // figure out how many squares to show
            // pick new colors
            // pick a new pickedColor
            // update page to reflect changes
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        // add click listeners to squares
        squares[i].addEventListener("click", function(){
            // grab color of clicked square
            var clickedColor  =  this.style.backgroundColor;
    
            // compare color to picked color
            if(clickedColor == pickedColor){
                changeColors(clickedColor);
                messageDisplay.textContent = "Correct!";
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array, and update the colorDisplay
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent = "";
    // change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Color";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    // loop through all squares
    for(var i = 0; i < squares.length; i++){
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    // Math.ramdom() 产生 0 到 1 的随机数
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = [];
    // add num random colors to array
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    // rgb(r, g, b)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}