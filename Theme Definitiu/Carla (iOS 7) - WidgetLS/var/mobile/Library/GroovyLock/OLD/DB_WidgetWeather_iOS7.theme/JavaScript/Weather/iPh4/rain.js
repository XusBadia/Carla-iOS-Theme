// Rain condition
// Based on UniAw3 from Ian Nicoll by Dacal

var NUMBER_OF_CLOUDS = 12; // clouds to show on screen
var NUMBER_OF_CLOUDS_IMAGES = 19; // images + 1
var container1 = document.getElementById("cloudContainer");
var container3 = document.getElementById("wiperContainer");

if (where == "day") {
document.getElementById("moon").style.display='none';
document.getElementById("moonray").style.display='none';
document.getElementById("sun").style.display='block';
document.getElementById("sunray").style.display='block';
} else {
document.getElementById("moon").style.display='block';
document.getElementById("moonray").style.display='block';
document.getElementById("sun").style.display='none';
document.getElementById("sunray").style.display='none';
}

// Wiper from Ian
container3.appendChild(createAwiper());
container3.appendChild(createAwiper_trace());
container3.appendChild(createAwiper_water());

for (var i = 0; i < NUMBER_OF_CLOUDS; i++) { container1.appendChild(createACloud()); }

if ( DropRain == false ) {
	var NUMBER_OF_circle = 15; // drop to show on screen
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
	var NUMBER_OF_drop = 36; // drop to show on screen
	var NUMBER_OF_DROP_IMAGES = 4; // images + 1
	var container2 = document.getElementById("dropContainer");
	for (var i = 0; i < NUMBER_OF_drop; i++) { container2.appendChild(createAdrop()); }
}

function randomInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low));
}

function randomFloat(low, high) {
    return low + Math.random() * (high - low);
}

function pixelValue(value) {
    return value + "px";
}

function durationValue(value) {
    return value + "s";
}

function createACloud() {
    var cloudDiv = document.createElement("div");
    var image = document.createElement("img");
    image.src = "Images/Weather/cloud/" + where + "/cloud" + randomInteger(1, NUMBER_OF_CLOUDS_IMAGES) + ".png";
    cloudDiv.style.top = pixelValue(randomInteger(-50, 50));
    cloudDiv.style.left = pixelValue(randomInteger(-250, 0));
    cloudDiv.style.webkitAnimationName = "fade, float";
    var fadeAndfloatDuration = durationValue(randomFloat(40, 180));
    cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;
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
