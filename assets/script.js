

/*
// Storing data:
myObj = {name: "John", age: 31, city: "New York"};
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;


var newDrinkDiv = $("<div>" + drinkList[i] + "</div>");
*/










//   <div id="current-city"> = container to put current city info in
//  1 header, 4 spans; temperature, humidity, wind speed, uv index

//.city-holder is div to append cities to


//  api key:  3d35d44dc67848bfaece240f47e0c4df
// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY

//5day forecast info; 
// https://openweathermap.org/forecast5
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
// api.openweathermap.org/data/2.5/forecast?q={city name},{state}&appid={your api key}
//  https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY

//current weather info;
//  https://openweathermap.org/current
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
// api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}
// api.openweathermap.org/data/2.5/weather?q={city name},{state},{country code}&appid={your api key


/*  ********************** *** Global VARIABLES *** ********************    */

var apiKey = "appid=3d35d44dc67848bfaece240f47e0c4df";

// api.openweathermap.org/data/2.5/weather
// api.openweathermap.org/data/2.5/forecast
var testWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=richmond&appid=3d35d44dc67848bfaece240f47e0c4df";

var myLocations = ["Richmond"];
//this should be 5 or less



/*  ********************** *** functions *** ********************    */

//gets searchTerm, sets a new myLocation[x], saves location to local memory!
//ideally limit this to valid cities
function searchCity() {
    // console.log($("#search-input").val());
    tempVar = $("#search-input").val();
    myLocations[myLocations.length] = tempVar;
    jsonLocations = JSON.stringify(myLocations);
    localStorage.setItem("jsonLocations", jsonLocations);
    // return $("#search-input").val();
    return tempVar;
}

//  *********** WORK ON THIS NOW *****
//gets weather of search term
function getWeather(searchTerm) {

    var baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    var queryUrl = baseUrl + searchTerm + "&" + apiKey;
    // console.log(queryUrl);

    function createH(input) {
        var newH = $("<h2>").text(input);
        weatherCity.append(newH);
    }

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        // console.log("this will display current weather");
        // console.log(response);
        var mySpeed = response.wind.speed;
        var myTemp = parseInt(response.main.temp);
        myTemp = myTemp - 272.15;
        myTemp = myTemp * 9 / 5;
        myTemp = myTemp + 32;
        myTemp = myTemp.toFixed(2);
        var myHumidity = response.main.humidity;
        var myName = response.name;
        var myCountry = response.sys.country;

        //clear container
        weatherCity = $("#current-city");
        weatherCity.empty();

        //add weather details to current city div
        //needs a date
        createH(myName + ", " + myCountry);
        createH("Temperature:  " + myTemp + " Degrees F");
        createH("Wind Speed:  " + mySpeed + " MPH");
        createH("Humidity:  " + myHumidity + "%");

        /* **************************************** */

        var lat = response.coord.lat;
        var lon = response.coord.lon;
        var uvUrl = "https://api.openweathermap.org/data/2.5/uvi?" + apiKey + "&lat=" + lat + "&lon=" + lon;
        // https://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}
        //might need to slow this down...
        $.ajax({
            url: uvUrl,
            method: "GET"
        }).then(function (uvResponse) {
            // console.log("this will display UV");
            var myUV = uvResponse.value;
            var newUV = $("<h2>").text("UV index:  ");
            var newSpan = $("<span>").text(myUV);
            weatherCity.append(newUV);
            newUV.append(newSpan);
            if (parseInt(myUV) >= 10) {
                newSpan.attr("style", "background-color: lightcoral");
            } else {
                newSpan.attr("style", "background-color: royalblue");
            }
            return false;
        });
        return false;
    });
}

