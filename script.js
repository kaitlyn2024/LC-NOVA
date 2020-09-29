//stars
var stars = [];
function setup() {
  //get div
  var starsDiv = select('#stars');
  var SDWidth = starsDiv.width;
  var SDHeight = starsDiv.height;
  
  //canvas
  var canvas = createCanvas(SDWidth, SDHeight);
  canvas.parent("stars");
  
  
  //stars
  for (var i = 0; i < 100; i++) {
	stars[i] = new Star();
    stars[i].draw();
  }
}
function draw() {
  //background and blur
  background(0,0,35);
  
  //stars
  for (var i = 0; i < stars.length; i++) {
	stars[i].draw();
    stars[i].down();
  }
  stars[i] = new Star();
}
class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.3, 3);
		this.t = random(TAU);
	}
	
	draw() {
		this.t += 0.1;
		var scale = this.size + sin(this.t);
		noStroke();
		var r = 129;
		var b = 233;
		var g = 231;
		fill(r, b, g);
		ellipse(this.x, this.y, scale, scale);
	}
  down(){
    this.y = this.y + .1;

	this.x = this.x + .1;

  }
}







const endDate = '5/01/2021';
function getTimeRemaining(endtime){
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );


  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}
const total = Date.parse(endDate) - Date.parse(new Date());
var trDays = getTimeRemaining(endDate).days;
var trDays = getTimeRemaining(endDate).hours;
var trDays = getTimeRemaining(endDate).minutes;


console.log("Time Remaining is" + timeRemaining);