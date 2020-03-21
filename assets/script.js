console.log("test");

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




/*  **************************** Main APP **************** */
//searchbutton
    //adds city to left side
    //displays current and 5 day forecast via api
        //search-button
        $("#search-button").on("click", function () {

            //function here
        });
//when click on city