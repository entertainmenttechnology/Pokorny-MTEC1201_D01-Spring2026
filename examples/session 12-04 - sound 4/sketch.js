/*
SOUND Example - Oscillator
<><><><><><><><><><><><><><><><><><><><><><><><><>
- generates a continuous tone that can be modulated in frequency and amplitude using mouse position
- mouse x position controls frequency of the oscillator
- mouse y position controls amplitude of the oscillator
- press any key to start and stop the oscillator  

REFERENCE:
https://p5js.org/reference/p5.sound/p5.Oscillator/
*/

let osc;  // Declare the oscillator variable for p5.Oscillator object
let freq; // frequency variable
let amp; // amplitude variable
let playing = false; // boolean for flagging play state of the oscillator

function setup() 
{
  createCanvas(800, 500);
  fill(255);
  textSize(32);

  osc = new p5.Oscillator('sine');  // initialize a new oscillator object of type 'sine'
  // we can also use 'triangle', 'sawtooth', or 'square'
  // each have their own sonic character. experiment with them to see how they sound!
}

function draw() 
{
  // Map the mouseX position to a frequency range of 100 to 500 Hz
  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500); 

  // Map the mouseY position to an amplitude range of 0.0 to 1.0
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  if (!playing)
  {
    background(0);
    text('press a key to play oscillator', 20, 50);
  }
  else
  {
    background(map(mouseY, 0, height, 255, 0), map(mouseX, 0, width, 0, 255), map(mouseY, height, 0, 0, 255));
    text('oscillator playing', 20, 50);
  }
  
  text('Frequency: ' + freq + " Hz", 20, 100);
  text('Amplitude: ' + amp, 20, 150);
  text("Osc Type: " + osc.getType(), 20, 200);

  circle(mouseX, mouseY, 50);

  osc.freq(freq); //set frequency of oscillator, in Hertz [Hz].
  //NOTE: Human Range of hearing is around 20 Hz to 20,000 Hz

  osc.amp(amp); //set amplitude of oscillator, from 0.0 to 1.0
  // Ampltitude is the volume of the sound, where 0.0 is silent and 1.0 is maximum volume
  // Anything above 1.0 can cause distortion, so it's best to keep it within the range of 0.0 to 1.0
}

function keyPressed()
{
  playing = !playing; // Toggle the playing state of the oscillator

  if (playing)  // If playing is true...
  {
    osc.start(); // start oscillator, begin generating sound
  }
  else // If playing is false...
  { 
    osc.stop(); // stop oscillator
  }
}