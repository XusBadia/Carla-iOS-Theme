 <!-- code by Dacal mod by DemoneLatino -->

function init ( )

{
  timeDisplay = document.createTextNode ( "" );
document.getElementById("clock").appendChild ( timeDisplay );

}

function updateClock ( )

{
  var currentTime = new Date ( );
  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );

if (Clock == "24") {
  currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
} 

if (Clock == "12") {
 
currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;
  document.getElementById("ampm").innerHTML = " " + timeOfDay;
}

// Compose the string for display
var currentTimeString = currentHours + " " + currentMinutes;  
//var currentTimeString1 = currentMinutes;  

  // Update the time display
document.getElementById("clock").firstChild.nodeValue = currentTimeString
document.getElementById("clockshadow").firstChild.nodeValue = currentTimeString;
//document.getElementById("mins").firstChild.nodeValue = currentTimeString1;
}

function calendarDate ( )
{
       var this_date_name_array = new Array("00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31")

        if (Lang == "en"){
	        var this_weekday_name_array=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	        var this_month_name_array=["January","February","March","April","May","June","July","August","September","October","November","December"];
        }
        if (Lang == "fr"){
			var this_weekday_name_array=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
			var this_month_name_array=['Janvier','Fevrir','Mars','Avril','Mai','Juin','Juillet','Aoüt','Septembre','Octobre','Novembre','Decembre'];
        }
        if (Lang == "de"){
			var this_weekday_name_array = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
			var this_month_name_array=["Januar","Februar","März","April","Mai","Juni","Juli","August","Septembre","Oktober","November","Dezember"];
        }
        if (Lang == "es"){
	        var this_weekday_name_array = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
	        var this_month_name_array=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        }
        if (Lang == "it"){
	        var this_weekday_name_array = ["Domenica","Lunedi","Martedi","Mercoledi","Giovedi","Venerdi","Sabato"];
	        var this_month_name_array=['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
        }       
        if (Lang == "ca"){
	        var this_weekday_name_array = ["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"];
	        var this_month_name_array=['Gener','Febrer','Març','Abril','Maig','Juny','Juliol','Agost','Setembre','Octubre','Novembre','Decembre'];
        }

			var this_date_timestamp = new Date()    
			var this_weekday = this_date_timestamp.getDay() 
			var this_date = this_date_timestamp.getDate()   
			var this_month = this_date_timestamp.getMonth() 
			var this_year = this_date_timestamp.getYear()  
			
			if (this_year < 1000)
				this_year+= 1900;
			
			if (this_year==101)
    this_year=2001;    

        if (Lang == "en"){
			document.getElementById("weekday").firstChild.nodeValue = this_weekday_name_array[this_weekday]//concat long date string
			document.getElementById("date").firstChild.nodeValue = this_date_name_array[this_date]//concat long date string
			document.getElementById("month").firstChild.nodeValue = " " + this_month_name_array[this_month] //concat long date string
			document.getElementById("year").firstChild.nodeValue = this_year;//concat long date string
		}

        if (Lang == "fr"){
			document.getElementById("weekday").firstChild.nodeValue = this_weekday_name_array[this_weekday]//concat long date string
			document.getElementById("date").firstChild.nodeValue = this_date_name_array[this_date]//concat long date string
			document.getElementById("month").firstChild.nodeValue = " " + this_month_name_array[this_month] //concat long date string
			document.getElementById("year").firstChild.nodeValue = this_year;//concat long date string
        }

        if (Lang == "de"){
			document.getElementById("weekday").firstChild.nodeValue = this_weekday_name_array[this_weekday]//concat long date string
			document.getElementById("date").firstChild.nodeValue = this_date_name_array[this_date]//concat long date string
			document.getElementById("month").firstChild.nodeValue = " " + this_month_name_array[this_month] //concat long date string
			document.getElementById("year").firstChild.nodeValue = this_year;//concat long date string
        }

        if (Lang == "es"){
			document.getElementById("weekday").firstChild.nodeValue = this_weekday_name_array[this_weekday]//concat long date string
			document.getElementById("date").firstChild.nodeValue = this_date_name_array[this_date]//concat long date string
			document.getElementById("month").firstChild.nodeValue = " " + this_month_name_array[this_month] //concat long date string
			document.getElementById("year").firstChild.nodeValue = this_year;//concat long date string
        }

        if (Lang == "it"){
			document.getElementById("weekday").firstChild.nodeValue = this_weekday_name_array[this_weekday]//concat long date string
			document.getElementById("date").firstChild.nodeValue = this_date_name_array[this_date]//concat long date string
			document.getElementById("month").firstChild.nodeValue = " " + this_month_name_array[this_month] //concat long date string
			document.getElementById("year").firstChild.nodeValue = this_year;//concat long date string
        }
        
        if (Lang == "ca"){
			document.getElementById("weekday").firstChild.nodeValue = this_weekday_name_array[this_weekday]//concat long date string
			document.getElementById("date").firstChild.nodeValue = this_date_name_array[this_date]//concat long date string
			document.getElementById("month").firstChild.nodeValue = " " + this_month_name_array[this_month] //concat long date string
			document.getElementById("year").firstChild.nodeValue = this_year;//concat long date string
        }
}

<!-- Weather by Dacal mod by Demonelatino -->

 /* add some translations for IT language */


var MiniIcons =

[
        "tstorm3",              //0     tornado
        "tstorm3",              //1     tropical storm
        "tstorm3",              //2     hurricane
        "tstorm3",              //3     severe thunderstorms
        "tstorm3",              //4     thunderstorms
        "sleet",                //5     mixed rain and snow
        "sleet",                //6     mixed rain and sleet
        "sleet",                //7     mixed snow and sleet
        "sleet",                //8     freezing drizzle
        "light_rain",           //9     drizzle
        "sleet",                //10    freezing rain
        "shower3",              //11    showers
        "shower3",              //12    showers
        "snow1",                //13    snow flurries
        "snow2",                //14    light snow showers
        "snow4",                //15    blowing snow
        "snow4",                //16    snow
        "hail",					//17    hail
        "sleet",                //18    sleet
        "mist",					//19    dust
        "fog",          		//20    foggy
        "fog",			        //21    haze
        "fog",					//22    smoky
        "windy",                //23    blustery
        "windy",                //24    windy
        "windy",                //25    cold
        "overcast",             //26    cloudy
        "cloudy4_night",        //27    mostly cloudy (night)
        "cloudy4",              //28    mostly cloudy (day)
        "cloudy1_night",        //29    partly cloudy (night)
        "cloudy1",              //30    partly cloudy (day)
        "sunny_night",          //31    clear (night)
        "sunny",                //32    sunny
        "fair_night",           //33    fair (night)
        "fair",					//34    fair (day)
        "hail",					//35    mixed rain and hail
        "hot",					//36    hot
        "tstorm1",              //37    isolated thunderstorms
        "tstorm2",              //38    scattered thunderstorms
        "tstorm2",              //39    scattered thunderstorms
        "shower1",              //40    scattered showers
        "snow5",                //41    heavy snow
        "snow3",                //42    scattered snow showers
        "snow5",                //43    heavy snow
        "cloudy1",              //44    partly cloudy
        "tstorm3",              //45    thundershowers
        "snow2",                //46    snow showers
        "tstorm1",              //47    isolated thundershowers
        "dunno",                //3200  not available
]



function constructError (string)
{
        return {error:true, errorString:string};
}

function findChild (element, nodeName)
{
        var child;

        for (child = element.firstChild; child != null; child = child.nextSibling)
        {
                if (child.nodeName == nodeName)
                        return child;
        }

        return null;
}

function fetchWeatherData (callback, zip)
{
        if (Temp == "c"){
        varUnit = 'c'
        }
        if (Temp == "f"){
        varUnit = 'f'
        }

url="http://xml.weather.yahoo.com/forecastrss/"

        var xml_request = new XMLHttpRequest();
        xml_request.onload = function(e) {xml_loaded(e, xml_request, callback);}
        xml_request.overrideMimeType("text/xml");
        xml_request.open("GET", url+zip+'_'+varUnit+'.xml');
        xml_request.setRequestHeader("Cache-Control", "no-cache");
        xml_request.send(null); 

        return xml_request;
}

function xml_loaded (event, request, callback)
{
        if (request.responseXML)
        {
                var obj = {error:false, errorString:null};
                var effectiveRoot = findChild(findChild(request.responseXML, "rss"), "channel");
                obj.city = findChild(effectiveRoot, "yweather:location").getAttribute("city");
                obj.realFeel = findChild(effectiveRoot, "yweather:wind").getAttribute("chill");//Only accounts for windChill
                conditionTag = findChild(findChild(effectiveRoot, "item"), "yweather:condition");
                obj.temp = conditionTag.getAttribute("temp");
                obj.icon = conditionTag.getAttribute("code");
                obj.description = conditionTag.getAttribute("text");
                var forecast = findChild(findChild(effectiveRoot, "item"), "yweather:forecast");

                obj.todayhigh = forecast.getAttribute("high");
                obj.todaylow = forecast.getAttribute("low");

                if (obj.description == "Unknown") {
                        obj.description = forecast.getAttribute("text");
                        obj.icon = forecast.getAttribute("code");
                }

                if (obj.icon == 3200) obj.icon = 48;    
                callback (obj); 
        }else{
                callback ({error:true, errorString:"XML request failed. no responseXML"});
        }

}

function validateWeatherLocation (location, callback)
{
        var obj = {error:false, errorString:null, cities: new Array};
        obj.cities[0] = {zip: location}; //Not very clever, are we?
        callback (obj);
}

var useRealFeel = false //true|false
var stylesheet = 'myStyle' //'originalBubble'|'myopia'|'iconOnly'|'split'
var source = 'yahooWeather' //'appleAccuweatherStolen'|'yahooWeather'

var postal;

if(iconSet == null || iconSet == 'null'){
        var iconSet = stylesheet;
}

var headID = document.getElementsByTagName("head")[0];     
var styleNode = document.createElement('link');
styleNode.type = 'text/css';
styleNode.rel = 'stylesheet';
styleNode.href = 'Stylesheets/'+stylesheet+'.css';
headID.appendChild(styleNode);

var scriptNode = document.createElement('script');
scriptNode.type = 'text/javascript';
scriptNode.src = 'Sources/'+source+'.js';
headID.appendChild(scriptNode);
var yaweid;

function onLoad(){
        if (locale == 0) { UpdateLocation(); }
else { validateWeatherLocation(escape(locale).replace(/^%u/g, "%"), setPostal); }
setInterval('fetchWeatherData(dealWithWeather,postal)', 1000*60*updateInterval);
}

function setPostal(obj){

        if (obj.error == false){
                if(obj.cities.length > 0){
                        postal = escape(obj.cities[0].zip).replace(/^%u/g, "%")
                        fetchWeatherData(dealWithWeather,postal);
                }else{
                        document.getElementById("city").innerText="Not Found";
                }
        }else{
                document.getElementById("city").innerText=obj.errorString;      
        }
}

function dealWithWeather(obj){



        if (obj.error == false){

                document.getElementById("city").innerHTML=obj.city + " ";

                document.getElementById("desc").innerText=obj.description.toLowerCase();

				document.getElementById("hightemp").innerHTML = "&uarr;" + obj.todayhigh + "&#176;";

                document.getElementById("lowtemp").innerHTML = "&darr;" + obj.todaylow + "&#176;";

                     // TRANSLATIONS



                       if (Lang == "fr"){

                       translatedesc=obj.description.toLowerCase();

                        if (translatedesc=='sunny') { document.getElementById("desc").innerHTML='Ensoleill&eacute;'; }

                        if (translatedesc=='drizzle') { document.getElementById("desc").innerHTML='Bruine'; }

                        if (translatedesc=='heavy snow') { document.getElementById("desc").innerHTML='Fortes chutes de neige'; }

                        if (translatedesc=='heavy rain') { document.getElementById("desc").innerHTML='Fortes averses'; }

                        if (translatedesc=='rain and snow') { document.getElementById("desc").innerHTML='Pluie et neige'; }

                        if (translatedesc=='mixed rain and snow') { document.getElementById("desc").innerHTML='Pluie et neige m&eacute;l&eacute;es'; }

                        if (translatedesc=='fair') { document.getElementById("desc").innerHTML='Ciel d&eacute;gag&eacute;';    }

                        if (translatedesc=='mostly sunny') { document.getElementById("desc").innerHTML='Quelques nuages';         }

                        if (translatedesc=='partly sunny') { document.getElementById("desc").innerHTML='Partiellement nuageux';   }

                        if (translatedesc=='intermittent clouds') { document.getElementById("desc").innerHTML='Nuages &eacute;parses';   }

                        if (translatedesc=='hazy sunshine') { document.getElementById("desc").innerHTML='L&eacute;g&egrave;rement voil&eacute;';        }

                        if (translatedesc=='haze') { document.getElementById("desc").innerHTML='Brume'; }

                        if (translatedesc=='mostly cloudy') { document.getElementById("desc").innerHTML='Tr&egrave;s nuageux';   }

                        if (translatedesc=='cloudy') { document.getElementById("desc").innerHTML='Nuageux';    }

                        if (translatedesc=='fog') { document.getElementById("desc").innerHTML='Brouillard';       }

                        if (translatedesc=='showers') { document.getElementById("desc").innerHTML='Averses';    }

                        if (translatedesc=='partly sunny with showers') { document.getElementById("desc").innerHTML='Soleil et averses';    }

                        if (translatedesc=='thunderstorms') { document.getElementById("desc").innerHTML='Orages';    }

                        if (translatedesc=='thunderstorm') { document.getElementById("desc").innerHTML='Orage'; }

                        if (translatedesc=='mostly cloudy with thunder showers') { document.getElementById("desc").innerHTML='Tr&egrave;s nuageux et fortes averses';     }

                        if (translatedesc=='partly sunny with thunder showers') { document.getElementById("desc").innerHTML='Soleil et fortes averses';    }

                        if (translatedesc=='light rain') { document.getElementById("desc").innerHTML='L&eacute;g&egrave;re pluie';        }

                        if (translatedesc=='rain') { document.getElementById("desc").innerHTML='Pluie'; }

                        if (translatedesc=='flurries') { document.getElementById("desc").innerHTML='Averses de neige';  }

                        if (translatedesc=='mostly cloudy with flurries') { document.getElementById("desc").innerHTML='Tr&egrave;s nuageux avec neige';   }

                        if (translatedesc=='partly sunny with flurries') { document.getElementById("desc").innerHTML='Soleil et averses de neige';    }

                        if (translatedesc=='snow flurries') { document.getElementById("desc").innerHTML='Averses de neige';    }

                        if (translatedesc=='snow showers') { document.getElementById("desc").innerHTML='Averses de neige';        }

                        if (translatedesc=='snow') { document.getElementById("desc").innerHTML='Neige'; }

                        if (translatedesc=='mostly cloudy with snow') { document.getElementById("desc").innerHTML='Tr&egrave;s nuageux et neige';    }

                        if (translatedesc=='ice') { document.getElementById("desc").innerHTML='Glace'; }

                        if (translatedesc=='sleet') { document.getElementById("desc").innerHTML='Verglas';    }

                        if (translatedesc=='freezing rain') { document.getElementById("desc").innerHTML='Pluie vergla&ccedil;ante';      }

                        if (translatedesc=='rain and snow mixed') { document.getElementById("desc").innerHTML='Pluie et neige m&eacute;l&eacute;es';    }

                        if (translatedesc=='hot') { document.getElementById("desc").innerHTML='Chaud'; }

                        if (translatedesc=='cold') { document.getElementById("desc").innerHTML='Froid'; }

                        if (translatedesc=='windy') { document.getElementById("desc").innerHTML='Vent';    }

                        if (translatedesc=='clear') { document.getElementById("desc").innerHTML='Clair'; }

                        if (translatedesc=='mostly clear') { document.getElementById("desc").innerHTML='Tr&egrave;s clair'; }

                        if (translatedesc=='partly cloudy') { document.getElementById("desc").innerHTML='Partiellement nuageux';         }

                        if (translatedesc=='hazy') { document.getElementById("desc").innerHTML='Brume'; }

                        if (translatedesc=='partly cloudy with showers') { document.getElementById("desc").innerHTML='Partiellement nuageux et averses';        }

                        if (translatedesc=='mostly cloudy with showers') { document.getElementById("desc").innerHTML='Tr&egrave;s nuageux et averses';    }

                        if (translatedesc=='party cloudy with thunder showers') { document.getElementById("desc").innerHTML='Partiellement nuageux et fortes averses';   }

                        if (translatedesc=='foggy') { document.getElementById("desc").innerHTML='Brouillard';    }

                        if (translatedesc=='light snow') { document.getElementById("desc").innerHTML='Flocons de neige'; }

                        if (translatedesc=='light snow showers') { document.getElementById("desc").innerHTML='L&eacute;g&egrave;res chutes de neige'; }       

                        if (translatedesc=='rain shower') { document.getElementById("desc").innerHTML='Averses';    }

                        if (translatedesc=='light drizzle') { document.getElementById("desc").innerHTML='L&eacute;g&egrave;re bruine';    }

                        if (translatedesc=='mixed rain and sleet') { document.getElementById("desc").innerHTML='Pluie et verglas';    }

                        if (translatedesc=='mixed snow and sleet') { document.getElementById("desc").innerHTML='Neige et verglas';    }

                        if (translatedesc=='severe thunderstorms') { document.getElementById("desc").innerHTML='Gros orages';    }

                        if (translatedesc=='hurricane') { document.getElementById("desc").innerHTML='Ouragan';    }

                        if (translatedesc=='tropical storm') { document.getElementById("desc").innerHTML='Orage tropical';        }

                        if (translatedesc=='tornado') { document.getElementById("desc").innerHTML='Tornade';    }

                        if (translatedesc=='freezing drizzle') { document.getElementById("desc").innerHTML='Buine vergla&ccedil;ante';    }

                        if (translatedesc=='blowing snow') { document.getElementById("desc").innerHTML='Rafales de neige'; }

                        if (translatedesc=='hail') { document.getElementById("desc").innerHTML='Gr&ecirc;le'; }

                        if (translatedesc=='dust') { document.getElementById("desc").innerHTML='Poussi&eacute;reux';    }

                        if (translatedesc=='somky') { document.getElementById("desc").innerHTML='Brumeux';    }

                        if (translatedesc=='blustery') { document.getElementById("desc").innerHTML='Temp&ecirc;te';    }

                        if (translatedesc=='mixed rain and hail') { document.getElementById("desc").innerHTML='Pluie et Gr&ecirc;le m&eacute;l&eacute;es';    }

                        if (translatedesc=='isolated thunderstorms') { document.getElementById("desc").innerHTML='Orages isol&eacute;s';    }

                        if (translatedesc=='isolated thundershowers') { document.getElementById("desc").innerHTML='Averses isol&eacute;s';    }

                        if (translatedesc=='scattered thunderstorms') { document.getElementById("desc").innerHTML='Orages &eacute;parses';    }

                        if (translatedesc=='scattered showers') { document.getElementById("desc").innerHTML='Averses &eacute;parses';    }

                        if (translatedesc=='scattered snow showers') { document.getElementById("desc").innerHTML='Chutes de neige &eacute;parses';    }

                        if (translatedesc=='light rain with thunder') { document.getElementById("desc").innerHTML='Pluie l&eacute;g&egrave;re et &eacute;clairs';        }

                        if (translatedesc=='not available') { document.getElementById("desc").innerHTML='Non disponible';        }

                        if (translatedesc=='drifting snow/windy') { document.getElementById("desc").innerHTML='Neige poudreuse et vent';    }

                        if (translatedesc=='light rain shower') { document.getElementById("desc").innerHTML='L&eacute;g&egrave;re averse'; }

                        if (translatedesc=='thunder') { document.getElementById("desc").innerHTML='Tonnerre'; }

                        if (translatedesc=='mostly cloudy/windy') { document.getElementById("desc").innerHTML='Tr&egrave;s nuageux et vent'; }

                        if (translatedesc=='sandstorm') { document.getElementById("desc").innerHTML='Temp&ecirc;te de sable'; }

                        if (translatedesc=='squalls/windy') { document.getElementById("desc").innerHTML='Rafales de vent'; }

                        if (translatedesc=='sand') { document.getElementById("desc").innerHTML='Sable'; }

                        if (translatedesc=='sandstorm/windy') { document.getElementById("desc").innerHTML='Temp&ecirc;te de sable et vent'; }

                        if (translatedesc=='squalls') { document.getElementById("desc").innerHTML='Rafales'; }

                        }



                       if (Lang == "de"){

                        translatedesc=obj.description.toLowerCase();

                        if (translatedesc=='tornado') { document.getElementById("desc").innerHTML='Tornado!'; }

                        if (translatedesc=='tropical storm') { document.getElementById("desc").innerHTML='Tropischer Sturm'; }

                        if (translatedesc=='hurricane') { document.getElementById("desc").innerHTML='Wirbelsturm'; }

                        if (translatedesc=='severe thunderstorms') { document.getElementById("desc").innerHTML='Schwere Gewitter'; }

                        if (translatedesc=='thunderstorms') { document.getElementById("desc").innerHTML='Gewitter'; }

                        if (translatedesc=='mixed rain and snow') { document.getElementById("desc").innerHTML='Regen und Schnee'; }

                        if (translatedesc=='mixed rain and sleet') { document.getElementById("desc").innerHTML='Graupelschauer'; }

                        if (translatedesc=='mixed snow and sleet') { document.getElementById("desc").innerHTML='Schneeregen'; }

                        if (translatedesc=='freezing drizzle') { document.getElementById("desc").innerHTML='Gefrierender Nieselregen'; }

                        if (translatedesc=='drizzle') { document.getElementById("desc").innerHTML='Nieselregen'; }

                        if (translatedesc=='freezing rain') { document.getElementById("desc").innerHTML='Gefrierender Regen'; }

                        if (translatedesc=='showers') { document.getElementById("desc").innerHTML='Schauer'; }

                        if (translatedesc=='snow flurries') { document.getElementById("desc").innerHTML='Schneegest&ouml;ber'; }

                        if (translatedesc=='light snow showers') { document.getElementById("desc").innerHTML='Leichte Schneeschauer'; }

                        if (translatedesc=='light snow grains') { document.getElementById("desc").innerHTML='Leichte Schneeschauer'; }

                        if (translatedesc=='blowing snow') { document.getElementById("desc").innerHTML='Schneetreiben'; }

                        if (translatedesc=='snow') { document.getElementById("desc").innerHTML='Schnee'; }

                        if (translatedesc=='hail') { document.getElementById("desc").innerHTML='Hagel'; }

                        if (translatedesc=='sleet') { document.getElementById("desc").innerHTML='Schneeregen'; }

                        if (translatedesc=='dust') { document.getElementById("desc").innerHTML='Staubig'; }

                        if (translatedesc=='foggy') { document.getElementById("desc").innerHTML='Nebelig'; }

                        if (translatedesc=='haze') { document.getElementById("desc").innerHTML='Dunstschleier'; }

                        if (translatedesc=='smoky') { document.getElementById("desc").innerHTML='Dunstig'; }

                        if (translatedesc=='blustery') { document.getElementById("desc").innerHTML='St&uuml;rmisch'; }

                        if (translatedesc=='windy') { document.getElementById("desc").innerHTML='Windig'; }

                        if (translatedesc=='cold') { document.getElementById("desc").innerHTML='Kalt'; }

                        if (translatedesc=='cloudy') { document.getElementById("desc").innerHTML='Bew&ouml;lkt'; }

                        if (translatedesc=='mostly cloudy') { document.getElementById("desc").innerHTML='Meist Bew&ouml;lkt'; }

                        if (translatedesc=='partly cloudy') { document.getElementById("desc").innerHTML='Teilweise Bew&ouml;lkt'; }

                        if (translatedesc=='clear') { document.getElementById("desc").innerHTML='Klar'; }

                        if (translatedesc=='sunny') { document.getElementById("desc").innerHTML='Sonnig'; }

                        if (translatedesc=='fair') { document.getElementById("desc").innerHTML='Heiter'; }

                        if (translatedesc=='mixed rain and hail') { document.getElementById("desc").innerHTML='Regen und Hagel'; }

                        if (translatedesc=='hot') { document.getElementById("desc").innerHTML='Heiss'; }

                        if (translatedesc=='isolated thunderstorms') { document.getElementById("desc").innerHTML='&Ouml;rtliche Gewitter'; }

                        if (translatedesc=='scattered thunderstorms') { document.getElementById("desc").innerHTML='Vereinzelte Gewitter'; }

                        if (translatedesc=='scattered showers') { document.getElementById("desc").innerHTML='Vereinzelte Schauer'; }

                        if (translatedesc=='heavy snow') { document.getElementById("desc").innerHTML='Starker Schneefall'; }

                        if (translatedesc=='scattered snow showers') { document.getElementById("desc").innerHTML='Vereinzelte Schneeschauer'; }

                        if (translatedesc=='partly cloudy') { document.getElementById("desc").innerHTML='Teilweise Bew&ouml;lkt'; }

                        if (translatedesc=='thundershowers') { document.getElementById("desc").innerHTML='Gewitter'; }

                        if (translatedesc=='snow showers') { document.getElementById("desc").innerHTML='Scheeschauer'; }

                        if (translatedesc=='isolated thundershowers') { document.getElementById("desc").innerHTML='Ouml;rtliche Gewitterschauer'; }

                        if (translatedesc=='light rain shower') { document.getElementById("desc").innerHTML='Leichte Regenschauer'; }

                        if (translatedesc=='not available') { document.getElementById("desc").innerHTML='nicht verfuegbar'; }

                        if (translatedesc=='showers in the vicinity') { document.getElementById("desc").innerHTML='Schauer'; }

                        if (translatedesc=='partly sunny') { document.getElementById("desc").innerHTML='Teilweise Sonnig'; }

                        if (translatedesc=='ground fog') { document.getElementById("desc").innerHTML='Bodennebel'; }

                        if (translatedesc=='light drizzle') { document.getElementById("desc").innerHTML='Leichter Nieselregen'; }

                        if (translatedesc=='light rain') { document.getElementById("desc").innerHTML='Leichter Regen'; }

                        if (translatedesc=='mist') { document.getElementById("desc").innerHTML='Nebel'; }

                        if (translatedesc=='fog') { document.getElementById("desc").innerHTML='Nebel'; }

                        if (translatedesc=='rain') { document.getElementById("desc").innerHTML='Regen'; }

                        if (translatedesc=='rain shower') { document.getElementById("desc").innerHTML='Regenschauer'; }

                        if (translatedesc=='severe thunderstorm/windy') { document.getElementById("desc").innerHTML='Schwere Gewitter/Windig'; }

                        }



                     if (Lang == "it"){

                        translatedesc=obj.description.toLowerCase();

                        if (translatedesc=='sunny') { document.getElementById("desc").innerHTML='Soleggiato'; }

                        if (translatedesc=='drizzle') { document.getElementById("desc").innerHTML='Pioggerella'; }

                        if (translatedesc=='drizzle/windy') { document.getElementById("desc").innerHTML='Pioggerella/vento'; }

                        if (translatedesc=='light rain/windy') { document.getElementById("desc").innerHTML='Pioggerella/vento'; }

                        if (translatedesc=='light rain shower/windy') { document.getElementById("desc").innerHTML='Pioggia mista/vento'; }

                        if (translatedesc=='light drizzle/windy') { document.getElementById("desc").innerHTML='Pioggerella/vento'; }

                        if (translatedesc=='showers in the vicinity') { document.getElementById("desc").innerHTML='Pioggia nelle vicinanze'; }

                        if (translatedesc=='heavy snow') { document.getElementById("desc").innerHTML='Forti nevicate'; }

                        if (translatedesc=='heavy rain') { document.getElementById("desc").innerHTML='Forti piogge'; }

                        if (translatedesc=='heavy rain shower/windy') { document.getElementById("desc").innerHTML='Forti piogge/vento'; }


                        if (translatedesc=='rain and snow') { document.getElementById("desc").innerHTML='Pioggia e neve'; }

                        if (translatedesc=='mixed rain and snow') { document.getElementById("desc").innerHTML='Pioggia mista a neve'; }

                        if (translatedesc=='fair') { document.getElementById("desc").innerHTML='Bel Tempo';    }

                        if (translatedesc=='mostly sunny') { document.getElementById("desc").innerHTML='Soleggiato';      }

                        if (translatedesc=='partly sunny') { document.getElementById("desc").innerHTML='Parzialmente soleggiato';   }

                        if (translatedesc=='intermittent clouds') { document.getElementById("desc").innerHTML='Nubi intermittenti';      }

                        if (translatedesc=='hazy sunshine') { document.getElementById("desc").innerHTML='Sole coperto'; }

                        if (translatedesc=='haze') { document.getElementById("desc").innerHTML='Foschia'; }

                        if (translatedesc=='mist') { document.getElementById("desc").innerHTML='Foschia'; }

                        if (translatedesc=='mostly cloudy') { document.getElementById("desc").innerHTML='Molto Nuvoloso';      }

                        if (translatedesc=='cloudy') { document.getElementById("desc").innerHTML='Nuvoloso';    }

                        if (translatedesc=='fog') { document.getElementById("desc").innerHTML='Nebbia';   }
                        if (translatedesc=='shallow fog') { document.getElementById("desc").innerHTML='Nebbia superficiale';   }

                        if (translatedesc=='showers') { document.getElementById("desc").innerHTML='Piogge';     }

                        if (translatedesc=='partly sunny with showers') { document.getElementById("desc").innerHTML='Parzialmente soleggiato con rovesci';    }

                        if (translatedesc=='thunderstorms') { document.getElementById("desc").innerHTML='Temporali';    }

                        if (translatedesc=='thunder in the vicinity') { document.getElementById("desc").innerHTML='Temporali nelle vicinanze';    }

                        if (translatedesc=='heavy thunderstorm') { document.getElementById("desc").innerHTML='Temporali forti';    }

                        if (translatedesc=='thunderstorm') { document.getElementById("desc").innerHTML='Temporali';    }

                        if (translatedesc=='mostly cloudy with thunder showers') { document.getElementById("desc").innerHTML='Molto nuvoloso con rovesci';        }

                        if (translatedesc=='partly sunny with thunder showers') { document.getElementById("desc").innerHTML='Parzialmente Soleggiato con rovesci';    }

                        if (translatedesc=='light rain') { document.getElementById("desc").innerHTML='Pioggerella';       }

                        if (translatedesc=='light drizzle') { document.getElementById("desc").innerHTML='Pioggerella';       }

                        if (translatedesc=='light freezing drizzle') { document.getElementById("desc").innerHTML='Pioggerella gelata';       }

                        if (translatedesc=='rain') { document.getElementById("desc").innerHTML='Pioggia';    }

                        if (translatedesc=='flurries') { document.getElementById("desc").innerHTML='Raffiche';  }

                        if (translatedesc=='mostly cloudy with flurries') { document.getElementById("desc").innerHTML='Molto nuvoloso con folate';   }

                        if (translatedesc=='partly sunny with flurries') { document.getElementById("desc").innerHTML='Parzialmente soleggiato con folate';    }

                        if (translatedesc=='snow flurries') { document.getElementById("desc").innerHTML='Folate di neve';    }

                        if (translatedesc=='snow showers') { document.getElementById("desc").innerHTML='Nevicate';    }

                        if (translatedesc=='snow') { document.getElementById("desc").innerHTML='Neve';    }

                        if (translatedesc=='mostly cloudy with snow') { document.getElementById("desc").innerHTML='Molto nuvoloso con neve';    }

                        if (translatedesc=='ice') { document.getElementById("desc").innerHTML='Gelo';   }

                        if

(translatedesc=='ice crystals') { document.getElementById("desc").innerHTML='cristalli di ghiaccio/gelo';   }

                        if (translatedesc=='sleet') { document.getElementById("desc").innerHTML='Nevischio';    }

                        if (translatedesc=='light sleet') { document.getElementById("desc").innerHTML='Neve leggera';    }

                        if (translatedesc=='freezing rain') { document.getElementById("desc").innerHTML='Pioggia gelata';        }

                        if (translatedesc=='rain and snow mixed') { document.getElementById("desc").innerHTML='Pioggia mista a neve';   }

                        if (translatedesc=='hot') { document.getElementById("desc").innerHTML='Caldo';    }

                        if (translatedesc=='cold') { document.getElementById("desc").innerHTML='Freddo';   }

                        if (translatedesc=='windy') { document.getElementById("desc").innerHTML='Ventoso';    }

                        if (translatedesc=='clear') { document.getElementById("desc").innerHTML='Sereno';    }

                        if (translatedesc=='mostly clear') { document.getElementById("desc").innerHTML='Per lo pi sereno';      }

                        if (translatedesc=='partly cloudy') { document.getElementById("desc").innerHTML='Parzialmente Nuvoloso';     }

                        if (translatedesc=='hazy') { document.getElementById("desc").innerHTML='Foschia';    }

                        if (translatedesc=='partly cloudy with showers') { document.getElementById("desc").innerHTML='Parzialmente nuvoloso con rovesci';       }

                        if (translatedesc=='mostly cloudy with showers') { document.getElementById("desc").innerHTML='Molto nuvoloso con rovesci';        }

                        if (translatedesc=='party cloudy with thunder showers') { document.getElementById("desc").innerHTML='Parzialmente nuvoloso con temporali';       }

                        if (translatedesc=='foggy') { document.getElementById("desc").innerHTML='Nebbia';        }

                        if (translatedesc=='light snow') { document.getElementById("desc").innerHTML='Neve leggera'; }

                        if (translatedesc=='light snow showers') { document.getElementById("desc").innerHTML='Precipitazioni nevose leggere'; }       

                        if (translatedesc=='rain shower') { document.getElementById("desc").innerHTML='Pioggia';    }

                        if (translatedesc=='drizzle') { document.getElementById("desc").innerHTML='Pioggerella';    }

                        if (translatedesc=='mixed rain and sleet') { document.getElementById("desc").innerHTML='Pioggia mista e nevischio';    }

                        if (translatedesc=='mixed snow and sleet') { document.getElementById("desc").innerHTML='Neve mista e nevischio';    }

                        if (translatedesc=='severe thunderstorms') { document.getElementById("desc").innerHTML='Forti temporali';        }

                        if (translatedesc=='hurricane') { document.getElementById("desc").innerHTML='Uragano';    }

                        if (translatedesc=='tropical storm') { document.getElementById("desc").innerHTML='Tempesta tropicalel';    }

                        if (translatedesc=='tornado') { document.getElementById("desc").innerHTML='Tornado';    }

                        if (translatedesc=='freezing drizzle') { document.getElementById("desc").innerHTML='Pioggia gelata';      }

                        if (translatedesc=='blowing snow') { document.getElementById("desc").innerHTML='Vento e neve'; }

                        if (translatedesc=='hail') { document.getElementById("desc").innerHTML='Grandine'; }

                        if (translatedesc=='dust') { document.getElementById("desc").innerHTML='Polvere';       }

                        if (translatedesc=='smoky') { document.getElementById("desc").innerHTML='Fumoso';    }

                        if (translatedesc=='blustery') { document.getElementById("desc").innerHTML='Tempestoso';    }

                        if (translatedesc=='mixed rain and hail') { document.getElementById("desc").innerHTML='pioggia e grandine mista';    }

                        if (translatedesc=='isolated thunderstorms') { document.getElementById("desc").innerHTML='Temporali isolati';    }

                        if (translatedesc=='isolated thundershowers') { document.getElementById("desc").innerHTML='Rovesci temporaleschi isolati';    }

                        if (translatedesc=='scattered thunderstorms') { document.getElementById("desc").innerHTML='Temporali sparsi';    }

                        if (translatedesc=='scattered showers') { document.getElementById("desc").innerHTML='Piogge sparse';     }

                        if (translatedesc=='scattered snow showers') { document.getElementById("desc").innerHTML='Precipitazioni di neve sparse';    }

                        if (translatedesc=='light rain with thunder') { document.getElementById("desc").innerHTML='Pioggia e Tuoni';    }

                        if (translatedesc=='not available') { document.getElementById("desc").innerHTML='Non disponibile';    }

                        if (translatedesc=='drifting snow/windy') { document.getElementById("desc").innerHTML='Tempesta di neve/vento';    }

                        if (translatedesc=='light rain shower') { document.getElementById("desc").innerHTML='Pioggia leggera';    }

                        if (translatedesc=='thunder') { document.getElementById("desc").innerHTML='Tuoni'; }

                        if (translatedesc=='mostly cloudy/windy') { document.getElementById("desc").innerHTML='Molto nuvoloso/Vento'; }

                        if (translatedesc=='sandstorm') { document.getElementById("desc").innerHTML='Tempesta di sabbia'; }

                        if (translatedesc=='squalls/windy') { document.getElementById("desc").innerHTML='Raffiche di vento / vento'; }

                        if (translatedesc=='sand') { document.getElementById("desc").innerHTML='Sabbia'; }

                        if (translatedesc=='sandstorm/windy') { document.getElementById("desc").innerHTML='Tempeste di sabbia e  vento'; }

                     }
 

                       if (Lang == "es"){

                        translatedesc=obj.description.toLowerCase();

                        if (translatedesc=='sunny') { document.getElementById("desc").innerHTML='Soleado'; }

                        if (translatedesc=='drizzle') { document.getElementById("desc").innerHTML='Llovizna'; }

                        if (translatedesc=='heavy snow') { document.getElementById("desc").innerHTML='Nieve fuerte'; }

                        if (translatedesc=='heavy rain') { document.getElementById("desc").innerHTML='Lluvia fuerte'; }

                        if (translatedesc=='rain and snow') { document.getElementById("desc").innerHTML='Lluvia y nieve'; }

                        if (translatedesc=='mixed rain and snow') { document.getElementById("desc").innerHTML='Mezcla de lluvia y nieve'; }

                        if (translatedesc=='fair') { document.getElementById("desc").innerHTML='Despejado';    }

                        if (translatedesc=='mostly sunny') { document.getElementById("desc").innerHTML='May. soleado';    }

                        if (translatedesc=='partly sunny') { document.getElementById("desc").innerHTML='Par. soleado';   }

                        if (translatedesc=='intermittent clouds') { document.getElementById("desc").innerHTML='Nubes intermitentes';     }

                        if (translatedesc=='hazy sunshine') { document.getElementById("desc").innerHTML='Sol brumoso';  }

                        if (translatedesc=='haze') { document.getElementById("desc").innerHTML='Bruma'; }

                        if (translatedesc=='mostly cloudy') { document.getElementById("desc").innerHTML='May. nublado';  }

                        if (translatedesc=='cloudy') { document.getElementById("desc").innerHTML='Nublado';    }

                        if (translatedesc=='fog') { document.getElementById("desc").innerHTML='Niebla';   }

                        if (translatedesc=='foggy') { document.getElementById("desc").innerHTML='Niebla';   }

                        if (translatedesc=='showers') { document.getElementById("desc").innerHTML='Chubascos';  }

                        if (translatedesc=='partly sunny with showers') { document.getElementById("desc").innerHTML='Par. soleado con chubascos';    }

                        if (translatedesc=='thunderstorms') { document.getElementById("desc").innerHTML='Tormentas electricas';    }

                        if (translatedesc=='thunderstorm') { document.getElementById("desc").innerHTML='Tormenta electrica';    }

                        if (translatedesc=='mostly cloudy with thunder showers') { document.getElementById("desc").innerHTML='Mayormente nublado con tormentas de chubascos';     }

                        if (translatedesc=='partly sunny with thunder showers') { document.getElementById("desc").innerHTML='Parcialmente soleado con tormentas de chubascos';    }

                        if (translatedesc=='light rain') { document.getElementById("desc").innerHTML='Lluvia ligera';     }

                        if (translatedesc=='rain') { document.getElementById("desc").innerHTML='Lluvia';    }

                        if (translatedesc=='flurries') { document.getElementById("desc").innerHTML='Rafagas';   }

                        if (translatedesc=='mostly cloudy with flurries') { document.getElementById("desc").innerHTML='May. nublado con rafagas';   }

                        if (translatedesc=='partly sunny with flurries') { document.getElementById("desc").innerHTML='Parc. soleado con rafagas';    }

                        if (translatedesc=='snow flurries') { document.getElementById("desc").innerHTML='Rafagas de nieve';    }

                        if (translatedesc=='snow showers') { document.getElementById("desc").innerHTML='Chubascos de nieve';    }

                        if (translatedesc=='snow') { document.getElementById("desc").innerHTML='Nieve'; }

                        if (translatedesc=='mostly cloudy with snow') { document.getElementById("desc").innerHTML='May. nublado con nieve';    }

                        if (translatedesc=='ice') { document.getElementById("desc").innerHTML='Hielo'; }

                        if (translatedesc=='sleet') { document.getElementById("desc").innerHTML='Aguanieve';    }

                        if (translatedesc=='freezing rain') { document.getElementById("desc").innerHTML='Lluvia bajo cero';  }

                        if (translatedesc=='rain and snow mixed') { document.getElementById("desc").innerHTML='Mezcla de lluvia y nieve';       }

                        if (translatedesc=='hot') { document.getElementById("desc").innerHTML='Caluroso';         }

                        if (translatedesc=='cold') { document.getElementById("desc").innerHTML='Frio';   }

                        if (translatedesc=='windy') { document.getElementById("desc").innerHTML='Viento';    }

                        if (translatedesc=='clear') { document.getElementById("desc").innerHTML='Despejado';    }

                        if (translatedesc=='mostly clear') { document.getElementById("desc").innerHTML='May. despejado';        }

                        if (translatedesc=='partly cloudy') { document.getElementById("desc").innerHTML='Parc. despejado';       }

                        if (translatedesc=='hazy') { document.getElementById("desc").innerHTML='Bruma'; }

                        if (translatedesc=='partly cloudy with showers') { document.getElementById("desc").innerHTML='Parc. nublado con chubascos';     }

                        if (translatedesc=='mostly cloudy with showers') { document.getElementById("desc").innerHTML='May. nublado con chubascos';        }

                        if (translatedesc=='party cloudy with thunder showers') { document.getElementById("desc").innerHTML='Parc. nublado con tormentas de chubascos';  }

                        if (translatedesc=='foggy') { document.getElementById("desc").innerHTML='Neblina';       }

                        if (translatedesc=='light snow') { document.getElementById("desc").innerHTML='Nieve ligera'; }

                        if (translatedesc=='light snow showers') { document.getElementById("desc").innerHTML='Ligeras precipitaciones de nieve'; }       

                        if (translatedesc=='rain shower') { document.getElementById("desc").innerHTML='Precipitaciones de lluvia';    }

                        if (translatedesc=='drizzle') { document.getElementById("desc").innerHTML='Bruma'; }

                        if (translatedesc=='mixed rain and sleet') { document.getElementById("desc").innerHTML='Mezcla de lluvia y aguanieve';    }

                        if (translatedesc=='mixed snow and sleet') { document.getElementById("desc").innerHTML='Mezcla de nieve y aguanieve';    }

                        if (translatedesc=='severe thunderstorms') { document.getElementById("desc").innerHTML='Tormentas electricas severas';   }

                        if (translatedesc=='hurricane') { document.getElementById("desc").innerHTML='Huracan';    }

                        if (translatedesc=='tropical storm') { document.getElementById("desc").innerHTML='Tormenta tropical';    }

                        if (translatedesc=='tornado') { document.getElementById("desc").innerHTML='Tornado';    }

                        if (translatedesc=='freezing drizzle') { document.getElementById("desc").innerHTML='Llovizna helada';     }

                        if (translatedesc=='blowing snow') { document.getElementById("desc").innerHTML='Viento y nieve'; }

                        if (translatedesc=='hail') { document.getElementById("desc").innerHTML='Granizo'; }

                        if (translatedesc=='dust') { document.getElementById("desc").innerHTML='Polvareda';     }

                        if (translatedesc=='smoky') { document.getElementById("desc").innerHTML='Humo';    }

                        if (translatedesc=='blustery') { document.getElementById("desc").innerHTML='Tempestuoso';    }

                        if (translatedesc=='mixed rain and hail') { document.getElementById("desc").innerHTML='Mezcla de lluvia y granizo';    }

                        if (translatedesc=='isolated thunderstorms') { document.getElementById("desc").innerHTML='Tormentas electricas aisladas';    }

                        if (translatedesc=='isolated thundershowers') { document.getElementById("desc").innerHTML='Tormentas aisladas';    }

                        if (translatedesc=='scattered thunderstorms') { document.getElementById("desc").innerHTML='Tormentas electricas dispersas';    }

                        if (translatedesc=='scattered showers') { document.getElementById("desc").innerHTML='Chubascos dispersos';       }

                        if (translatedesc=='scattered snow showers') { document.getElementById("desc").innerHTML='Precipitaciones de nieve dispersas';    }

                        if (translatedesc=='light rain with thunder') { document.getElementById("desc").innerHTML='LLuvia y tormenta ligera';    }

                        if (translatedesc=='not available') { document.getElementById("desc").innerHTML='No disponible';        }

                        if (translatedesc=='drifting snow/windy') { document.getElementById("desc").innerHTML='Acumulacion de nieve y viento';    }

                        if (translatedesc=='light rain shower') { document.getElementById("desc").innerHTML='Precipitaciones de lluvia ligera';   }

                        if (translatedesc=='thunder') { document.getElementById("desc").innerHTML='Truenos'; }

                        if (translatedesc=='mostly cloudy/windy') { document.getElementById("desc").innerHTML='May. nublado y ventoso'; }

                        if (translatedesc=='sandstorm') { document.getElementById("desc").innerHTML='Tormentas de arena'; }

                        if (translatedesc=='squalls/windy') { document.getElementById("desc").innerHTML='Chubascos y viento'; }

                        if (translatedesc=='sand') { document.getElementById("desc").innerHTML='Arena'; }

                        if (translatedesc=='sandstorm/windy') { document.getElementById("desc").innerHTML='Tormentas de arena y viento'; }

                     }



                if(useRealFeel == true){

                tempValue = obj.realFeel;

                }else{

                tempValue = obj.temp;

                }

                

                if(Temp == "c"){          

document.getElementById("city").innerHTML=obj.city.toLowerCase();}

document.getElementById("temp").innerHTML=tempValue+ "&#176;";

                document.getElementById("lowtemp").innerHTML = "&darr;" + obj.todaylow  + "&#176;";

//document.getElementById("temp").innerHTML=tempValue+ "&#176;";}

                if(Temp == "f"){        

document.getElementById("city").innerHTML=obj.city.toLowerCase();}


document.getElementById("temp").innerHTML=tempValue+ "&#176;";

                document.getElementById("lowtemp").innerHTML = "&darr;" + obj.todaylow  + "&#176;";
               //document.getElementById("temp").innerHTML=tempValue+ "&#176;";}



document.getElementById("weatherIcon").src="Icon Sets/"+iconSet+"/"+obj.icon+iconExt;

document.getElementById("weatherIconMask").src="Icon Sets/"+iconSet+"/"+obj.icon+iconExt;

        }

}

