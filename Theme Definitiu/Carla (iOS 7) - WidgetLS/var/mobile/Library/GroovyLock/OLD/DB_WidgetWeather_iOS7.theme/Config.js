// WIDGET WEATHER iOS7 styled //
// includes work by Dacal primarily, Marty McFly and Durben //

var lang = "en";

/*  LANGUAGES:
(no) for Norweigan
(it) for Italian
(fi) for Finland
(nl) for Dutch
(fr) for French
(ge) for German
(sp) for Spanish
(cn) for Chinese
(ru) for Russian
(en) for english
*/							     
					   

var useNeighborhood = false;		// Set to true if lockscreen shows a city name that is wrong. This will show your neighborhood in place of the city. 

var useAdditionalLocationCity = false;	// Set to true if your original city and neighborhood return an incorrect name. This should then work for you. use Neighborhood above needs to be false.

var GMT = 0;					// Adjust sunset/sunrise time if necessary (for Dacal, in Tunisia, Yahoo don't report it correctly ;).

var iconSet = "Yahoo";			// Name of the folder. Changes all mini icons for daily and hourly forecast. Choices are Yahoo HTC or White


var ShowWeatherWalls = false;		// true to show picture weather walls as background. false to show solid iOS 7 weather app backgrounds. If animated weather is false and show weather walls is false the stock iOS 7 weather icon images will show over the iOS 7 walls at top. 

var AnimatedWeather = true;		// True for animated weather. 

var ShowWiper = true;		  // True to show animated wiper during rain. 

var DropRain = true;			// True for classic rain drop

var Distance_In_Miles = false;	 // Set to true for windspeed in mph and visibility in miles (false, in kilometers).

var Inches_Of_Mercury = false;	 // Set to true for pressure in Inches of Mercury (false, in millibars).

var ChangeClick = false;

/*
FOR TESTING PURPOSE ONLY - Don't touch for normal use.
*/
var DemoMode = false;
var WeatherTest = "rain";
var WhereTest = "night";
var moonphase = 5;
