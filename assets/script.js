

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

var apiKey = "&appid=3d35d44dc67848bfaece240f47e0c4df";

// api.openweathermap.org/data/2.5/weather
// api.openweathermap.org/data/2.5/forecast
var testWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=richmond&appid=3d35d44dc67848bfaece240f47e0c4df";
//https://api.openweathermap.org/data/2.5/weather&=Richmond&appid=3d35d44dc67848bfaece240f47e0c4df
/*  **************************** Functions **************** */
//
/* 
Access to XMLHttpRequest at from origin 'null' has been blocked by CORS policy: 
Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
*/

function searchCity() {
    console.log("test");






}
//gets weather of search term
function getWeather(searchTerm) {

    var baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    var queryUrl = baseUrl + searchTerm + apiKey;
    console.log(queryUrl);

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log("this will display current weather");
        console.log(response);


    });

}

//get 5 day forecast for search term
function getForecast(searchTerm) {

    var baseUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
    var queryUrl = baseUrl + searchTerm + apiKey;
    console.log(queryUrl);

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log("this will display forecast");
        console.log(response);

    });
}






/*  **************************** Main APP **************** */
//searchbutton
//adds city to left side
//displays current and 5 day forecast via api
//search-button
$("document").ready($("#search-button").on("click", function () {
    console.log("button clicked");
    //need a function to set the city. USE TEMP CITY FOR NOW ****FIX
    //function should then set location in the "city-holder" div
    var myCity = "Richmond";
    //gets weather of search term

    getWeather(myCity);

    //get 5 day forecast for search term
    getForecast(myCity);
}));
        //...
        //add locations from local history
        //add buttons for each location


