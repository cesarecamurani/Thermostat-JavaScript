
$(function() {
  var thermostat = new Thermostat();

  updateTemperature();
  updatePowerStatus();
  updateUsage();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature());
  };
  function updatePowerStatus() {
    $('#powerSavingMode').text(thermostat.powerSavingMode());
  };
  function updateUsage() {
    $('#usage').text(thermostat.usage());
  };

  $('#up').click(function() {
    thermostat.up();
    updateTemperature();
    updateUsage();
  });

  $('#down').click(function() {
    thermostat.down();
    updateTemperature();
    updateUsage();
  });

  $('#reset').click(function() {
    thermostat.reset();
    updateTemperature();
    updateUsage();
  });

  $('#powersaving-on').click(function() {
    thermostat.powerSavingModeOn();
    updateTemperature();
    updatePowerStatus();
    updateUsage();
  });

  $('#powersaving-off').click(function() {
    thermostat.powerSavingModeOff();
    updateTemperature();
    updatePowerStatus();
    updateUsage();
  });

  $(function() {

    var lat = "";
    var lon = "";
    var url = "";

    var icons = {
      "partly-cloudy-night": "http://icons.iconarchive.com/icons/icons8/ios7/512/Weather-Partly-Cloudy-Night-icon.png",
      "clear-day": "https://www.holidify.com/images/logos/weather-icons/clear-day.svg",
      "clear-night": "https://d30y9cdsu7xlg0.cloudfront.net/png/74027-200.png",
      "rain": "https://cdn4.iconfinder.com/data/icons/weather-129/64/weather-5-512.png",
      "snow": "https://d30y9cdsu7xlg0.cloudfront.net/png/30800-200.png",
      "sleet": "http://www.iconarchive.com/download/i97022/iconsmind/outline/Sleet.ico",
      "wind": "https://d30y9cdsu7xlg0.cloudfront.net/png/7702-200.png",
      "fog": "http://www.iconskid.com/images/125/fog-vector-icon-125236.png",
      "cloudy": "http://www.authenticweather.com/s/static/images/icons/partly_cloudy.png",
      "partly-cloudy-day": "http://icons.veryicon.com/png/System/Icons8%20Metro%20Style/Weather%20Partly%20cloudy%20day.png",
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {

        lat += position.coords.latitude;
        lon += position.coords.longitude;
        url += 'https://api.darksky.net/forecast/fb911f2cac920180c81be8782e452f9f/' + lat + ','+ lon +'';

        $.ajax({
          url : url,
          dataType : "jsonp",
          success : function(data) {
            $("#dataTwo").html((Math.round(data.currently.temperature) + " ºF"));
            $("#dataTwoThree").html(data.currently.summary);
            $("#dataTwoFour").html("<img width='100px' src=" + icons[data.currently.icon] + ">");
          }
        });

        var city = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&key=AIzaSyCrdntzxZncjzCk9Pgo-NBEEHoqyddMpYE";

        $.ajax({
          url : city,
          dataType : "json",
          success : function(dataTwo) {
            // get all the information
            $("#dataThree").html((dataTwo.results[0].address_components[3].long_name));
          }
        });
      });
    }

      $("#convert").on("click", function() {
        // Do stuff, get id of image perhaps?
        var temp = document.getElementById("dataTwo").innerHTML;
        var letter = document.getElementById("tempLetter").innerHTML;
        temp = temp.split(" ");
        temp = temp[0];

        console.log(temp);

        if (letter == "Celsius") {
          temp = Math.round((temp - 32)/1.8);
          $("#dataTwo").html(temp + " ºC");
          $("#tempLetter").html("Fahrenheit");
        } else {
          temp = Math.round((temp * 1.8) + 32);
          $("#dataTwo").html(temp + " ºF");
          $("#tempLetter").html("Celsius");
        }
      });
    });
});
