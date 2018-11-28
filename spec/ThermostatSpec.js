'use strict'

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts with a default temperature of 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(20);
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





});
