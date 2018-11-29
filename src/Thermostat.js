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
  this._maxTemp = 25;
  return this._powerSaving = 'On';
};

Thermostat.prototype.powerSavingModeOff = function() {
  this._maxTemp = 32;
  return this._powerSaving = 'Off';
};

Thermostat.prototype.up = function () {
  if (this._powerSaving === 'On') {
    if (this._temperature < this._maxTemp) {
      this._temperature++;
      return this._temperature;
    } else {
      return this._maxTemp;
    }
  } else if (this._powerSaving === 'Off') {
    if (this._temperature < this._maxTemp) {
      this._temperature++;
      return this._temperature;
    } else {
      return this._maxTemp;
    }
  }
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

Thermostat.prototype.usage = function () {
  if(this._temperature < 18) {
    return this.energyUsage = 'Low usage'
  } else if(this._temperature < 25) {
    return this.energyUsage = 'Medium usage'
  } else {
    return this.energyUsage = 'High usage'
  }
};
