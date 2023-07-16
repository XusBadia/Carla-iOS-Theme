var updateFileTimer = "";
var obj = new Array;
var where = "";
var whereOld = "";
var filename = "";
var meteorTimer;
var time_to_change_wall;
var dayhour;
var nighthour;
var ampm = false;		     // not necessary to change, the tweak changes it in settings

// AUTOMATIC CSS FOR i4 AND i5
if (screen.height > 500) { var iPhoneType = "iPh5"; } else { var iPhoneType = "iPh4"; }
if (iPhoneType == "iPh4") { replacejscssfile("Main", "iph5", "iph4", "css"); }

// Set a time out for all ajax requests, desactivate the cache.
$.ajaxSetup({timeout: 8000, cache: false}); 

// Touch init
var touchdownX;
var touchupX;
var touchX;
var stateX = 0;
var infodisplay = false;

// WEATHER CONDITIONS
var Conditions = [
	"thunderstorm",
	"thunderstorm",
	"showers_cloud",
	"thunderstorm",
	"thunderstorm",
	"sleet",
	"sleet",
	"sleet",
	"sleet",
	"showers_cloud",
	"sleet",
	"rain",
	"showers_cloud",
	"snow",
	"snow",
	"snow",
	"snow",
	"hail",
	"sleet",
	"fog",
	"fog",
	"haze",
	"fog",
	"wind",
	"wind",
	"frost",
	"cloud",
	"mostlycloudy",
	"mostlycloudy",
	"partlycloudy",
	"partlycloudy",
	"clear",
	"clear",
	"fair",
	"fair",
	"sleet",
	"clear",
	"thunderstorm",
	"thunderstorm",
	"thunderstorm",
	"showers_cloud",
	"snow",
	"snow",
	"snow",
	"partlycloudy",
	"thunderstorm",
	"snow",
	"thunderstorm",
	"blank"];

function init() {
updateClock();
setInterval(updateClock, 1000);
if (DemoMode == false) { updateWeather(); } else { Demo(); }
if (ShowWiper == false) { document.getElementById("wiperContainer").style.display = "none"; }

if (ChangeClick == false) {
	document.getElementById("TouchLayer").addEventListener("touchstart", touchStart, false);
	document.getElementById("TouchLayer").addEventListener("touchmove", touchMove, false);
	document.getElementById("TouchLayerTop").addEventListener("touchend", touchEnd, false);
	} else {
	document.getElementById("TouchLayer").addEventListener("mousedown", mouseDown, false);
	document.getElementById("TouchLayer").addEventListener("mouseup", mouseUp, false);
	document.getElementById("TouchLayerTop").addEventListener("click", touchEnd, false);
	}

if (useNeighborhood == false) {
	document.getElementById("city");
	document.getElementById("neighborhood").style.display = "none";

	} else {
	document.getElementById("city").style.display = "none";
	document.getElementById("neighborhood");

	}

if (useAdditionalLocationCity == false) {
	document.getElementById("city");

document.getElementById("extraCity").style.display = "none";

	} else {

document.getElementById("extraCity");
	document.getElementById("city").style.display = "none";
	}
}


function touchEnd(event) {
	if (infodisplay == false ) {
		document.getElementById('extendedInfo').className = "InfoMoveDown";
		document.getElementById('upperInfo').className = "InfoMoveUp";

document.getElementById("arrow").style.webkitTransform = "rotate(" + (360 + obj.direction*1) + "deg)";
		infodisplay = true;
		} else {
		document.getElementById('extendedInfo').className = "InfoMoveUp";
		document.getElementById('upperInfo').className = "InfoMoveDown";

document.getElementById("arrow").style.webkitTransform = "rotate(0deg)";

		infodisplay = false;
	}
}

function touchStart(event) {
	event.preventDefault();
	touchdownX = event.targetTouches[0].pageX;
}

function touchMove(event) {
	event.preventDefault();
	touchupX = event.targetTouches[0].pageX;
	touchX = touchupX - touchdownX;
	if  (touchX != 0) {	MoveElementX(); }
}

