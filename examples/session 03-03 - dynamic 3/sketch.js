/*
<><><><><><><><><><><><><><><><><><><><><>
	USING VARIABLES

	Introducing...
	- Data Types
	- Variables
	- Constants
	- Operators
	- mousePressed()
	- keyPressed()

	Press Mouse to change background color
<><><><><><><><><><><><><><><><><><><><><>
*/

//DECLARING GLOBAL VARIABLES:
//globally scoped variables declared outside of setup() and draw() can be used anywhere in sketch.

let num = 100;		//creates a variable called num, and assigns a value of 100, a Number data type.
let ellipseHeight = 50;	//creates a variable called ellipseHeight and assigns a value of 50;
let grow = 0.5;		//creates a variable called grow and assigns a value of 0.5;
let xLocation = 0;	//creates a variable called xLocation and assigns a value of 0;

//declaring variables for background color
let r = 0;	//red value, from 0 to 255
let g = 0;	//green value, from 0 to 255
let b = 0;	//blue value, from 0 to 255

//DECLARING GLOBAL CONSTANTS:
//unlike variables, constants cannot be reassigned after declaration. you cannot change its value after this point.
//like variables, globally scoped constants declared outside of setup() and draw() can be used anywhere.

const centerPosX = 400;	
const centerPosY = 300;

function setup() //runs only once.
{
	createCanvas(800, 600);
	let example = 75; //QUESTION: will I be able to use this variable in draw()?
}

function draw() //draw runs forever, unless event function is called.
{
	background(r, g, b);	//fill screen with color defined by r, g, b variables.
	
	ellipse (mouseX / 2, mouseY - 200, num, ellipseHeight + 100);
	
	rectMode(CENTER);	//set rect mode to center, so x and y coordinates will be the center of the rectangle
	rect(mouseX * 0.5, mouseY, grow, grow);
	
	ellipse(xLocation, height / 2, width / 4, width / 4);
	
	//increment by 1, written 3 different ways:
	//xLocation = xLocation + 1;
	//xLocation += 1;
	xLocation++;
	
	//decrement by 1, written 3 different ways:
	//xLocation = xLocation - 1;
	//xLocation -= 1;
	//xLocation--;
	
	grow += 0.5; //same as grow = grow + 0.5;
	
	//use print() or console.log() to print to console
	//print(num);
	//print(grow);
	//print(xLocation);
	//console.log(xLocation);
}

function mousePressed() //code block runs once, only when moused is pressed, then returns to draw() loop.
{
	r++;		//same as r = r + 1;
	g += 20;	//same as g = g + 20;
	b += 10;	//same as b = b + 10;
}

function keyPressed() //code block runs once, only when any key is pressed, then returns to draw() loop.
{
	//put some cool code here that will respond to key press
}