  /* Done by Dacal mod by DemoneLatino */ 
       /** TWITTER @DemoneLatino **/

/* *************************************** */
/* The following scripts will allow you to fine tune */
/* *************************************** */

/* *************************************** */
/* ************* CLOCK **************** */

var Clock = "12"; // <--- 12 or 24 choose you,change "12" to "24" if you use "24H"

/* *************************************** */
/* ************* LANGUAGE **************** */
//Choose Languages:  
//(fr) for french; 
//(de) for german; 
//(es) for spanish;
//(it) for italian;
//(en) for english;

var Lang = "en" // <-- change here

/* *************************************** */
/* ************* Weather  **************** */

// Use www.weather.com to find your weathercode
// For example searching for Milan Italy will get you this URL
// http://www.weather.com/weather/right-now/Milan+Italy+ITXX0042
// The last part ITXX0042 is the weathercode to use in "var locale"

var locale = "0" // leave "0" if you want to use the GPS or enter your code if you don't have GPS(myLocation) 

//you not have (GPS) "myLocation" download from cydia "GPS Weather Lockscreen" by crazyvivek(iOS 4.x - 7.x)contact me via cydia for more support or talk with me on TWITTER @DemoneLatino

var Temp = "c";  //  "c" for Celsius / "f" for fahrenheit.

var updateInterval = 5;  // refresh weather in minutes.

var iconSet = "YahooDemone"  // add your own set

var iconExt = ".jpg"  // icons extension

var useRealFeel = false // true or false

var source = 'yahooWeather' // Don't touch here!