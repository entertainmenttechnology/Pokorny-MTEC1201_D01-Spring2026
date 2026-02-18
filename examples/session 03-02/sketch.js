/*
<><><><><><><><><><><><><><>
	"DRAWING WITH PMOUSE"
	
	introducing...
	- pmouseX, pmouseY
<><><><><><><><><><><><><><>
*/

function setup() 
{
	createCanvas(800, 600);
	
	background(127);	//move this line to draw() and see what happens
}

function draw() 
{
	stroke(200, 255, 100);	//set the stroke color to a light green
	
	strokeWeight(10);	//set the stroke weight, aka line thickness, to 10 pixels
	
	line(pmouseX, pmouseY, mouseX, mouseY);	
}