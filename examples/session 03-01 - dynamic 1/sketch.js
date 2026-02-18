/*
<><><><><><><><><><><><><><><><>
	STATIC vs DYNAMIC

	Introducing...
	- draw() function
	- basic input: mouseX, mouseY
<><><><><><><><><><><><><><><><>
*/

//the code in setup block runs once
function setup() 
{
	createCanvas(800, 600);	//create a canvas of width 800 and height 600

	//background(127, 127, 127);	//try commenting in and out this line to see the difference
}

//the code in draw block runs repeatedly
function draw() 
{
	background(127, 127, 127);	//try commenting in and out this line to see the difference
	
	//a STATIC line
	line (0, 0, 400, 300);	//draw a line from the top-left corner of the canvas to the center of the canvas
	
	//a DYNAMIC line
	line(400, 300, mouseX, mouseY);	//draw a line from the center of the canvas to the current mouse position
	
	//ellipse following mouse position
	ellipse(mouseX, mouseY, 50, 50);	//draw an ellipse at the current mouse position with width and height of 50
}