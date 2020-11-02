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

    // Kelving to Farenheit formula
    var tempF = (response.main.temp - 273.15) * 1.8 + 32;

    // console.log(response.main.temp);
    $("#currentCity").text(searchCity);
    $("#temp").text("Temp: " + tempF.toFixed(2));
    $("#humidity").text("Humidity: " + response.main.humidity);
    $("#windSpeed").text("Wind Speed: " + response.wind.speed);
    $("#uvIndex").text(response.wind.speed);

    $.ajax({
      url: fiveDayForecastUrl,
      method: "GET",
    }).then(function (fiveDayResponse) {
      //   console.log(fiveDayResponse.list[18].main.temp);

      var tempFOne = (fiveDayResponse.list[2].main.temp - 273.15) * 1.8 + 32;
      // Day One - Forecast
      $("#dayOneDate").text("Date: " + fiveDayResponse.list[2].dt_txt);
      $("#dayOneWeather").text(
        "Weather: " + fiveDayResponse.list[2].weather[0].description
      );
      $("#dayOneTemp").text("Temp: " + tempFOne.toFixed(2));
      $("#dayOneHumidity").text(
        "Humidity: " + fiveDayResponse.list[2].main.humidity + "%"
      );
      var tempFTwo = (fiveDayResponse.list[10].main.temp - 273.15) * 1.8 + 32;
      // Day Two - Forecast
      $("#dayTwoDate").text("Date: " + fiveDayResponse.list[10].dt_txt);
      $("#dayTwoWeather").text(
        "Weather: " + fiveDayResponse.list[10].weather[0].description
      );
      $("#dayTwoTemp").text("Temp: " + tempFTwo.toFixed(2));
      $("#dayTwoHumidity").text(
        "Humidity: " + fiveDayResponse.list[10].main.humidity + "%"
      );
      var tempFThree = (fiveDayResponse.list[18].main.temp - 273.15) * 1.8 + 32;
      // Day Three - Forecast
      console.log("Date: " + fiveDayResponse.list[18].dt_txt);
      $("#dayThreeDate").text("Date: " + fiveDayResponse.list[18].dt_txt);
      $("#dayThreeWeather").text(
        "Weather: " + fiveDayResponse.list[18].weather[0].description
      );
      $("#dayThreeTemp").text("Temp: " + tempFThree.toFixed(2));
      $("#dayThreeHumidity").text(
        "Humidity: " + fiveDayResponse.list[18].main.humidity + "%"
      );
      var tempFFour = (fiveDayResponse.list[26].main.temp - 273.15) * 1.8 + 32;
      // Day Four - Forecast
      $("#dayFourDate").text("Date: " + fiveDayResponse.list[26].dt_txt);
      $("#dayFourWeather").text(
        "Weather: " + fiveDayResponse.list[26].weather[0].description
      );
      $("#dayFourTemp").text("Temp: " + tempFFour.toFixed(2));
      $("#dayFourHumidity").text(
        "Humidity: " + fiveDayResponse.list[26].main.humidity + "%"
      );
      var tempFFive = (fiveDayResponse.list[32].main.temp - 273.15) * 1.8 + 32;
      // Day Five - Forecast
      $("#dayFiveDate").text("Date: " + fiveDayResponse.list[32].dt_txt);
      $("#dayFiveWeather").text(
        "Weather: " + fiveDayResponse.list[32].weather[0].description
      );
      $("#dayFiveTemp").text("Temp: " + tempFFive.toFixed(2));
      $("#dayFiveHumidity").text(
        "Humidity: " + fiveDayResponse.list[32].main.humidity + "%"
      );
    });
  });
});

// temp
// humidity
// wind speed
// UV index
