
$(function() {
  var thermostat = new Thermostat();

  updateTemperature();
  updatePowerStatus();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature());
  };
  function updatePowerStatus() {
    $('#powerSavingMode').text(thermostat.powerSavingMode());
  };

  $('#up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.powerSavingModeOn();
    updateTemperature();
    updatePowerStatus();
  });

  $('#powersaving-off').click(function() {
    thermostat.powerSavingModeOff();
    updateTemperature();
    updatePowerStatus();
  });

});
