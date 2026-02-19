//Avery W.
//This is a drawing of a night sky with a moon, stars, and a house.
//this semester i would like to focus on how create night landsacpes.

function setup() {
  createCanvas(900, 500);
  background(6,21,105);
  //moon
  fill(230, 219, 179);
  stroke(0);
  circle (0, 0, 400);
  //star1
  noStroke();
  fill(250,250,250);
  triangle (300,50, 250, 100, 350, 100);
  triangle (300,120, 250, 75, 350, 75);
  //star2
  noStroke();
  fill(250,250,250);
  triangle (500,50, 450, 100, 550, 100);
  triangle (500,120, 450, 75, 550, 75);
  //star3
  noStroke();
  fill(250,250,250);
  triangle (700,50, 650, 100, 750, 100);
  triangle (700,120, 650, 75, 750, 75);
  //house
  fill(105, 45, 2);
  stroke(0);
  square(400, 300, 100); 
  stroke(0);
  triangle (400, 300, 450, 250, 500, 300);
  fill(49, 94, 43);
  rect(0, 400, 900, 100);  
}

//function draw() {
  background(220);
  
//}