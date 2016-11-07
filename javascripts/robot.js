"use strict";
var Battledome = (function(OldBattledome) {
//BASE ROBOT //

  OldBattledome.Robot = function () {
    this.baseDamage = Math.floor(Math.random() * 10);
    this.life = 5000;
    this.weapon = null;
    this.health = null;
    this.name = '';
  };
//ROBOT HEALTH
  OldBattledome.Robot.health = function () {
    this.life + this.totalLife;
  };

//ROBOT TYPES//

  OldBattledome.AerialDrone = function () {
    this.type = "Drone";
    this.attackType = "Aerial";
  };
  OldBattledome.AerialDrone.prototype = new Robot();

  OldBattledome.PredatorDrone = function() {
    this.baseDamage += 10;
    this.totalLife = Math.floor(Math.random() * 10);
  };
  OldBattledome.PredatorDrone.prototype = new AerialDrone();

  OldBattledome.JetDrone = function() {
    this.baseDamage += 20;
    this.totalLife = Math.floor(Math.random() * 15) + this.life;
  };
  OldBattledome.JetDrone.prototype = new AerialDrone();

  OldBattledome.GroundRobot = function() {
    this.attackType = "Earth Bound";
  };
  OldBattledome.GroundRobot.prototype = new Robot();

  OldBattledome.TankDrone = function() {
    this.type = "Tank";
    this.baseDamage += 5;
    this.totalLife = Math.floor(Math.random() * 20) + this.life;
  };
  OldBattledome.TankDrone.prototype = new GroundRobot();

  OldBattledome.Raptor = function() {
    this.type = "FireBreather";
    this.baseDamage += 200;
    this.totalLife = Math.floor(Math.random() * 18) + this.life;
  };
  OldBattledome.Raptor.prototype = new GroundRobot();

   OldBattledome.AtvRobot = function() {
    this.attackType = "All Terrain";
  };
  OldBattledome.AtvRobot.prototype = new Robot();

  OldBattledome.Hulk = function() {
    this.baseDamage += 145;
    this.totalLife = Math.floor(Math.random() * 25) + this.life;
  };
  OldBattledome.Hulk.prototype = new AtvRobot();

  OldBattledome.BigFoot = function() {
    this.baseDamage += 115;
    BigFoot.weapon = new Buzzsaw();
    this.totalLife = Math.floor(Math.random() * 30) + this.life;
  };
  OldBattledome.BigFoot.prototype = new AtvRobot();


  return OldBattledome;

})(Battledome || {});