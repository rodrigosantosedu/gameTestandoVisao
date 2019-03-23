var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var gameOver = false;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.getElementById("reset");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

}

easyBtn.addEventListener("click", function(){
	numOfSquares = 3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i < squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	numOfSquares = 6;
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i < squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click",function(){
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length ; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "Novas Cores";
});

colorDisplay.textContent = pickedColor;
for(var i=0 ; i < squares.length ; i++){
	// add inicial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listeners
	squares[i].addEventListener("click",function(){
		//grap color of clicked square
		var clickedColorSquare = this.style.backgroundColor;
		//compare color to pickedColor 
		if(clickedColorSquare == pickedColor){
			messageDisplay.textContent = "Correto!";
			resetButton.textContent = "JOGAR NOVAMENTE";
			changeColors(clickedColorSquare);
			h1.style.backgroundColor = clickedColorSquare;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Tente Novamente!";
		}
	});
}

function changeColors(color){
	for(var i = 0; i < squares.length ; i++){
		squares[i].style.background = color;
	}
}


function generateRandomColors(num){
	var arr = [];
	for (var i = 0 ; i < num ; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb("+red+", "+green+", "+blue+")";
}



