// Fog condition
// Based on UniAw3 from Ian Nicoll by Dacal

var NUMBER_OF_CLOUDS = 20; // clouds to show on screen
var NUMBER_OF_IMAGES = 13; // images + 1
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
}

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
    image.src = "Images/Weather/fog/fog" + randomInteger(1, NUMBER_OF_IMAGES) + ".png";
    cloudDiv.style.top = pixelValue(randomInteger(-50, 120));
    cloudDiv.style.left = pixelValue(randomInteger(-250, 0));
    cloudDiv.style.webkitAnimationName = "fade, float";
    var fadeAndfloatDuration = durationValue(randomFloat(50, 150));
    cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;
    cloudDiv.appendChild(image);
    return cloudDiv;
}