function mouseDown(event) {
	event.preventDefault();
	touchdownX = event.pageX;
}

function mouseUp(event) {
	event.preventDefault();
	touchupX = event.pageX;
	touchX = touchupX - touchdownX;
	if  (touchX != 0) {	MoveElementX(); }
}

function MoveElementX() {
	switch (stateX) {
		case 0 :
		if ( touchX < 0 ) {
			if (AnimatedWeather == true) { 
			document.getElementById("hourlyforecast").className = "forecastTranslateLeft";
			} else {
			document.getElementById("hourlyforecast").style.webkitAnimationName = "TranslateLeft";
			}
			stateX++;
		}
		break;
		case 1 :
		if ( touchX > 0 ) {
			if (AnimatedWeather == true) {
			document.getElementById("hourlyforecast").className = "forecastTranslateRight";
			} else {
			document.getElementById("hourlyforecast").style.webkitAnimationName = "TranslateRight";
			}
			stateX--;
			} 
		break;
	}
}

function Demo() {
	document.getElementById("city").innerHTML = "City";
	document.getElementById("desc").innerHTML = WeatherTest;
	document.getElementById("temp").innerHTML="12" + "&#176;";
	document.getElementById("highlowtemp").innerHTML = "H: 32\&#176 / L: 5\&#176";
	document.getElementById("xmlupdate").innerHTML = "[DEMO]";

document.getElementById("moon").style.backgroundImage = "url(Images/Weather/moon/" + moonphase + ".png)";
	document.getElementById("moon").style.webkitTransform = "translateX(150px)";
	document.getElementById("moonray").style.webkitTransform = "translateX(150px)";
	document.getElementById("sun").style.webkitTransform = "translateX(150px)";
	document.getElementById("sunray").style.left = 150 - 160 + "px";
	where = WhereTest;
	loadjscssfile ("Weather/"+iPhoneType, WeatherTest, "css");
	loadjscssfile ("Weather/"+iPhoneType, WeatherTest, "js");
	document.getElementById("weatherWall").src="Images/WeatherWalls/Picture/" + where + "_" + WeatherTest +".jpg";

document.getElementById("Overlay").style.display="none";
}

function updateClock() {
	var currentTime = new Date();
	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
	var currentDate = currentTime.getDate() < 10 ? '' + currentTime.getDate() : currentTime.getDate();
	time_to_change_wall = currentHours + currentMinutes/60;
	timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

	if (ampm == false) {
		timeOfDay = "";
		currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
		currentTimeString = currentHours + ":" + currentMinutes;
	} else {
		currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
//		currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
		currentHours = ( currentHours == 0 ) ? 12 : currentHours;
		currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;
	}
		
	document.getElementById("clock").innerHTML = currentTimeString;
	if (lang == "en") {	document.getElementById("date").innerHTML = days[currentTime.getDay()] + ", " + months[currentTime.getMonth()] + " " + currentDate; }
	else { document.getElementById("date").innerHTML = days[currentTime.getDay()] + " " + currentDate + " " + months[currentTime.getMonth()]; }
		
	// DAY OR NIGHT CHANGE
	if (dayhour != null) {
		if ((time_to_change_wall < dayhour) || (time_to_change_wall >= nighthour)) { var whereTmp = "night";	} else { var whereTmp = "day"; }
		if (whereTmp != where) { dealWithWeather(obj); } // Refresh the weather for day/night condition.
	}
}

