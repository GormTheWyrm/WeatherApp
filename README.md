# WeatherApp

Repo: https://github.com/GormTheWyrm/WeatherApp
Deployed App: https://gormthewyrm.github.io/WeatherApp/

# Overview
This app uses the [OpenWeather API](https://openweathermap.org/api) to to display the current weather as well as the 5 day forecast for searched locations. The searched location names are stored in local storage as a json object as well as on the page so that users can quickly bring up each of the searched locations.
Information displayed for selected location: wind speed, temperature, UV index, and country. The UV index has colored background to that turns red when the UV index is above 10 to indicate dangerous UV levels. 
        The five day forecast of that location including temperature, humidity and an icon.
        The five day forecast reflects roughly a 3 hour period of time rather than the entire day.


## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Instructions For Use

Navigate to https://gormthewyrm.github.io/WeatherApp/.
Search for a city via the search bar.
Click on the name of the city in the left section and the current frecast and 5 day forecast will apear in the right section.
