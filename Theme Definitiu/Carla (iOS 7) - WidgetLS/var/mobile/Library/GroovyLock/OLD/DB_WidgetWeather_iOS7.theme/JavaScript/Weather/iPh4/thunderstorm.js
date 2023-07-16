// Thunderstorm condition
// Based on UniAw3 from Ian Nicoll by Dacal

var NUMBER_OF_LIGHT = 5; // thunder to show on screen
var NUMBER_OF_CLOUDS = 12; // clouds to show on screen
var NUMBER_OF_CLOUDS_IMAGES = 19; // images + 1
var container1 = document.getElementById("cloudContainer");
var container3 = document.getElementById("frameContainer");
var container4 = document.getElementById("wiperContainer");
var z = 0;

document.getElementById("moon").style.display='none';
document.getElementById("sun").style.display='none';
document.getElementById("sunray").style.display='none';
document.getElementById("moonray").style.display='none';

// Wiper from Ian
container4.appendChild(createAwiper());
container4.appendChild(createAwiper_trace());
container4.appendChild(createAwiper_water());

for (var i = 0; i < NUMBER_OF_CLOUDS; i++) {
	var CloudNumber = randomInteger(1, NUMBER_OF_CLOUDS_IMAGES);
	var topDivCloud = pixelValue(randomInteger(-70, 50));
    var leftDivCloud = pixelValue(randomInteger(-250, 0));
    var fadeAndfloatDuration = durationValue(randomFloat(40, 120));
	container1.appendChild(createACloud());
	if (z < NUMBER_OF_LIGHT) {
		var thunderCloud = (Math.random() < 0.5) ? "true" : "false";
		if (thunderCloud == "true") {
			container3.appendChild(createAlight());
			z++;
			}
		}
}

if ( DropRain == false ) {
	var NUMBER_OF_circle = 12; // drop to show on screen
	var NUMBER_OF_CIRCLE_IMAGES = 5; // images + 1
	var container2 = document.getElementById("circleContainer");
	for (var i = 0; i < NUMBER_OF_circle; i++) 	{
		var topDiv = pixelValue(randomInteger(20, 400));
		var leftDiv = pixelValue(randomInteger(20, 300));
		var fadeAndDropDuration = durationValue(randomFloat(2, 4));
		var delayDuration = durationValue(randomInteger(1, 10));
		var NumCircle = randomInteger(2, NUMBER_OF_CIRCLE_IMAGES);
		for (var t = 1; t <5; t++) { container2.appendChild(createAcircle()); }
		}
} else {
	var NUMBER_OF_drop = 40; // drop to show on screen
	var NUMBER_OF_DROP_IMAGES = 4; // images + 1
	var container2 = document.getElementById("dropContainer");
	for (var i = 0; i < NUMBER_OF_drop; i++) { container2.appendChild(createAdrop()); }
}

function randomInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low));
}

function pixelValue(value) {
    return value + "px";
}

function durationValue(value) {
    return value + "s";
}

function randomFloat(low, high) {
    return low + Math.random() * (high - low);
}

function createAlight() {
    var lightDiv = document.createElement("div");
    var image = document.createElement("img");
    var ThunderAnimationName = (Math.random() < 0.5) ? "thunder_animation1" : "thunder_animation2";
    image.src = "Images/Weather/thunderstorm/cloud" + CloudNumber + ".png";
    lightDiv.style.top = topDivCloud;
    lightDiv.style.left = leftDivCloud;
    lightDiv.style.webkitAnimationName =  ThunderAnimationName +", float";
    lightDiv.style.webkitAnimationDuration = durationValue(randomInteger(7, 11)) + ", " + fadeAndfloatDuration;
/*	lightDiv.style.webkitAnimationDelay = delayDuration +", " + delayDuration; */
    lightDiv.appendChild(image);
    return lightDiv;
}

function createACloud() {
    var cloudDiv = document.createElement("div");
    var image = document.createElement("img");
    image.src = "Images/Weather/showers_cloud/" + where + "/cloud" + CloudNumber + ".png";
    cloudDiv.style.top = topDivCloud;
    cloudDiv.style.left = leftDivCloud;
    cloudDiv.style.webkitAnimationName = "fade, float";
    cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;
/*	cloudDiv.style.webkitAnimationDelay = delayDuration +", " + delayDuration; */
    cloudDiv.appendChild(image);
    return cloudDiv;
}

function createAcircle() {
	var circleDiv = document.createElement("div");
    var image = document.createElement("img");
	circleDiv.style.top = topDiv;
    circleDiv.style.left = leftDiv;
	if (t == 1) { image.src = "Images/Weather/rain/circle1.png"; }
	else { image.src = "Images/Weather/rain/circle" + NumCircle + ".png"; }
    circleDiv.style.webkitAnimationName = "fade" + t + ", scale" + t;
    circleDiv.style.webkitAnimationDuration = fadeAndDropDuration + "," + fadeAndDropDuration;
	circleDiv.style.webkitAnimationDelay = delayDuration +", " + delayDuration;
    circleDiv.appendChild(image);
    return circleDiv;
}

function createAdrop() {
    var dropDiv = document.createElement("div");
    var image = document.createElement("img");
    image.src = "Images/Weather/rain/drop" + randomInteger(1, NUMBER_OF_DROP_IMAGES) + ".png";
    dropDiv.style.top = pixelValue(randomInteger(-100, 50));
    dropDiv.style.left = pixelValue(randomInteger(0, 320));
    dropDiv.style.webkitAnimationName = "fadeDrop, drop";
    var fadeAndDropDuration = durationValue(randomFloat(1, 3));
    dropDiv.style.webkitAnimationDuration = fadeAndDropDuration + ", " + fadeAndDropDuration;
	var delayDuration = durationValue(randomInteger(1, 10));
	dropDiv.style.webkitAnimationDelay = delayDuration +", " + delayDuration;
    dropDiv.appendChild(image);
    return dropDiv;
}

function createAwiper() {
    var image = document.createElement("img");
    image.id = "wiper";	
    image.src = "Images/Weather/wiper/wiper.png";
    return image;
}

function createAwiper_trace() {
    var image = document.createElement("img");
    image.id = "trace";
    image.src = "Images/Weather/wiper/wiper_trace.png";
    return image;
}

function createAwiper_water() {
    var image = document.createElement("img");
    image.id = "water";
    image.src = "Images/Weather/wiper/wiper_water.png";
    return image;
}
