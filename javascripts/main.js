"use strict";
$(document).ready(function(){
console.log("jquery ready");
let Battledome = {};
let GameOver = false;
let PlayerOneAlive = true;
let PlayerTwoAlive = true;

//Battledome.Combatants = {};
//Battledome.RobotGarage = {};
/*
  ROBOT WARS
 */
// WEAPONS //
function Weapon () {

}

function Gun () {
  this.damage = 1000;
}
  Gun.prototype = new Weapon();

function Flamethrower () {
  this.damage = 4000;
}
  Flamethrower.prototype = new Weapon();

function Bubbles () {
  this.damage = 10000;
}
  Bubbles.prototype = new Weapon();

function ThorHammer () {
  this.damage = 5000;
}
  ThorHammer.prototype = new Weapon();

function Lazer () {
  this.damage = 6500;
}
  Lazer.prototype = new Weapon();

function Buzzsaw () {
  this.damage = 6800;
}
  Buzzsaw.prototype = new Weapon();

// var realSum2 = (num1, num2)=> {
//   return num1 + num2;
// }
// console.log("realsum ES6", realSum(4,5));

  function Robot () {
    this.baseDamage = Math.floor(Math.random() * 10);
    this.life = 500;
    this.weapon = null;
    this.totalLife = 0;
    this.name = '';
  }

  

  Robot.prototype.health = function () {
    this.totalLife = this.life + this.totalLife;
  };

  function AerialDrone () {
    this.type = "Drone";
    this.attackType = "Aerial";
  }
  AerialDrone.prototype = new Robot();

  function PredatorDrone () {
    this.baseDamage += 10;
    this.totalLife = Math.floor(Math.random() * 10);
  }
  PredatorDrone.prototype = new AerialDrone();

  function JetDrone () {
    this.baseDamage += 20;
    this.totalLife = Math.floor(Math.random() * 15) + this.life;
  }
  JetDrone.prototype = new AerialDrone();

  function GroundRobot () {
    this.attackType = "Earth Bound";
  }
  GroundRobot.prototype = new Robot();

  function TankDrone () {
    this.type = "Tank";
    this.baseDamage += 5;
    this.totalLife = Math.floor(Math.random() * 20) + this.life;
  }
  TankDrone.prototype = new GroundRobot();

  function Raptor () {
    this.type = "FireBreather";
    this.baseDamage += 200;
    this.totalLife = Math.floor(Math.random() * 18) + this.life;
  }
  Raptor.prototype = new GroundRobot();

  function AtvRobot () {
    this.attackType = "All Terrain";
  }
  AtvRobot.prototype = new Robot();

  function Hulk () {
    this.baseDamage += 145;
    this.totalLife = Math.floor(Math.random() * 25) + this.life;
  }
  Hulk.prototype = new AtvRobot();

  function BigFoot () {
    this.baseDamage += 115;
    BigFoot.weapon = new Buzzsaw();
    this.totalLife = Math.floor(Math.random() * 30) + this.life;
  }
  BigFoot.prototype = new AtvRobot();
  // console.log("bigfoot", Bigfoot.life);


  console.log("raptor", Raptor);
  // Raptor.weapon = new Bubbles();
  var newBigfoot = new BigFoot();
  console.log("bigfoot", newBigfoot.totalLife);

  //var bigfoot = new BigFoot();
  //console.log("bigfoot", bigfoot);

  // bigfoot.weapon = new Flamethrower();
  // bigfoot.attack(raptor);
  // console.log("raptor", raptor.life);
  // 
  // let playerRobot = (robotSelected) => {

  // };
  ///put robots in select list////
  function putRobotsToDom(){
  let robotPicker = '<select class="selectpicker player-picker">';
          robotPicker+='<option selected disabled>Select Robot</option>';
          robotPicker+='<option>Raptor</option>';
          robotPicker+='<option>Bigfoot</option>';
          robotPicker+='<option>Hulk</option>';
          robotPicker+='<option>Tank Drone</option>';
          robotPicker+='<option>Predator Drone</option>';
          robotPicker+='<option>Jet Drone</option>';
          robotPicker+='</select>';
  $('#player-one-bot-select').append(robotPicker);
  $('#player-two-bot-select').append(robotPicker);
  }
  putRobotsToDom();

function putWeaponsToDom(){
  let weaponPicker = '<select class="selectpicker weapon-picker hide" id="player-one-weapon-picker">';
          weaponPicker+='<option selected disabled>Select Weapon</option>';
          weaponPicker+='<option>Gun</option>';
          weaponPicker+='<option>Bubbles</option>';
          weaponPicker+='<option>Thor Hammer</option>';
          weaponPicker+='<option>Lazer</option>';
          weaponPicker+='<option>Buzzsaw</option>';
          weaponPicker+='</select>';
    $('#player-one-bot-select').append(weaponPicker);
  }
  putWeaponsToDom();
  function putWeaponsToDom2(){
  let weaponPicker = '<select class="selectpicker weapon-picker hide" id="player-two-weapon-picker">';
          weaponPicker+='<option selected disabled>Select Weapon</option>';
          weaponPicker+='<option>Gun</option>';
          weaponPicker+='<option>Bubbles</option>';
          weaponPicker+='<option>Thor Hammer</option>';
          weaponPicker+='<option>Lazer</option>';
          weaponPicker+='<option>Buzzsaw</option>';
          weaponPicker+='</select>';
    $('#player-two-bot-select').append(weaponPicker);
  }
  putWeaponsToDom2();

  Battledome.PlayerOne = {};
  Battledome.PlayerTwo = {};



  //Players select robot//
  $('#player-one-bot-type').on('click', function(){
    if ($('.selectpicker',$(this).parent()).val() === null) {
      alert("Please select a Robot!");
      return;
    }
    if ($("#player-one-name").val() === "" ) {
      alert("Please enter a name!");
      return;
    }
    console.log($('.selectpicker',$(this).parent()).val());
    
  let PlayerOne = $("#player-one-name").val();
    if(
      $('.selectpicker',$(this).parent()).val() === "Raptor"){
         Battledome.PlayerOne =  {
          name: PlayerOne,
          robot:new Raptor(),
          health: this.totalLife
        };
    }
    else if(
      $('.selectpicker',$(this).parent()).val() === "Bigfoot"){
         Battledome.PlayerOne =  {
          name: PlayerOne,
          robot:new BigFoot(),
          health: this.totalLife
        };
      }
    else if(
      $('.selectpicker',$(this).parent()).val() === "Hulk"){
         Battledome.PlayerOne =  {
          name: PlayerOne,
          robot:new Hulk(),
          health: this.totalLife
        };
      }
    else if(
      $('.selectpicker',$(this).parent()).val() === "Tank Drone"){
         Battledome.PlayerOne =  {
          name: PlayerOne,
          robot:new TankDrone(),
          health: this.totalLife
        };
      }
    else if(
      $('.selectpicker',$(this).parent()).val() === "Predator Drone"){
         Battledome.PlayerOne =  {
          name: PlayerOne,
          robot:new PredatorDrone(),
          health: this.totalLife
        };
      }
    else if(
      $('.selectpicker',$(this).parent()).val() === "Jet Drone"){
         Battledome.PlayerOne =  {
          name: PlayerOne,
          robot:new JetDrone(),
          health: this.totalLife
        };
  }
  $('.selectpicker',$(this).parent()).addClass("hide");
  $('#player-one-weapon-picker').removeClass("hide");
  $('#player-one-battle-area').append($('.selectpicker',$(this).parent()).val());
  });

  $('#player-two-bot-type').on('click', function(){
    let playerTwoName = $("#player-two-name").val();
    if($('.selectpicker',$(this).parent()).val() === "Raptor"){
      Battledome.PlayerTwo =  new Raptor();
    }
    else if($('.selectpicker',$(this).parent()).val() === "Bigfoot"){
      Battledome.PlayerTwo = new BigFoot();
    }
    else if($('.selectpicker',$(this).parent()).val() === "Hulk"){
      Battledome.PlayerTwo = new Hulk();
    }
    else if($('.selectpicker',$(this).parent()).val() === "Tank Drone"){
      Battledome.PlayerTwo =  new TankDrone();
    }
    else if($('.selectpicker',$(this).parent()).val() === "Predator Drone"){
      Battledome.PlayerTwo =  new PredatorDrone();
    }
    else if($('.selectpicker',$(this).parent()).val() === "Jet Drone"){
      Battledome.PlayerTwo =  new JetDrone();
    }

    Battledome.PlayerTwo.name = playerTwoName;
    $('.selectpicker',$(this).parent()).addClass("hide");
    $('#player-two-weapon-picker').removeClass("hide");
    $('#player-two-battle-area').append($('.selectpicker',$(this).parent()).val());
    console.log("playerTwo",Battledome.PlayerTwo);
  });


  $("#attack-button").on('click', function(){
    PlayerOne.health = (Battledome.PlayerOne.health - Battledome.PlayerTwo.weapon.damage);
        if (PlayerOne.health - PlayerTwo.weapon.damage <= 0) {
                playerOneDied();
        }
        $("#player-one-health").html("Health " + (PlayerOne.health - PlayerTwo.weapon.damage));
      //Player Two//
        PlayerTwo.health = (Battledome.PlayerTwo.health - Battledome.PlayerOne.weapon.damage);
        if (PlayerTwo.health - PlayerOne.weapon.damage <= 0) {
                PlayerTwoDied();
        }
        $("#player-two-health").html("Health " + (PlayerTwo.health - PlayerOne.weapon.damage));
   });
});











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
//       PlayerOne.health = (PlayerOne.health - PlayerTwo.weapon.damage);
//       if (PlayerOne.health - PlayerTwo.weapon.damage <= 0) {
//               playerOneDied();
//       }
//       $("#player-one-health").html("Health " + (PlayerOne.health - PlayerTwo.weapon.damage));
//     //Player Two//
//       PlayerTwo.health = (PlayerTwo.health - PlayerOne.weapon.damage);
//       if (PlayerTwo.health - PlayerOne.weapon.damage <= 0) {
//               PlayerTwoDied();
//       }
//       $("#player-two-health").html("Health " + (PlayerTwo.health - PlayerOne.weapon.damage));
//  });
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
