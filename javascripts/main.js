"use strict";
let Battledome = {};
// let PlayerOne = ${"#player-one-name"}.val();
// let PlayerTwo = ${"#player-two-name"}.val();
let GameOver = false;
let PlayerOneAlive = true;
let PlayerTwoAlive = true;

//Battledome.Combatants = {};
//Battledome.RobotGarage = {};
/*
  ROBOT WARS
 */
// WEAPONS //
let Gun = () => {
  this.damage = 1000;
};

let Flamethrower = () => {
  this.damage = 4000;
};

let Bubbles = () => {
  this.damage = 10000;
};

let ThorHammer = () => {
  this.damage = 5000;
};

let Lazer = () => {
  this.damage = 5200;
};

let Buzzsaw = () => {
  this.damage = 6800;
};

// var realSum2 = (num1, num2)=> {
//   return num1 + num2;
// }
// console.log("realsum ES6", realSum(4,5));

function Robot () {
  this.baseDamage = Math.floor(Math.random() * 10);
  this.life = 500;
  this.weapon = null;
  this.totalLife = 0;
}

Robot.prototype.attack = function (target) {
  this.totalDamage = this.baseDamage + this.weapon.damage;
  target.life -= this.totalDamage;
};

Robot.prototype.health = function () {
  this.totalLife = this.life + this.bonusLife;
};

function AerialDrone () {
  this.type = "Drone";
  this.attackType = "Aerial";
}
AerialDrone.prototype = new Robot();

function PredatorDrone () {
  this.baseDamage += 10;
  this.bonusLife = Math.floor(Math.random() * 10);
}
PredatorDrone.prototype = new AerialDrone();

function JetDrone () {
  this.baseDamage += 20;
  this.bonusLife = Math.floor(Math.random() * 15) + this.life;
}
JetDrone.prototype = new AerialDrone();

function GroundRobot () {
  this.attackType = "Earth Bound";
}
GroundRobot.prototype = new Robot();

function TankDrone () {
  this.type = "Tank";
  this.baseDamage += 5;
  this.bonusLife = Math.floor(Math.random() * 20) + this.life;
}
TankDrone.prototype = new GroundRobot();

function Raptor () {
  this.type = "FireBreather";
  this.baseDamage += 200;
  this.bonusLife = Math.floor(Math.random() * 18) + this.life;
}
Raptor.prototype = new GroundRobot();

function AtvRobot () {
  this.attackType = "All Terrain";
}
AtvRobot.prototype = new Robot();

function Hulk () {
  this.baseDamage += 145;
  this.bonusLife = Math.floor(Math.random() * 25) + this.life;
}
Hulk.prototype = new AtvRobot();

function BigFoot () {
  this.baseDamage += 115;
  BigFoot.weapon = new Buzzsaw();
  this.bonusLife = Math.floor(Math.random() * 30) + this.life;
}
BigFoot.prototype = new AtvRobot();
// console.log("bigfoot", Bigfoot.life);


var Raptor = new Raptor();
console.log("raptor", Raptor);
// Raptor.weapon = new Bubbles();
console.log("raptor", Raptor.life);

// var smaug = new Dragon();
// smaug.weapon = new Flamethrower();
// smaug.attack(raptor);
// console.log("raptor", raptor.life);
// 
let playerRobot = (robotSelected) => {

};
$(document).ready(function(){
console.log("jquery ready");
///put robots in selected list////
function putRobotsToDom(){
let robotSelect = '<select class="selectpicker">';
        robotSelect+='<option>Robot1</option>';
        robotSelect+='<option></option>';
        robotSelect+='<option></option>';
        robotSelect+='<option></option>';
        robotSelect+='<option></option>';
        robotSelect+='<option></option>';
        robotSelect+='</select>';
$('#player-one-bot-select').append(robotSelect);
$('#player-two-bot-select').append(robotSelect);
}
putRobotsToDom();

Robot.Player = function(name) {
  this.attackType = null;
  this.robot = null;
  this.weapon = null;
  this.playerName = name || "unknown player";
  this.healthBonus = 0;
};
//   this.toString = function() {
//     var output = [this.playerName,
//       ": a ",
//       this.robot,
//       " with ",
//       this.health,
//       " health. ",
//       " Wielding a ",
//       this.weapon.toString(),
//       "!"
//     ].join("");
//     return output;
//   };
// };

// $("#attack-button").click(function() {
//       PlayerOne.health = (PlayerOne.health - ComputerEnemy.weapon.damage);
//       if (PlayerOne.health - ComputerEnemy.weapon.damage <= 0) {
//               playerOneDied();
//       }
//       $("#player-one-health").html("Health " + (PlayerOne.health - ComputerEnemy.weapon.damage));
//     //Player Two//
//       ComputerEnemy.health = (ComputerEnemy.health - PlayerOne.weapon.damage);
//       if (ComputerEnemy.health - PlayerOne.weapon.damage <= 0) {
//               computerEnemyDied();
//       }
//       $("#player-two-health").html("Health " + (ComputerEnemy.health - PlayerOne.weapon.damage));
//  });
 });
// function Battleground () {

// }

// A base Robot function. DONE
// Define three robot type functions (e.g. Drone, Bipedal, ATV). DONE
// Each type must have a unique property, for example, if it is aerial or ground based. DONE
// Define at least 2 specific robot model functions for each type.  DONE
// Give each robot model a different range of health. For example, one model can have health range of 50-80, 
// and another one will have a range of 60-120. x
// To accomplish this, read about the Math.random() function in JavaScript. DONE
// Give each robot model a different range of damage they do using the same technique.  DONE
// Functional Requirements

// When your user interface first loads, provide 2 text inputs to name the two robots that will do battle. DONE
// You must also provide a select element underneath each text input so that the user can select one of the 6 robot models you defined.
// Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
// Once either robot's health is <0 display a message that the battle is over, and which one won. For example...
// The Viper Drone defeated the Behemoth ATV with its flamethrower.
