# WeatherApp

https://github.com/GormTheWyrm/WeatherApp
https://gormthewyrm.github.io/WeatherApp/

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

## Instructions for creation

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```









To DO List

<!-- make search work with "enter" -->
<!-- need to make search bar delete content after submission -->
<!-- make weather appear after searching -->