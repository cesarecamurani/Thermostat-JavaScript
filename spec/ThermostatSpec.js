'use strict'

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('initial settings', function() {

    it('starts with a default temperature of 20 degrees', function() {
      expect(thermostat.temperature()).toEqual(20);
    });

    it('sets the minimum temperature to 10 degrees', function() {
      expect(thermostat.minTemp()).toEqual(10);
    });

    it('sets the maximum temperature to 25 degrees', function() {
      expect(thermostat.maxTemp()).toEqual(25);
    });

    it('checks the initial power mode setting', function() {
      expect(thermostat.initialPowerMode()).toEqual('On');
    });

  });

  describe('temperature up', function() {

    it('increases the temperature by 1 degree', function() {
      thermostat.up();
      expect(thermostat.temperature()).toEqual(21);
    });

  });

  describe('temperature down', function() {

    it('lowers the temperature by 1 degree', function() {
      thermostat.down();
      expect(thermostat.temperature()).toEqual(19);
    });

    it('blocks the temperature at a minimum of 10 degrees', function() {
      for(var i=0; i < 10; i++) { thermostat.down(); }
      thermostat.down();
      expect(thermostat.temperature()).toEqual(10)
    });

  });

  describe('reset temperature', function() {

    it('reset the temperature to 20 degrees', function() {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature()).toEqual(20);
    });

  });

  describe('change the power mode', function() {

    it('sets the power saving mode to on', function() {
      thermostat.powerSavingModeOn();
      expect(thermostat.powerSavingModeOn()).toEqual('On');
    });

    it('sets the power saving mode to off', function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.powerSavingModeOff()).toEqual('Off');
    });

  });












});
