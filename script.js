$("#searchBtn").on("click", function (e) {
  e.preventDefault();
  $(".card-text").empty();
  var searchCity = $("#searchField").val();
  console.log(searchCity);

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
    // Kelving to Farenheit formula
    var tempF = (response.main.temp - 273.15) * 1.8 + 32;

    $("#currentCity").text(searchCity);
    $("#temp").text("Temp: " + tempF.toFixed(2) + "F");
    $("#humidity").text("Humidity: " + response.main.humidity + "%");
    $("#windSpeed").text("Wind Speed: " + response.wind.speed);
    console.log(response.coord.lat);
    console.log(response.coord.lon);

    // var lat = response.coord.lat;
    // var lon = response.coord.lon;
    // var uvIndex =
    //   "https://api.openweathermap.org/data/2.5/uvi?lat=37.75&lon=-122.37=&appid=98975e2b5df2028e9f00e2a943aca2a5";
    // $.ajax({
    //   url: uvIndex,
    //   method: "GET",
    // }).then(function (uvIndex) {
    //   console.log("This is the UV Index " + uvIndex.value);
    // });

    $.ajax({
      url: fiveDayForecastUrl,
      method: "GET",
    }).then(function (fiveDayResponse) {
      var tempFOne = (fiveDayResponse.list[4].main.temp - 273.15) * 1.8 + 32;
      var weatherIconOne =
        "https://openweathermap.org/img/w/" +
        fiveDayResponse.list[4].weather[0].icon +
        ".png";
      var weatherIconTwo =
        "https://openweathermap.org/img/w/" +
        fiveDayResponse.list[12].weather[0].icon +
        ".png";
      var weatherIconThree =
        "https://openweathermap.org/img/w/" +
        fiveDayResponse.list[20].weather[0].icon +
        ".png";
      var weatherIconFour =
        "https://openweathermap.org/img/w/" +
        fiveDayResponse.list[28].weather[0].icon +
        ".png";
      var weatherIconFive =
        "https://openweathermap.org/img/w/" +
        fiveDayResponse.list[36].weather[0].icon +
        ".png";

      // Day One - Forecast
      $("#dayOneDate").text("Date: " + fiveDayResponse.list[4].dt_txt);
      // Weather Icon Variable
      var imgElOne = $("<img>").attr("src", weatherIconOne);
      $("#dayOneWeather").append(imgElOne);
      $("#dayOneTemp").text("Temp: " + tempFOne.toFixed(2));
      $("#dayOneHumidity").text(
        "Humidity: " + fiveDayResponse.list[4].main.humidity + "%"
      );

      // Day Two - Forecast
      var tempFTwo = (fiveDayResponse.list[12].main.temp - 273.15) * 1.8 + 32;
      $("#dayTwoDate").text("Date: " + fiveDayResponse.list[12].dt_txt);
      // Weather Icon Variable
      var imgElTwo = $("<img>").attr("src", weatherIconTwo);
      $("#dayTwoWeather").append(imgElTwo);
      $("#dayTwoTemp").text("Temp: " + tempFTwo.toFixed(2));
      $("#dayTwoHumidity").text(
        "Humidity: " + fiveDayResponse.list[12].main.humidity + "%"
      );

      // Day Three - Forecast
      var tempFThree = (fiveDayResponse.list[20].main.temp - 273.15) * 1.8 + 32;
      $("#dayThreeDate").text("Date: " + fiveDayResponse.list[20].dt_txt);
      // Weather Icon Variable
      var imgElThree = $("<img>").attr("src", weatherIconThree);
      $("#dayThreeWeather").append(imgElThree);
      $("#dayThreeTemp").text("Temp: " + tempFThree.toFixed(2));
      $("#dayThreeHumidity").text(
        "Humidity: " + fiveDayResponse.list[20].main.humidity + "%"
      );

      // Day Four - Forecast
      var tempFFour = (fiveDayResponse.list[28].main.temp - 273.15) * 1.8 + 32;
      $("#dayFourDate").text("Date: " + fiveDayResponse.list[28].dt_txt);
      // Weather Icon Variable
      var imgElFour = $("<img>").attr("src", weatherIconFour);
      $("#dayFourWeather").append(imgElFour);
      $("#dayFourTemp").text("Temp: " + tempFFour.toFixed(2));
      $("#dayFourHumidity").text(
        "Humidity: " + fiveDayResponse.list[28].main.humidity + "%"
      );

      // Day Five - Forecast
      var tempFFive = (fiveDayResponse.list[36].main.temp - 273.15) * 1.8 + 32;
      $("#dayFiveDate").text("Date: " + fiveDayResponse.list[36].dt_txt);
      // Weather Icon Variable
      var imgElFive = $("<img>").attr("src", weatherIconFive);
      $("#dayFiveWeather").append(imgElFive);
      $("#dayFiveTemp").text("Temp: " + tempFFive.toFixed(2));
      $("#dayFiveHumidity").text(
        "Humidity: " + fiveDayResponse.list[36].main.humidity + "%"
      );
    });
  });
});

// temp
// humidity
// wind speed
// UV index
