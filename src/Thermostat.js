'use strict'

function Thermostat() {
  this._temperature = 20;
  this._minTemp = 10;
  this._maxTemp = 25;
  this._powerSaving = 'On';
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.minTemp = function() {
  return this._minTemp;
};

Thermostat.prototype.maxTemp = function() {
  return this._maxTemp;
};

Thermostat.prototype.initialPowerMode = function() {
  return this._powerSaving;
};

Thermostat.prototype.powerSavingModeOn = function() {
  return this._powerSaving = 'On';
  return this._maxTemp = 25;
};

Thermostat.prototype.powerSavingModeOff = function() {
  return this._powerSaving = 'Off';
  return this._maxTemp = 32;
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
