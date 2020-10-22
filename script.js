
//time left
const endDate = '5/01/2021';
function timeLeft(endtime){
	const total = Date.parse(endDate) - Date.parse(new Date());
	const seconds = Math.floor( (total/1000) % 60 );
	const minutes = Math.floor( (total/1000/60) % 60 );
	const hours = Math.floor( (total/(1000*60*60)) % 24 );
	const days = Math.floor( total/(1000*60*60*24) );


	return {
		days,
		hours,
		minutes,
		seconds
	};
}
function updateTimeRemaining(){
	const total = Date.parse(endDate) - Date.parse(new Date());
	document.getElementById("days").innerHTML = timeLeft(endDate).days + ":";
	document.getElementById("hours").innerHTML = timeLeft(endDate).hours + ":";
	document.getElementById("minutes").innerHTML = timeLeft(endDate).minutes + ":";
	document.getElementById("seconds").innerHTML = timeLeft(endDate).seconds;
}



//stars
var stars = [];
function setup() {

	//get div
	var starsDiv = select('#stars');
	var SDWidth = starsDiv.width;
	var SDHeight = starsDiv.height;
	
	//canvas
	var canvas = createCanvas(SDWidth, SDHeight);
	canvas.id('canvas');
	canvas.parent("stars");
	
	
	//stars
	for (var i = 0; i < 100; i++) {
	stars[i] = new star();
		stars[i].draw();
	}
	
	//date
	updateTimeRemaining();
	
	//make button
	starBtn();
	
}
function draw() {
	
	//background and blur
	background(0,0,35);
	
	//stars
	for (var i = 0; i < stars.length; i++) {
	stars[i].draw();
		stars[i].down();
	}
	stars[i] = new star();
	
	//update time
	updateTimeRemaining();
	
	//
	starBtn();
	
}
class star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.1, 2);
		this.t = random(TAU);
	}
	
	draw() {
		this.t += 0.1;
		var scale = this.size + sin(this.t);
		noStroke();
		fill(129, 233, 231);
		ellipse(this.x, this.y, scale, scale);
	}
	down(){
	this.y = this.y + .1;
	this.x = this.x + .1;
	
	}
}
function starBtn() {
	var starsDiv = select('#stars');
	var SDWidth = starsDiv.width;
	var SDHeight = starsDiv.height;
	var d2 = canvas.getContext("2d");
	d2.font = "30px Lato";
	d2.fillStyle = (129, 233, 231);
	d2.textAlign = "center";
	d2.fillText("Go to DISCORD", SDWidth/2, SDHeight/2);
}


