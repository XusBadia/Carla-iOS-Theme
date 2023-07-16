// Partly Cloudy condition
// Based on UniAw3 from Ian Nicoll by Dacal

var NUMBER_OF_CLOUDS = 10; // clouds to show on screen
var NUMBER_OF_IMAGES = 19; // images + 1
var container = document.getElementById("cloudContainer");

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

var NUMBER_OF_METEOR = 3; // Number of meteors to show on screen
var NUMBER_OF_METEOR_IMAGES = 3; // images + 1
var NUMBER_OF_LIGHT = 20; // Number of stars to show on screen
var NUMBER_OF_LIGHT_IMAGES = 6; // images + 1
var container1 = document.getElementById("starContainer");
var container2 = document.getElementById("meteorContainer");

// METEOR ANIMATION
var meteorTimer = setInterval( function () {
	delelement("meteorContainer");
	for (var i = 0; i < NUMBER_OF_METEOR; i++) { container2.appendChild(createAmeteor());	}
	}, 15000);

// STARS ANIMATION
for (var i = 0; i < NUMBER_OF_LIGHT; i++) { container1.appendChild(createAstar()); }
}

// CLOUDS ANIMATION
for (var i = 0; i < NUMBER_OF_CLOUDS; i++) { container.appendChild(createACloud()); }

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
    image.src = "Images/Weather/partlycloudy/" + where + "/cloud" + randomInteger(1, NUMBER_OF_IMAGES) + ".png";
    cloudDiv.style.top = pixelValue(randomInteger(-50, 50));
    cloudDiv.style.left = pixelValue(randomInteger(-250, 0));
    cloudDiv.style.webkitAnimationName = "fade, float";
    var fadeAndfloatDuration = durationValue(randomFloat(40, 180));
    cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;
    cloudDiv.appendChild(image);
    return cloudDiv;
}

function createAstar() {
    var starDiv = document.createElement("div");
    var image = document.createElement("img");
    image.src = "Images/Weather/moon/star" + randomInteger(1, NUMBER_OF_LIGHT_IMAGES) + ".png";
    starDiv.style.top = pixelValue(randomInteger(20, 160));
    starDiv.style.left = pixelValue(randomInteger(0, 320));
    starDiv.style.webkitAnimationName =  "star_anim";
    starDiv.style.webkitAnimationDuration = durationValue(randomInteger(8, 20));
	starDiv.style.webkitAnimationDelay = durationValue(randomInteger(1, 30));
    starDiv.appendChild(image);
    return starDiv;
}

function createAmeteor() {
    var meteorDiv = document.createElement("div");
    var image = document.createElement("img");
	var meteorNumber = randomInteger(1, NUMBER_OF_METEOR_IMAGES);
    image.src = "Images/Weather/moon/meteor" + meteorNumber + ".png";
    meteorDiv.style.top = pixelValue(randomInteger(20, 160));
    meteorDiv.style.left = pixelValue(randomInteger(0, 320));
    meteorDiv.style.webkitAnimationName = "fade2, drop" + meteorNumber;
    var fadeAndDropDuration = durationValue(randomFloat(1, 2));
    meteorDiv.style.webkitAnimationDuration = fadeAndDropDuration + ", " + fadeAndDropDuration;
	var delayDuration = durationValue(randomInteger(1, 7));
	meteorDiv.style.webkitAnimationDelay = delayDuration +", " + delayDuration;
    meteorDiv.appendChild(image);
    return meteorDiv;
}
