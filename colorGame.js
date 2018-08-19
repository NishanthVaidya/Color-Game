var numSquares = 6;
var colors=generateRandomColors(numSquares);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	messageDisplay.textContent = "";
	hardBtn.classList.remove("selected");
	numSquares= 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{	
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){

	hardBtn.classList.add("selected");
	messageDisplay.textContent = "";
	easyBtn.classList.remove("selected");
	numSquares =6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";		
	}
});


resetButton.addEventListener("click", function(){
	//generate new colors
	colors = generateRandomColors(numSquares);
	messageDisplay.textContent = "";
	//pick new random color
	pickedColor = pickColor();
	//change colordisplay to match color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0;i < squares.length; i++ ){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor= "steelblue";
});


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//Add Colors To Squares
	squares[i].style.backgroundColor = colors[i];
	//add click function
	squares[i].addEventListener("click", function(){
	var clickedColor = this.style.backgroundColor;
	//Compare with the picked color
	if(clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again?"
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
	}else{
		this.style.backgroundColor = "#232323" ;
		messageDisplay.textContent = "Try Again";
	}
	});
}
function changeColors(color){
	//loop through all the squares
	for(var i = 0; i < squares.length;i++){
	//change color of all squares to the given color
	squares[i].style.backgroundColor = color;
	}

}

function pickColor()
{
		//console.log("1");
		var random = Math.floor(Math.random() * colors.length);
		//console.log("2");
		return colors[random];
		//console.log("3");
}

function generateRandomColors(num){
	//Make an array
	var arr =[];
	//Add Random Colors to that array
	for(var i=0; i<num; i++){
		//Get the random color and push into the array
		arr.push(randomColor())
	}
	//Return that array

	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//same with green
	var g = Math.floor(Math.random() * 256);
	//same with blue
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r +", "+ g +", "+ b +")"; 
}