function dealWithWeather(obj) {
// TIME INFO...
document.getElementById("lastupdate").innerHTML = currentTimeString + timeOfDay;
document.getElementById("xmlupdate").innerHTML = lastupdatetext + obj.updatetimestring.slice(11);

// MAIN INFORMATION
var sunriseh = parseInt(obj.sunrise.split(':')[0]) + GMT;
var sunrisem = obj.sunrise.split(':')[1];
var sunseth = parseInt(obj.sunset.split(':')[0]) + GMT;
var sunsetm = obj.sunset.split(':')[1];
dayhour = sunriseh + parseInt(sunrisem)/60;
nighthour = sunseth + parseInt(sunsetm)/60;
DurationOfDay = nighthour - dayhour;
DurationOfNight = 24 - DurationOfDay;
		
if (ampm == false) {
	var sunriseh = ( sunriseh < 10 ? "0" : "" ) + sunriseh;
	var sunseth = ( sunseth < 10 ? "0" : "" ) + sunseth;
	var sunrise = sunriseh + ":" + sunrisem;		
	var sunset = sunseth + ":" + sunsetm;
	} else {
	var timeOfSunset = ( sunseth < 12 ) ? "am" : "pm";
	var timeOfSunrise = ( sunriseh < 12 ) ? "am" : "pm";
	sunriseh = ( sunriseh > 12 ) ? sunriseh - 12 : sunriseh;
	sunriseh = ( sunriseh == 0 ) ? 12 : sunriseh;
	sunseth = ( sunseth > 12 ) ? sunseth - 12 : sunseth;
	sunseth = ( sunseth == 0 ) ? 12 : sunseth;
	var sunrise = sunriseh + ":" + sunrisem + " " + timeOfSunrise;	
	var sunset = sunseth + ":" + sunsetm + " " + timeOfSunset;
}

// CHANGE THE BACKGROUND FOR DAY OR NIGHT CONDITION
if ((time_to_change_wall < dayhour) || (time_to_change_wall >= nighthour)) { where = "night"; } else { where = "day"; }

// ADJUST THE HOURLY FORECAST FOR THE RIGHT SUNSET/SUNRISE TIME
for (i=0; i < 12; i++) {
	if ((parseInt(obj.time24hour[i].split(':')[0]) <(dayhour)) || (parseInt(obj.time24hour[i].split(':')[0]) >= (nighthour))) {
		obj.hwhere[i] = "night";
		} else {
		obj.hwhere[i] = "day";
	}
}

// ADDITIONAL INFORMATION
if (Distance_In_Miles == true) {
	var convertD = 0.621371;
	var visibilityunit = "miles";
	var windspeedunit = "mph";
} else {
	var convertD = 1;
	var visibilityunit = "km";
	var windspeedunit = "km/h";
}

if (Inches_Of_Mercury == true) {
	var convertP = 33.8638864;
	var pressureunit = "Inches Hg";
} else {
	var convertP = 1;
	var pressureunit = "mb";
}

document.getElementById("visibility").innerHTML = visibilitytext + Math.round(obj.visibility*convertD) + " " + visibilityunit;
document.getElementById("pressure").innerHTML = pressuretext + Math.round(obj.pressure/convertP) + " " + pressureunit;
document.getElementById("humidity").innerHTML = humiditytext + obj.humidity + "%";
document.getElementById("wind").innerHTML = windtext + Math.round(obj.windspeed*convertD) + " " + windspeedunit;
if (obj.rising == 0) document.getElementById('rising').innerHTML= "&larr;&rarr;";
if (obj.rising == 1) document.getElementById('rising').innerHTML= "&uarr;";
if (obj.rising == 2) document.getElementById('rising').innerHTML= "&darr;";
		
// END ADDITIONAL INFORMATION


document.getElementById("city").innerHTML = obj.city;
document.getElementById("neighborhood").innerHTML = obj.neighborhood;
document.getElementById("extraCity").innerHTML = obj.extraCity;
document.getElementById("temp").innerHTML = obj.temp + "&#176;";
document.getElementById("highlowtemp").innerHTML = hightext + obj.high[0] + "\&#176" + " / " + lowtext + obj.low[0]  + "\&#176";
document.getElementById("desc").innerHTML = WeatherDesc[obj.icon];
document.getElementById("sunrise").innerHTML = sunrisetext + " - " + sunrise;
document.getElementById("sunset").innerHTML = sunsettext + " - " + sunset;
document.getElementById("woeid").innerHTML = "Woeid : " + obj.woeid;
document.getElementById("zip").innerHTML = "Zip : " + obj.locationid;
document.getElementById("moon").style.backgroundImage = "url(Images/Weather/moon/" + obj.moonphase + ".png)";

//HOURLY
document.getElementById("Hour1").innerHTML = TwelveHourForecast(obj.time24hour[0]);
document.getElementById("Htemp1").innerHTML = obj.htemp[0] +  "&#176";
document.getElementById("Hicon1").src="Icon Sets/"+iconSet+"/"+AdjustIcon(obj.hcode[0], obj.hwhere[0])+".png";
document.getElementById("Hpop1").innerHTML= obj.hpop[0]+ "%";
document.getElementById("Hour2").innerHTML = TwelveHourForecast(obj.time24hour[1]);
document.getElementById("Htemp2").innerHTML = obj.htemp[1] +  "&#176";
document.getElementById("Hicon2").src="Icon Sets/"+iconSet+"/"+AdjustIcon(obj.hcode[1], obj.hwhere[1])+".png";
document.getElementById("Hpop2").innerHTML= obj.hpop[1]+ "%";
document.getElementById("Hour3").innerHTML = TwelveHourForecast(obj.time24hour[2]);
document.getElementById("Htemp3").innerHTML = obj.htemp[2] +  "&#176";
document.getElementById("Hicon3").src="Icon Sets/"+iconSet+"/"+AdjustIcon(obj.hcode[2], obj.hwhere[2])+".png";
document.getElementById("Hpop3").innerHTML= obj.hpop[2]+ "%";
document.getElementById("Hour4").innerHTML = TwelveHourForecast(obj.time24hour[3]);
document.getElementById("Htemp4").innerHTML = obj.htemp[3] +  "&#176";
document.getElementById("Hicon4").src="Icon Sets/"+iconSet+"/"+AdjustIcon(obj.hcode[3], obj.hwhere[3])+".png";
document.getElementById("Hpop4").innerHTML= obj.hpop[3]+ "%";
document.getElementById("Hour5").innerHTML = TwelveHourForecast(obj.time24hour[4]);
document.getElementById("Htemp5").innerHTML = obj.htemp[4] +  "&#176";
document.getElementById("Hicon5").src="Icon Sets/"+iconSet+"/"+AdjustIcon(obj.hcode[4], obj.hwhere[4])+".png";
document.getElementById("Hpop5").innerHTML= obj.hpop[4]+ "%";
document.getElementById("Hour6").innerHTML = TwelveHourForecast(obj.time24hour[5]);
document.getElementById("Htemp6").innerHTML = obj.htemp[5] +  "&#176";
document.getElementById("Hicon6").src="Icon Sets/"+iconSet+"/"+AdjustIcon(obj.hcode[5], obj.hwhere[5])+".png";
document.getElementById("Hpop6").innerHTML= obj.hpop[5]+ "%";
document.getElementById("Hour7").innerHTML = TwelveHourForecast(obj.time24hour[6]);
document.getElementById("Htemp7").innerHTML = obj.htemp[6] +  "&#176";
document.getElementById("Hicon7").src="Icon Sets/"+iconSet+"/"+AdjustIcon(obj.hcode[6], obj.hwhere[6])+".png";
document.getElementById("Hpop7").innerHTML= obj.hpop[6]+ "%";
document.getElementById("Hour8").innerHTML = TwelveHourForecast(obj.time24hour[7]);
document.getElementById("Htemp8").innerHTML = obj.htemp[7] +  "&#176";
document.getElementById("Hicon8").src="Icon Sets/"+iconSet+"/"+AdjustIcon(obj.hcode[7], obj.hwhere[7])+".png";
document.getElementById("Hpop8").innerHTML= obj.hpop[7]+ "%";
document.getElementById("Hour9").innerHTML = TwelveHourForecast(obj.time24hour[8]);
document.getElementById("Htemp9").innerHTML = obj.htemp[8] +  "&#176";
document.getElementById("Hicon9").src="Icon Sets/"+iconSet+"/"+AdjustIcon(obj.hcode[8], obj.hwhere[8])+".png";
document.getElementById("Hpop9").innerHTML= obj.hpop[8]+ "%";
document.getElementById("Hour10").innerHTML = TwelveHourForecast(obj.time24hour[9]);
document.getElementById("Htemp10").innerHTML = obj.htemp[9] +  "&#176";
document.getElementById("Hicon10").src="Icon Sets/"+iconSet+"/"+AdjustIcon(obj.hcode[9], obj.hwhere[9])+".png";
document.getElementById("Hpop10").innerHTML= obj.hpop[9]+ "%";
document.getElementById("Hour11").innerHTML = TwelveHourForecast(obj.time24hour[10]);
document.getElementById("Htemp11").innerHTML = obj.htemp[10] +	"&#176";
document.getElementById("Hicon11").src="Icon Sets/"+iconSet+"/"+AdjustIcon(obj.hcode[10], obj.hwhere[10])+".png";
document.getElementById("Hpop11").innerHTML= obj.hpop[10]+ "%";
document.getElementById("Hour12").innerHTML = TwelveHourForecast(obj.time24hour[11]);
document.getElementById("Htemp12").innerHTML = obj.htemp[11] +	"&#176;";
document.getElementById("Hicon12").src="Icon Sets/"+iconSet+"/"+AdjustIcon(obj.hcode[11], obj.hwhere[11])+".png";
document.getElementById("Hpop12").innerHTML= obj.hpop[11]+ "%";

// FORECAST
document.getElementById("Day1").innerHTML=days[obj.dayofweek[1]-1].substring(0);
document.getElementById("Day1Icon").src="Icon Sets/"+iconSet+"/"+obj.code[1]+".png";
document.getElementById("Day1HiLo").innerHTML=obj.high[1]+ "&#176;/ "+obj.low[1]+ "&#176;";
document.getElementById("Day2").innerHTML=days[obj.dayofweek[2]-1].substring(0);
document.getElementById("Day2Icon").src="Icon Sets/"+iconSet+"/"+obj.code[2]+".png";
document.getElementById("Day2HiLo").innerHTML=obj.high[2]+ "&#176;/ "+obj.low[2]+ "&#176;";
document.getElementById("Day3").innerHTML=days[obj.dayofweek[3]-1].substring(0);
document.getElementById("Day3Icon").src="Icon Sets/"+iconSet+"/"+obj.code[3]+".png";
document.getElementById("Day3HiLo").innerHTML=obj.high[3]+ "&#176;/ "+obj.low[3]+ "&#176;";
document.getElementById("Day4").innerHTML=days[obj.dayofweek[4]-1].substring(0);
document.getElementById("Day4Icon").src="Icon Sets/"+iconSet+"/"+obj.code[4]+".png";
document.getElementById("Day4HiLo").innerHTML=obj.high[4]+ "&#176;/ "+obj.low[4]+ "&#176;";
document.getElementById("Day5").innerHTML=days[obj.dayofweek[5]-1].substring(0);
document.getElementById("Day5Icon").src="Icon Sets/"+iconSet+"/"+obj.code[5]+".png";
document.getElementById("Day5HiLo").innerHTML=obj.high[5]+ "&#176;/ "+obj.low[5]+ "&#176;";

if ( AnimatedWeather == true ){ LaunchAnimations(); } else {
document.getElementById("Day0Icon").src = "Images/Static/"+AdjustIcon(obj.icon, where)+".png"; }

if ( ShowWeatherWalls == true ) { 
document.getElementById("weatherWall").src="Images/WeatherWalls/Picture/" + where + "_" + Conditions[obj.icon] +".jpg"; 
document.getElementById("Day0Icon").style.display = "none";
} else {
document.getElementById("weatherWall").src="Images/WeatherWalls/iOS7/" + where + "_" + Conditions[obj.icon] +".jpg";}		    
}

