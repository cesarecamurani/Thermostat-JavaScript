'use strict'

function Thermostat() {
  this._temperature = 20;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function() {
  return this._temperature++;
};

Thermostat.prototype.down = function() {
  return this._temperature--;
};

Thermostat.prototype.reset = function() {
  return this._temperature = 20;
};
