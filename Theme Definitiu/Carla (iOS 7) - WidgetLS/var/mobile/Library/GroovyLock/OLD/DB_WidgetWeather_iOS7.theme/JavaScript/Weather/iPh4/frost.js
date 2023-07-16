// Frost condition
// Based on UniAw3 from Ian Nicoll by Dacal

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

container.appendChild(createACloud());

function createACloud() {
    var image = document.createElement("img");
    image.id = "frost";	
    image.src = "Images/Weather/frost/frost.png";
    return image;
}