function updateWeather() {
//jQuery.get('file:///private/var/mobile/Documents/widgetweather.xml', function(data) {
jQuery.get('widgetweather.xml',function(data) {

obj.updatetimestring = $(data).find('updatetimestring').text();

if (updateFileTimer != obj.updatetimestring) {
	obj.high = new Array;
	obj.low  = new Array;
	obj.code = new Array;
	obj.daynumber = new Array;
	obj.dayofweek = new Array;
	obj.time24hour = new Array;
	obj.htemp = new Array;
	obj.hcode = new Array;
	obj.hpop = new Array;
	obj.hwhere = new Array;

	$(data).find('currentcondition').each( function() {
		obj.city =$(this).find('name').text();
		obj.neighborhood =$(this).find('extraLocNeighborhood').text();
		obj.extraCity =$(this).find('extraLocCity').text();
		obj.woeid = $(this).find('woeid').text();
		obj.locationid = $(this).find('locationid').text();	
		obj.temp = $(this).find('temp').text(); 
		obj.icon = $(this).find('code').text();
		obj.observationtime = $(this).find('observationtime').text();
		obj.moonphase = $(this).find('moonphase').text()*1;
		obj.sunset = $(this).find('sunsettime').text();
		obj.sunrise = $(this).find('sunrisetime').text();
		obj.tempUnit = $(this).find('celsius').text();
		obj.pressure = $(this).find('pressure').text();
		obj.humidity = $(this).find('humidity').text(); 
		obj.rising = $(this).find('rising').text()*1;		
		obj.visibility = $(this).find('visibility').text();
		obj.RealFeel = $(this).find('chill').text();
		obj.direction = $(data).find('direction').text();
		obj.windspeed = Math.round($(data).find('speed').text());
		obj.unitsdistance = $(this).find('unitsdistance').text();
		obj.unitspressure = $(this).find('unitspressure').text();
		obj.unitsspeed = $(this).find('unitsspeed').text();
		obj.unitstemperature = $(this).find('unitstemperature').text(); 
	});

	$(data).find('settings').each( function() {
		obj.timehour = $(this).find('timehour').text();
		ampm = (obj.timehour == "24h") ? false : true;	
	});

	var i=0;
	$(data).find('day').each( function() {
		obj.high[i] =$(this).find('high').text();
		obj.low[i] = $(this).find('low').text();
		obj.code[i] = $(this).find('code').text();	
		obj.daynumber[i] = $(this).find('daynumber').text();	
		obj.dayofweek[i] = $(this).find('dayofweek').text();
		i++;
	});

	var h=0;	
	$(data).find('hour').each( function() {
	obj.htemp[h] = $(this).find('temp').text();
	obj.hcode[h] = $(this).find('code').text();
	obj.hpop[h] = Math.round($(this).find('percentprecipitation').text());	
	obj.time24hour[h] = $(this).find('time24hour').text();
	h++;
	});

	updateFileTimer = obj.updatetimestring;
	dealWithWeather(obj);
}
}).fail(function() {
	document.getElementById("xmlupdate").innerHTML = "No XML file !";
});

refreshTimer = setTimeout(updateWeather, 20*1000);
}