//get 5 day forecast for search term
function getForecast(searchTerm) {

    var baseUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
    var queryUrl = baseUrl + searchTerm + "&" + apiKey;
    // console.log(queryUrl);




    /*     
    &cnt=3  limits responses
    To use JavaScript code you can transfer callback functionName to JSONP callback.
    Examples of API calls:
    api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test
    
    icons
    https://openweathermap.org/img/wn/04d@2x.png
            maybe change out the "04d"
            40/5=8
     */



    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        // console.log("this will display forecast");
        // console.log(response);

        var forecastDiv = $("#forecast-div");
        forecastDiv.empty();    //empties div so new items have a nice new empty div



        for (i = 0; i < 40; i = i + 8) {

            var forecastTemp = response.list[i].main.temp;
            forecastTemp = forecastTemp - 271.15;
            forecastTemp = forecastTemp * 9 / 5;
            forecastTemp = forecastTemp + 32;
            forecastTemp = forecastTemp.toFixed(2);
            var forecastHum = response.list[i].main.humidity;
            //create link fore the forecast symbol to open; the links differ by ##N/D (day v night)
            var forecastSym = response.list[i].weather[0].icon;
            var forecastSymbol = "https://openweathermap.org/img/wn/" + forecastSym + "@2x.png";
            // console.log(forecastSymbol);




            var forecastTime = response.list[i].dt_txt;
            var forecastLoc = $("<div>").addClass("card");
            //forecastDiv = container
            createF(forecastTime + "<br>");
            //create symbol here
            var symbolImage = $("<img>").attr("src",forecastSymbol);
            forecastLoc.append(symbolImage);



            createF("Temperature: " + forecastTemp + " F <br>");
            createF("Humidity: " + forecastHum + " % <br>");


            function createF(input) {
                var newF = $("<span>").html(input);
                //wase .text
                forecastLoc.append(newF);
            }
            forecastDiv.append(forecastLoc);

        }

    return false;

    });
}

function getLocations() {

    onlineLocations = localStorage.getItem("jsonLocations");
    // console.log(onlineLocations);
    if (onlineLocations != null) {
        myLocations = JSON.parse(onlineLocations);
        // console.log(onlineLocations);
        // console.log("parsedlocations = " + myLocations);
        // console.log(myLocations[0]);
    } else {
        myLocations[0] = "richmond";
    }

    //grabs locations from local storage
    //places those locations in the city-holder div in left div
    for (i = 0; i < myLocations.length; i++) {
        //myLocation[i];
        var newCity = $("<div>").addClass("side-city");
        newCity.text(myLocations[i]);
        $(".city-holder").append(newCity);


    }
}




function clearLocations() {
    $(".city-holder").empty();
}

function resetFunction(){
    // console.log("resetting...");
    //need to remove items from myLocations[]
    myLocations.length = 0;
    // for (i=0; i<myLocations.length; i++){

    // }

localStorage.removeItem("jsonLocations");
    clearLocations();
}



/*  **************************** Main APP **************** */

//load locations from local storage
$("document").ready(getLocations());
//need to implment troubleshooting so that invalid cities are not added...
//need to prevent blank entries

//search-button; will pull up weather and forecast of searched term
$("document").ready($("#search-button").on("click", function () {
    // console.log("button clicked");
    myCity = searchCity();
    //need a function to set the city. USE TEMP CITY FOR NOW ****FIX
    //function should then set location in the "city-holder" div


    //gets weather of search term
    getWeather(myCity);
    //get 5 day forecast for search term
    getForecast(myCity);
    //empties div
    clearLocations();
    //puts locations in side city
    getLocations();
    
    // BUG if I do nto reset this, the side cities are not able to be clicked
    location.reload(true);

}));
//...
//add locations from local history
//add buttons for each location

//add click function for side city class!
$("document").ready($(".side-city").on("click", function () {
    // console.log("touched the city");
    // console.log(this.textContent);
    var sideSearch = this.textContent;
    getWeather(sideSearch);
    getForecast(sideSearch);

}));
$("document").ready($("#reset-button").on("click", function () {
    resetFunction();
    
   

}));




