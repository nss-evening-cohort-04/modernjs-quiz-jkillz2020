var Battledome = (function() {

Battledome.Combatants = {};
/*
  Define the base object for any player of Battledome,
  whether a human player or a Enemy.
 */
Battledome.Combatants.Player = function(name) {
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

Battledome.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  if (newWeapon === "Class-Surprise-Me" || newWeapon === undefined) {
    this.weapon = PlayerOne.generateWeapon();
  }
  else {
  this.weapon = new Battledome.WeaponsCase[newWeapon]();
  }
}
Battledome.Combatants.Player.prototype.generateWeapon = function() {
  var random = Math.round(Math.random() * (this.allowedWeapons.length - 1));
  var randomWeapon = this.allowedWeapons[random];
  this.weapon = new Battledome.WeaponsCase[randomWeapon]();
  return this.weapon;
};

Battledome.Combatants.Player.prototype.setClass = function(newClass) {
  if (newClass === "Class-Surprise-Me" || newClass === undefined) {
    this.class = PlayerOne.generateClass();
  }
  else {
  this.class = new Battledome.RobotGarage[newClass]();
  }
}

Battledome.Combatants.Player.prototype.generateClass = function() {
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));
  var randomClass = this.allowedClasses[random];
  this.class = new Battledome.RobotGarage[randomClass]();
  this.health += this.class.healthBonus;
  return this.class;
};


Battledome.Combatants.Enemy = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
    this.allowedWeapons = ["BuzzSaw", "Laser", "Flamethrower"];
};
Battledome.Combatants.Enemy.prototype = new Battledome.Combatants.Player();

/*ROBOT CLASSES*/
Battledome.RobotGarage.Robot = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Battledome.RobotGarage.Robot.prototype = new Battledome.RobotGarage.PlayerClass();

Battledome.RobotGarage.Drone = function() {
  this.name = "Drone";
  this.image = "/images/class-warrior.png";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
Battledome.RobotGarage.Flying.prototype = new Battledome.RobotGarage.Robot();

Battledome.RobotGarage.Flying = function() {
  this.name = "Flying";
  this.image = "/images/class-warrior.png";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
Battledome.RobotGarage.Flying.prototype = new Battledome.RobotGarage.Robot();

Battledome.RobotGarage.Atv = function() {
  this.name = "ATV";
  this.image = "/images/Richelle1.jpg";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
Battledome.RobotGarage.Atv.prototype = new Battledome.RobotGarage.Robot();


return Battledome;

})(Battledome || {});