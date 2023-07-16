// Haze condition
// Based on UniAw3 from Ian Nicoll by Dacal

var NUMBER_OF_CLOUDS = 20; // clouds to show on screen
var NUMBER_OF_IMAGES = 17; // images + 1
var container = document.getElementById("cloudContainer");
document.getElementById("moon").style.display='none';
document.getElementById("moonray").style.display='none';
document.getElementById("sun").style.display='none';
document.getElementById("sunray").style.display='none';

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
    image.src = "Images/Weather/haze/fog" + randomInteger(1, NUMBER_OF_IMAGES) + ".png";
    cloudDiv.style.top = pixelValue(randomInteger(-50, 150));
    cloudDiv.style.left = pixelValue(randomInteger(-250, 0));
    cloudDiv.style.webkitAnimationName = "fade, float";
    var fadeAndfloatDuration = durationValue(randomFloat(40, 110));
    cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;
    cloudDiv.appendChild(image);
    return cloudDiv;
}
