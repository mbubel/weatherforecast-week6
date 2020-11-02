// function displayCityWeatherInfo() {

//     var city = $(this).attr("data-name");
//     var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "&apikey=98975e2b5df2028e9f00e2a943aca2a5";

//     // Creating an AJAX call for the specific movie button being clicked
//     // $.ajax({
//     //   url: queryURL,
//     //   method: "GET"
//     // }).then(function(response) {

$("#searchBtn").on("click", function () {
  var searchCity = $("#searchField").val();
  var currentForecastUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchCity +
    "&apikey=98975e2b5df2028e9f00e2a943aca2a5";
  var fiveDayForecastUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    searchCity +
    "&apikey=98975e2b5df2028e9f00e2a943aca2a5";

  //Current Day Forecast
  $.ajax({
    url: currentForecastUrl,
    method: "GET",
  }).then(function (response) {
    console.log(response.main.temp);
    console.log(response.main.humidity);
    console.log(response.wind.speed);
    // UV index
    // console.log(response.main.temp);
    $("#currentCity").text(searchCity);
    $("#temp").text("Temp: " + response.main.temp);
    $("#humidity").text("Humidity: " + response.main.humidity);
    $("#windSpeed").text("Wind Speed: " + response.wind.speed);
    $("#uvIndex").text(response.wind.speed);
    $.ajax({
        url:fiveDayForecastUrl,
        method:"GET",
    }).then(function(fiveDayResponse){
        console.log(fiveDayResponse.list[2].main.temp);
        $("#dayOneWeather").text("Temp: " + fiveDayResponse.list[2].weather[0].description);
        $("#dayOneTemp").text("Temp: " + fiveDayResponse.list[2].main.temp);
        $("#dayOneHumidity").text("Humidity: " + fiveDayResponse.list[2].main.humidity + "%");
    })
  });
});

// temp
// humidity
// wind speed
// UV index
