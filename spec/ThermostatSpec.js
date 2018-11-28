'use strict'

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts with a default temperature of 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it('sets the minimum temperature to 10 degrees', function() {
    expect(thermostat.minTemperature()).toEqual(10);
  });

  it('increase the temperature by 1 degree', function() {
    thermostat.up();
    expect(thermostat.temperature()).toEqual(21);
  });

  it('increase the temperature by 1 degree', function() {
    thermostat.down();
    expect(thermostat.temperature()).toEqual(19);
  });

  it('increase the temperature by 1 degree', function() {
    thermostat.up();
    thermostat.reset();
    expect(thermostat.temperature()).toEqual(20);
  });

  it('blocks the temperature at a minimum of 10 degrees', function() {
    for(var i=0; i < 11; i++) { thermostat.down(); }
    expect(thermostat.temperature()).toEqual(10)
  });







});
