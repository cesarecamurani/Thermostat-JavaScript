'use strict'

function Thermostat() {
  this._temperature = 20;
  this._minTemp = 10;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.minTemperature = function() {
  return this._minTemp;
};

Thermostat.prototype.up = function() {
  return this._temperature++ ;
};

Thermostat.prototype.down = function() {
  if(this._minTemp < this._temperature) {
    return this._temperature-- ;
  }
  else {
    return this._minTemp;
  }
};

Thermostat.prototype.reset = function() {
  return this._temperature = 20;
};
