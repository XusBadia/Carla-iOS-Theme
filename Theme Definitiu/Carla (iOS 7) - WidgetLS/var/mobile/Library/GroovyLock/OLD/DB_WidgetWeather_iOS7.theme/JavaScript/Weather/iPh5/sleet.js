// Sleet condition
// Based on UniAw3 from Ian Nicoll by Dacal

var NUMBER_OF_CLOUDS = 18; // clouds to show on screen
var NUMBER_OF_CLOUDS_IMAGES = 19; // images + 1
var NUMBER_OF_drop = 30; // drop to show on screen
var NUMBER_OF_DROP_IMAGES = 7; // images + 1
var container1 = document.getElementById("cloudContainer");
var container2 = document.getElementById("dropContainer");
var container3 = document.getElementById("frameContainer");

document.getElementById("moon").style.display='none';
document.getElementById("sun").style.display='none';
document.getElementById("sunray").style.display='none';
document.getElementById("moonray").style.display='none';

for (var i = 0; i < NUMBER_OF_CLOUDS; i++) { container1.appendChild(createACloud()); }
for (var i = 0; i < NUMBER_OF_drop; i++) { container2.appendChild(createAdrop()); }
for (var i = 0; i < NUMBER_OF_drop; i++) { container3.appendChild(createBdrop()); }

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
    image.src = "Images/Weather/showers_cloud/" + where + "/cloud" + randomInteger(1, NUMBER_OF_CLOUDS_IMAGES) + ".png";
    cloudDiv.style.top = pixelValue(randomInteger(-50, 50));
    cloudDiv.style.left = pixelValue(randomInteger(-250, 0));
    cloudDiv.style.webkitAnimationName = "fade, float";
    var fadeAndfloatDuration = durationValue(randomFloat(40, 180));
    cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;
    cloudDiv.appendChild(image);
    return cloudDiv;
}

function createAdrop() {
    var dropDiv = document.createElement("div");
    var image = document.createElement("img");
    image.src = "Images/Weather/sleet/drop" + randomInteger(1, NUMBER_OF_DROP_IMAGES) + ".png";
    dropDiv.style.top = pixelValue(randomInteger(-100, 50));
    dropDiv.style.left = pixelValue(randomInteger(0, 320));
    dropDiv.style.webkitAnimationName = "fade2, drop";
    var fadeAndDropDuration = durationValue(randomFloat(1.5, 3));
    dropDiv.style.webkitAnimationDuration = fadeAndDropDuration + ", " + fadeAndDropDuration;
	var delayDuration = durationValue(randomInteger(1, 10));
	dropDiv.style.webkitAnimationDelay = delayDuration +", " + delayDuration;
    dropDiv.appendChild(image);
    return dropDiv;
}

function createBdrop() {
    var dropDiv = document.createElement("div");
    var image = document.createElement("img");
    image.src = "Images/Weather/sleet/snow" + randomInteger(1, NUMBER_OF_DROP_IMAGES) + ".png";
    dropDiv.style.top = pixelValue(randomInteger(-100, 50));
    dropDiv.style.left = pixelValue(randomInteger(0, 320));
    dropDiv.style.webkitAnimationName = "fade3, drop";
    var fadeAndDropDuration = durationValue(randomFloat(5, 7));
    dropDiv.style.webkitAnimationDuration = fadeAndDropDuration + ", " + fadeAndDropDuration;
	var delayDuration = durationValue(randomInteger(1, 10));
	dropDiv.style.webkitAnimationDelay = delayDuration +", " + delayDuration;
    dropDiv.appendChild(image);
    return dropDiv;
}
