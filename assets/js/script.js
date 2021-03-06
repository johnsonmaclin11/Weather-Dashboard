var date = moment().format("L");
var nextDay = moment().add(1, "days").calendar();
var twoDays = moment().add(2, "days").calendar();
var threeDays = moment().add(3, "days").calendar();
var fourDays = moment().add(4, "days").calendar();
var fiveDays = moment().add(5, "days").calendar();

$(document).ready(function () {
  var citiesArray = [];

  var weatherDays = ["1", "2", "3", "4", "5"];

  var localStorageArray = JSON.parse(localStorage.getItem("cities"));

  if (localStorageArray) {
    citiesArray = localStorageArray;
  }

  function searchCity(city) {
    var APIKey = "3341ac9d2dd138ac14d34cba050bc29f";

    var queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      APIKey;

    var queryURLUv =
      "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=37.75&lon=-122.37&cnt=0&appid=" +
      APIKey;

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      $("h4").text("5-Day Forecast");

      $(".city").html("<h3>" + response.city.name + "  " + date + "  ");

      var IconMain = response.list[0].weather[0].main;

      var tempF = (response.list[0].main.temp - 273.15) * 1.8 + 32;

      $(".tempreature").text("Tempreature: " + tempF.toFixed(2) + "°F");

      $(".humidity").text("Humidity: " + response.list[0].main.humidity + "%");

      $(".wind").text("Wind Speed: " + response.list[0].wind.speed + " MPH");

      var tempFone = (response.list[2].main.temp - 273.15) * 1.8 + 32;

      $(".1").html(
        "<div id='day' class='float-child1'>" +
          nextDay +
          "<br>" +
          "<h7>" +
          response.list[2].weather[0].main +
          "<br>" +
          "<div>" +
          "temp: " +
          tempFone.toFixed(2) +
          "°F" +
          "<br>" +
          "Humidity: " +
          response.list[2].main.humidity +
          "%"
      );

      var iconone = response.list[2].weather[0].main;

      var tempFtwo = (response.list[10].main.temp - 273.15) * 1.8 + 32;

      $(".2").html(
        "<div id='day' class='float-child2'>" +
          twoDays +
          "<br>" +
          "<h7>" +
          response.list[10].weather[0].main +
          "<br>" +
          "<div>" +
          "temp: " +
          tempFtwo.toFixed(2) +
          "°F" +
          "<br>" +
          "Humidity: " +
          response.list[10].main.humidity +
          "%"
      );

      var icontwo = response.list[10].weather[0].main;

      var tempFthree = (response.list[18].main.temp - 273.15) * 1.8 + 32;

      $(".3").html(
        "<div id='day' class='float-child3'>" +
          threeDays +
          "<br>" +
          "<h7>" +
          response.list[18].weather[0].main +
          "<br>" +
          "<div>" +
          "temp: " +
          tempFthree.toFixed(2) +
          "°F" +
          "<br>" +
          "Humidity: " +
          response.list[18].main.humidity +
          "%"
      );

      var iconthree = response.list[18].weather[0].main;

      var tempFfour = (response.list[26].main.temp - 273.15) * 1.8 + 32;

      $(".4").html(
        "<div id='day' class='float-child4'>" +
          fourDays +
          "<br>" +
          "<h7>" +
          response.list[26].weather[0].main +
          "<br>" +
          "<div>" +
          "temp: " +
          tempFfour.toFixed(2) +
          "°F" +
          "<br>" +
          "Humidity: " +
          response.list[26].main.humidity +
          "%"
      );

      var iconfour = response.list[26].weather[0].main;

      var tempFfive = (response.list[34].main.temp - 273.15) * 1.8 + 32;

      $(".5").html(
        "<div id='day' class='float-child5'>" +
          fiveDays +
          "<br>" +
          "<h7>" +
          response.list[34].weather[0].main +
          "<br>" +
          "<div>" +
          "temp: " +
          tempFfive.toFixed(2) +
          "°F" +
          "<br>" +
          "Humidity: " +
          response.list[34].main.humidity +
          "%"
      );

      var iconfive = response.list[34].weather[0].main;

      if (IconMain === "Rain") {
        $("h3").append(
          $("<img>", {
            id: "rain",
            src: "./assets/images/rain.jpeg",
            width: "50",
            height: "50",
          })
        );
      } else if (IconMain === "Clear") {
        $("h3").append(
          $("<img>", {
            id: "rain",
            src: "./assets/images/sunny.png",
            width: "50",
            height: "50",
          })
        );
      } else if (IconMain === "Clouds") {
        $("h3").append(
          $("<img>", {
            id: "rain",
            src: "./assets/images/cloud.jpeg",
            width: "50",
            height: "50",
          })
        );
      }

      if (iconone === "Rain") {
        $(".float-child1").append(
          $("<img>", {
            id: "rain",
            src: "./assets/images/rain.jpeg",
            width: "50",
            height: "50",
          })
        );
      } else if (iconone === "Clear") {
        $(".float-child1").append(
          $("<img>", {
            id: "rain",
            src: "./assets/images/sunny.png",
            width: "50",
            height: "50",
          })
        );
      } else if (iconone === "Clouds") {
        $(".float-child1").append(
          $("<img>", {
            id: "rain",
            src: "./assets/images/cloud.jpeg",
            width: "50",
            height: "50",
          })
        );
      }

      if (icontwo === "Rain") {
        $(".float-child2").append(
          $("<img>", {
            id: "rain",
            src: "./assets/images/rain.jpeg",
            width: "50",
            height: "50",
          })
        );
      } else if (icontwo === "Clear") {
        $(".float-child2").append(
          $("<img>", {
            id: "rain",
            src: "./assets/images/sunny.png",
            width: "50",
            height: "50",
          })
        );
      } else if (icontwo === "Clouds") {
        $(".float-child2").append(
          $("<img>", {
            id: "rain",
            src: "./assets/images/cloud.jpeg",
            width: "50",
            height: "50",
          })
        );
      }

      if (iconthree === "Rain") {
        $(".float-child3").append(
          $("<img>", {
            id: "rain",
            src: "./assets/images/rain.jpeg",
            width: "50",
            height: "50",
          })
        );
      } else if (iconthree === "Clear") {
        $(".float-child3").append(
          $("<img>", {
            id: "rain",
            src: "./assets/images/sunny.png",
            width: "50",
            height: "50",
          })
        );
      } else if (iconthree === "Clouds") {
        $(".float-child3").append(
          $("<img>", {
            id: "rain",
            src: "./assets/images/cloud.jpeg",
            width: "50",
            height: "50",
          })
        );
      }

      if (iconfour === "Rain") {
        $(".float-child4").append(
          $("<img>", {
            id: "rain",
            src: "./assets/images/rain.jpeg",
            width: "50",
            height: "50",
          })
        );
      } else if (iconfour === "Clear") {
        $(".float-child4").append(
          $("<img>", {
            id: "rain",
            src: "./assets/images/sunny.png",
            width: "50",
            height: "50",
          })
        );
      } else if (iconfour === "Clouds") {
        $(".float-child4").append(
          $("<img>", {
            id: "rain",
            src: "./assets/images/cloud.jpeg",
            width: "50",
            height: "50",
          })
        );
      }

      if (iconfive === "Rain") {
        $(".float-child5").append(
          $("<img>", {
            id: "rain",
            src: "./assets/images/rain.jpeg",
            width: "50",
            height: "50",
          })
        );
      } else if (iconfive === "Clear") {
        $(".float-child5").append(
          $("<img>", {
            id: "rain",
            src: "./assets/images/sunny.png",
            width: "50",
            height: "50",
          })
        );
      } else if (iconfive === "Clouds") {
        $(".float-child5").append(
          $("<img>", {
            id: "rain",
            src: "./assets/images/cloud.jpeg",
            width: "50",
            height: "50",
          })
        );
      }
    });

    $.ajax({
      url: queryURLUv,
      method: "GET",
    }).then(function (response) {
      $(".uv").html(
        "UV Index: " +
          "<button type='button' id='uv' class='btn btn-danger'>" +
          response[0].value
      );

      var uvIdicator = response[0].value;

      if (
        uvIdicator === 1 ||
        uvIdicator === 2 ||
        uvIdicator === 3 ||
        uvIdicator === 4
      ) {
        $("#uv").css("background-color", "green");
      } else if (uvIdicator === 5 || uvIdicator === 6 || uvIdicator === 7) {
        $("#uv").css("background-color", "yellow");
      } else {
        $("#uv").css("background-color", "red");
      }
    });
  }

  function fiveDay() {
    $("#weather").empty();
    for (var i = 0; i < weatherDays.length; i++) {
      var b = $("<div>");
      b.addClass(weatherDays[i]);
      b.attr("data-names", weatherDays[i]);
      $("#weather").append(b);
    }
  }

  function renderButtons() {
    $("#cityList").empty();
    for (var i = 0; i < citiesArray.length; i++) {
      var a = $("<button class='btn btn-primary'>");
      a.addClass("city-btn");
      a.attr("data-name", citiesArray[i]);
      a.text(citiesArray[i]);
      $("#cityList").append(a);

      localStorage.setItem("cities", JSON.stringify(citiesArray));
    }
  }

  $("#select-city").on("click", function (event) {
    event.preventDefault();
    var inputCity = $("#city-input").val().trim();
    if (inputCity === "" || citiesArray.includes(inputCity)) {
    } else {
      searchCity(inputCity);
      citiesArray.push(inputCity);
      renderButtons();
      fiveDay();
    }
  });

  $("#cityList").on("click", "button", function (event) {
    let searchCityName = $(this).text();
    searchCity(searchCityName);
  });

  renderButtons();
  fiveDay();
});