// WORKAROUND FOR CORRECT ICONS IN ALL SITUATIONS AND TWELVE HOUR FORMAT*

function AdjustIcon(icon, whereTmp) {
	switch(whereTmp) {
		case "day":
			if (icon == 27) { icon = 28; }
			if (icon == 29) { icon = 30; }	
			if (icon == 31) { icon = 32; }	
			if (icon == 33) { icon = 34; }
		break;
		case "night":
			if (icon == 28) { icon = 27; }
			if (icon == 30) { icon = 29; }	
			if (icon == 32) { icon = 31; }	
			if (icon == 34) { icon = 33; }
		break;
	}
	return icon;
}

function TwelveHourForecast(hour) {
	if (ampm == true) { 
		hour = parseInt(hour.split(':')[0]);
		var timeOfhour = ( hour < 12 ) ? "AM" : "PM";
		hour = ( hour > 12 ) ? hour - 12 : hour;
		hour = ( hour == 0 ) ? 12 : hour;
		hour = hour + " " + timeOfhour;
	}
	return hour;
}

function LaunchAnimations() {
	// POSITION OF SUN/MOON
	if (where == "night") {
		if (time_to_change_wall < dayhour) { time_to_change_wall = time_to_change_wall +24 };
		pTranslate = parseInt(((time_to_change_wall - nighthour)/ DurationOfNight)*320);
		document.getElementById("moon").style.webkitTransform = "translateX("+pTranslate+"px)";
		document.getElementById("moonray").style.webkitTransform = "translateX("+pTranslate+"px)";					
	} else {
		pTranslate = parseInt(((time_to_change_wall - dayhour)/ DurationOfDay)*320);
		document.getElementById("sun").style.webkitTransform = "translateX("+pTranslate+"px)";
		document.getElementById("sunray").style.left = pTranslate - 160 + "px"; 				
	}
	
	if (filename == "") {
		filename = Conditions[obj.icon];
		whereOld = where;
		loadjscssfile ("Weather/"+iPhoneType, filename, "css");
		loadjscssfile ("Weather/"+iPhoneType, filename, "js");
	} else {
		if ((Conditions[obj.icon] != filename ) || (where != whereOld)) {
			whereOld = where;
			clearInterval(meteorTimer);
			delelement("starContainer");
			delelement("meteorContainer");
			delelement("wiperContainer");
			delelement("windContainer");
			delelement("frameContainer");
			delelement("cloudContainer");
			delelement("dropContainer");
			delelement("circleContainer");
			replacejscssfile("Weather/"+iPhoneType, filename, Conditions[obj.icon], "css");
			replacejscssfile("Weather/"+iPhoneType, filename, Conditions[obj.icon], "js");
			filename = Conditions[obj.icon];	
		}
	} 
}

