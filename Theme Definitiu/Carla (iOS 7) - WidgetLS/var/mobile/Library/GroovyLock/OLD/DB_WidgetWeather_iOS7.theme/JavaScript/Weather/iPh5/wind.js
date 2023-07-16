// Wind condition
// Based on UniAw3 from Ian Nicoll by Dacal

var NUMBER_OF_SEEDS = 40; // seeds to show on screen
var NUMBER_OF_SEED_IMAGES = 8; // images + 1
var container = document.getElementById("windContainer");

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
var container1 = document.getElementById("frameContainer");
var container2 = document.getElementById("dropContainer");

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

// DANDELION
for (var i = 0; i < NUMBER_OF_SEEDS/2; i++) { container.appendChild(createAseed()); }
container.appendChild(createAdandelion());
for (var i = 0; i < NUMBER_OF_SEEDS/2; i++) { container.appendChild(createAseed()); }
// END DANDELION

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

function createAseed() {
    var cloudDiv = document.createElement("div");
    var image = document.createElement("img");
    image.src = "Images/Weather/dandelion/"+where+"/seed" + randomInteger(1, NUMBER_OF_SEED_IMAGES) + ".png";
    var spinAnimationName = (Math.random() < 0.5) ? "clockwiseSpin" : "counterclockwiseSpinAndFlip";
	if (spinAnimationName == "clockwiseSpin") {
		cloudDiv.style.top = pixelValue(randomInteger(340, 400));
		cloudDiv.style.left = pixelValue(randomInteger(-10, 50));
		cloudDiv.style.webkitAnimationName = "fade_seed, float_seed";
		} else {
		cloudDiv.style.top = pixelValue(randomInteger(400, 520));
		cloudDiv.style.left = pixelValue(randomInteger(-200, -100));
		cloudDiv.style.webkitAnimationName = "fade_seed, float_seed2";
	}
    image.style.webkitAnimationName = spinAnimationName;
    var fadeAndfloatDuration = durationValue(randomFloat(8, 15));
    cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;
    image.style.webkitAnimationDuration = fadeAndfloatDuration;
	var delayDuration = durationValue(randomInteger(0, 7));
	cloudDiv.style.webkitAnimationDelay = delayDuration +", " + delayDuration;
    image.style.webkitAnimationDelay = delayDuration;
    cloudDiv.appendChild(image);
    return cloudDiv;
}

function createAdandelion() {
    var image = document.createElement("img");
    image.id = "dandelion";
    image.src = "Images/Weather/dandelion/"+where+"/dandelion.png";
    return image;
}
