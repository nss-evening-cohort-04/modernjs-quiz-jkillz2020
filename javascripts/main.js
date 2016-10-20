var Battledome = (function(OldBattledome) {
/*
  TODO: Modularize this code with IIFE or Browserify
 */
OldBattledome.Combatants = {};
/*
  Define the base object for any player of Battledome,
  whether a human player or a Enemy.
 */
OldBattledome.Combatants.Player = function(name) {
  this.type = null;
  this.class = null;
  this.weapon = null;
  this.image = null;

  this.playerName = name || "unknown robot";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.healthBonus = 0;
  this.strength = 90;
  this.intelligence = 90;

  this.toString = function() {
    var output = [this.playerName,
      ": a ",
      this.type,
      " ",
      this.class,
      " with ",
      this.health,
      " health. ",
      (this.class.ability) ? "Able to cast " : " Wielding a ",
      this.weapon.toString(),
      "!"
    ].join("");
    return output;
  };
};

OldBattledome.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  if (newWeapon === "Class-Surprise-Me" || newWeapon === undefined) {
    this.weapon = PlayerOne.generateWeapon();
  }
  else {
  this.weapon = new OldBattledome.WeaponsCase[newWeapon]();
  }
}
OldBattledome.Combatants.Player.prototype.generateWeapon = function() {
  var random = Math.round(Math.random() * (this.allowedWeapons.length - 1));
  var randomWeapon = this.allowedWeapons[random];
  this.weapon = new OldBattledome.WeaponsCase[randomWeapon]();
  return this.weapon;
};

OldBattledome.Combatants.Player.prototype.setClass = function(newClass) {
  if (newClass === "Class-Surprise-Me" || newClass === undefined) {
    this.class = PlayerOne.generateClass();
  }
  else {
  this.class = new OldBattledome.GuildHall[newClass]();
  }
}

OldBattledome.Combatants.Player.prototype.generateClass = function() {
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));
  var randomClass = this.allowedClasses[random];
  this.class = new OldBattledome.GuildHall[randomClass]();
  this.health += this.class.healthBonus;
  return this.class;
};


OldBattledome.Combatants.Enemy = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
    this.allowedWeapons = ["Dagger", "WarAxe", "BroadSword"];
};
OldBattledome.Combatants.Enemy.prototype = new OldBattledome.Combatants.Player();

return OldBattledome;

})(Battledome || {});