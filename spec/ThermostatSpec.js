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

    it('reset the temperature to 25 degrees when PSM is on', function() {
      thermostat.powerSavingModeOff();
      for(var i=0; i < 10; i++) { thermostat.up(); }
      thermostat.powerSavingModeOn();
      expect(thermostat.temperature()).toEqual(25);
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

  describe('sets a max temperature depending on the power mode', function() {

    it('it stops increasing the temperature @ 25 degrees', function() {
      for(var i = 1; i < 5; i++) { thermostat.up(); }
      thermostat.up();
      expect(thermostat.temperature()).toEqual(25)
    });

    it('it stops increasing the temperature @ 32 degrees', function() {
      thermostat.powerSavingModeOff();
      for(var i = 1; i < 12; i++) { thermostat.up(); }
      thermostat.up();
      expect(thermostat.temperature()).toEqual(32)
    });

  });

  describe('energy usage', function() {

    it('return low usage if temperature is below 18', function() {
      for(var i = 1; i < 4; i++) { thermostat.down(); }
      expect(thermostat.temperature()).toEqual(17);
      expect(thermostat.usage()).toEqual('Low usage')
    });

    it('return medium usage if temperature is between 18 and 25', function() {
      expect(thermostat.usage()).toEqual('Medium usage');
    });

    it('return high usage if temperature is above 25', function() {
      thermostat.powerSavingModeOff();
      for(var i = 1; i < 7; i++) { thermostat.up(); }
      expect(thermostat.temperature()).toEqual(26);
      expect(thermostat.usage()).toEqual('High usage')
    });

  });


});
