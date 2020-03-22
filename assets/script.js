

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

var apiKey = "&appid=3d35d44dc67848bfaece240f47e0c4df";

// api.openweathermap.org/data/2.5/weather
// api.openweathermap.org/data/2.5/forecast
var testWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=richmond&appid=3d35d44dc67848bfaece240f47e0c4df";

var myLocations = [];
    //this should be 5 or less



/*  ********************** *** functions *** ********************    */

//gets searchTerm, sets a new myLocation[x], saves location to local memory!
//ideally limit this to valid cities
function searchCity() {
    console.log($("#search-input").val());

//onlineLocations = localStorage.getItem("myLocations");
//parsedLocations = JSON.parse(onlineLocations);
//console.log(onlineLocations);
// myLocations[myLocations.length] = $("#search-input").val();

tempVar = $("#search-input").val();
 myLocations[myLocations.length] = tempVar;
jsonLocations = JSON.stringify(myLocations);
localStorage.setItem("jsonLocations", jsonLocations);


    // if (myLocations.length <= 5){
    //     myLocations[myLocations.length] = $("#search-input").val();
    //     // testcity = ($("<div>").html($("#search-input").val();
    //     // $("city-holder").append(testcity);
    // }
    // else {
    //     myLocations[5] = $("#search-input").val();
    // }
    //this sets the first 6 values... should limit the creation of values after 6...
return $("#search-input").val();
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

function getLocations(){
    /*
// Storing data:
myObj = {name: "John", age: 31, city: "New York"};
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;

*/
onlineLocations = localStorage.getItem("jsonLocations");
myLocations = JSON.parse(onlineLocations);
console.log(onlineLocations);
console.log("parsedlocations = "+myLocations);
console.log(myLocations[0]);


//grabs locations from local storage
//places those locations in the city-holder div in left div
for (i=0;i<myLocations.length;i++){
    //myLocation[i];
    var newCity = $("<div>").addClass("side-city");
newCity.text(myLocations[i]);
$(".city-holder").append(newCity);


}
//hardcoding richmond;
var richmond = $("<div>").addClass("side-city");
richmond.text("Richmond");
$(".city-holder").append(richmond);
//create class side-city

// var newDrinkDiv = $("<div>" + drinkList[i] + "</div>");

}



function setLocation(){
//puts a new location into local storage
    
}




/*  **************************** Main APP **************** */

//load locations from local storage
$("document").ready(getLocations());
//not working yet; will grab locations from local storage and put them on the left div

//search-button; will pull up weather and forecast of searched term
$("document").ready($("#search-button").on("click", function () {
    console.log("button clicked");
    myCity = searchCity();   

    //need a function to set the city. USE TEMP CITY FOR NOW ****FIX
    //function should then set location in the "city-holder" div
    // var myCity = "Richmond";
    //gets weather of search term

    getWeather(myCity);

    //get 5 day forecast for search term
    getForecast(myCity);
}));
        //...
        //add locations from local history
        //add buttons for each location

//add click function for side city class!
$("document").ready($(".side-city").on("click", function () {
console.log("touched the city");
console.log(this.textContent);
var sideSearch = this.textContent;
getWeather(sideSearch);
getForecast(sideSearch);

}));



        //search for city
            //if valid response add to left
        //click on left location
            //stores name of city in... local storage under what name?

        //