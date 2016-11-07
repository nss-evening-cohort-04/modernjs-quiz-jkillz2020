"use strict";
var Battledome = (function(OldBattledome) {


  // WEAPONS //
  OldBattledome.Weapon = function() {

  };

  OldBattledome.Gun = function() {
    this.damage = 1000;
  };
    OldBattledome.Gun.prototype = new Weapon();

  OldBattledome.Flamethrower = function() {
    this.damage = 4000;
  };
    OldBattledome.Flamethrower.prototype = new Weapon();

  OldBattledome.Bubbles = function() {
    this.damage = 10000;
  };
    OldBattledome.Bubbles.prototype = new Weapon();

  OldBattledome.ThorHammer = function() {
    this.damage = 5000;
  };
    OldBattledome.ThorHammer.prototype = new Weapon();

  OldBattledome.Lazer = function() {
    this.damage = 6500;
  };
    OldBattledome.Lazer.prototype = new Weapon();

  OldBattledome.Buzzsaw = function () {
    this.damage = 6800;
  };
    OldBattledome.Buzzsaw.prototype = new Weapon();

  return OldBattledome;

})(Battledome || {});