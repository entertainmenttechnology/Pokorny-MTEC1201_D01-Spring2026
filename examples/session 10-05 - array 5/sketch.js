/*
Yet Another Demo on Arrays.

Using for loops to fill and iterate through arrays.
Using push() to add new values to arrays on mouse press.
Using a timer to add new values to arrays every second.
*/

let pointX = []; //declare array called pointX
pointX.length = 1; //set length of pointX array
let pointY = []; //declare array called pointY
pointY.length = 1; //set length of pointY array
let strokeW = []; //declare array for stroke weights
strokeW.length = 1; //set length of strokeW array

let move = 1; // variable for point movement

//timer variables
let currentTime = 0; 
let prevTime = 0;
let timer = 1000;

function setup() 
{
  createCanvas(800, 600);

  	//initializing the array with for loop and random numbers
	for (let i = 0; i < pointX.length; i++) 
	{
		pointX[i] = random(width);
		pointY[i] = random(height);
		strokeW[i] = random(1, 10);
	}
}

function draw() 
{
	background(0);

	//iterate through array and draw lines
	for (let i = 0; i < pointX.length; i++)
	{
    	stroke(255, 0, 0, 32);  //red lines with some transparency
    	strokeWeight(strokeW[i]); //set stroke weight from array

    	//draw line from point to center of canvas

    	line(pointX[i] + move, pointY[i] + move, width/2, height/2);

		//if outer points go off canvas, move in the other direction
		if (pointX[i] + move > width * 2 || pointX[i] + move < -width) 
		{
			move = -move;
		} 

		pointX[i] += move;
  	}

	currentTime = millis(); //keep track of elapsed time
	
	if (currentTime - prevTime >= timer) //if 1 sec has passed since last timer triggered
	{
		prevTime = currentTime; //set previous time to the current time when timer triggered
		pointX.push(random(width));
		pointY.push(random(height));
		strokeW.push(random(1, 10));

		//print the new length of the pointX array to the console for monitoring
		print("Array Length = " + pointX.length);
	}
}

function mousePressed()
{
	// the push() array method adds new random values to the end of an array
	pointX.push(mouseX);
	pointY.push(mouseY);
	strokeW.push(random(1, 10));

	//print the new length of the pointX array to the console for monitoring
	print("Array Length = " + pointX.length);
}