function delelement(elem) {
var element = document.getElementById(elem);
while (element.firstChild) { element.removeChild(element.firstChild); }
}

function loadjscssfile(url, filename, filetype){
if (filetype=="js") {
	var fileref = document.createElement("script");
	fileref.type = "text/javascript";
	fileref.charset = "utf-8";
	fileref.src = "JavaScript/" + url + "/" + filename + ".js";
 }
if (filetype=="css") {
	var fileref = document.createElement("link");
	fileref.rel = "stylesheet";
	fileref.href = "Css/" + url + "/" + filename + ".css";
	fileref.type = "text/css";
	fileref.media = "screen";
 }
document.getElementsByTagName("head")[0].appendChild(fileref);
}

function createjscssfile(url, filename, filetype){
if (filetype=="js") {
	var fileref = document.createElement("script");
	fileref.type = "text/javascript";
	fileref.charset = "utf-8";
	fileref.src = "JavaScript/" + url + "/" + filename + ".js";
 }
if (filetype=="css") {
	var fileref = document.createElement("link");
	fileref.rel = "stylesheet";
	fileref.href = "Css/" + url + "/" + filename + ".css";
	fileref.type = "text/css";
	fileref.media = "screen";
 }
return fileref;
}

function replacejscssfile(url, oldfilename, newfilename, filetype){
var targetelement = (filetype=="js")? "script" : (filetype=="css")? "link" : "none";
var targetattr = (filetype=="js")? "src" : (filetype=="css")? "href" : "none";
var allsuspects = document.getElementsByTagName(targetelement);
for (var i = allsuspects.length; i>=0; i--) { 
		if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(oldfilename)!=-1) {
			var newelement = createjscssfile(url, newfilename, filetype);
			allsuspects[i].parentNode.replaceChild(newelement, allsuspects[i]);
			}
	}
}

