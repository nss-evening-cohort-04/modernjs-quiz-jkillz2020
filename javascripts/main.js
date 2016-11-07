"use strict";
$(document).ready(function(){
let Battledome = {};
//let GameOver = false;
let PlayerOneAlive = true;
let PlayerTwoAlive = true;

/*
  ROBOT WARS
 */
// WEAPONS //
function Weapon () {

}

function Gun () {
  this.damage = 100;
}
  Gun.prototype = new Weapon();

function Flamethrower () {
  this.damage = 400;
}
  Flamethrower.prototype = new Weapon();

function Bubbles () {
  this.damage = 300;
}
  Bubbles.prototype = new Weapon();

function ThorHammer () {
  this.damage = 450;
}
  ThorHammer.prototype = new Weapon();

function Lazer () {
  this.damage = 500;
}
  Lazer.prototype = new Weapon();

function Buzzsaw () {
  this.damage = 100;
}
  Buzzsaw.prototype = new Weapon();

//BASE ROBOT //

  function Robot () {
    this.baseDamage = Math.floor(Math.random() * 10);
    this.life = 5000;
    this.weapon = null;
    this.health = null;
    this.name = '';
  }
//ROBOT HEALTH
  Robot.life = function () {
    this.life + this.totalLife;
  };

//ROBOT TYPES//

  function AerialDrone () {
    this.type = "Drone";
    this.attackType = "Aerial";
  }
  AerialDrone.prototype = new Robot();

  function PredatorDrone () {
    this.baseDamage += 10;
    this.totalLife = Math.floor(Math.random() * 10) + this.life;
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
    this.baseDamage += 21;
    this.totalLife = Math.floor(Math.random() * 18) + this.life;
  }
  Raptor.prototype = new GroundRobot();

  function AtvRobot () {
    this.attackType = "All Terrain";
  }
  AtvRobot.prototype = new Robot();

  function Hulk () {
    this.baseDamage += 20;
    this.totalLife = Math.floor(Math.random() * 25) + this.life;
  }
  Hulk.prototype = new AtvRobot();

  function BigFoot () {
    this.baseDamage += 15;
    BigFoot.weapon = new Buzzsaw();
    this.totalLife = Math.floor(Math.random() * 30) + this.life;
  }
  BigFoot.prototype = new AtvRobot();
    
  ///ROBOT SELECT ELEMENTS////
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
//WEAPON SELECT ELEMENTS
function putWeaponsToDom(){
  let weaponPicker = '<select class="selectpicker weapon-picker hide" id="player-one-weapon-picker">';
          weaponPicker+='<option selected disabled>Select Weapon</option>';
          weaponPicker+='<option>Gun</option>';
          weaponPicker+='<option>Bubbles</option>';
          weaponPicker+='<option>Thor Hammer</option>';
          weaponPicker+='<option>Lazer</option>';
          weaponPicker+='<option>Buzzsaw</option>';
          weaponPicker+='</select>';
          weaponPicker+='<button class="hide" id="player-one-weapon-btn">Select Weapon</button>';
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
          weaponPicker+='<button class="hide" id="player-two-weapon-btn">Select Weapon</button>';
    $('#player-two-bot-select').append(weaponPicker);
  }
  putWeaponsToDom2();

//PLAYERS

  Battledome.PlayerOne = {};
  Battledome.PlayerTwo = {};

  //PLAYERS SELECT ROBOTS//
  //PLAYER ONE BOT SELECT//
  //
  //
  $('#player-one-bot-type').on('click', function(){
    if ($('.selectpicker',$(this).parent()).val() === null) {
      window.alert("Please select a Robot!");
      return;
    }
    if ($("#player-one-name").val() === "" ) {
      window.alert("Please enter a name!");
      return;
    }
      let PlayerOneName = $("#player-one-name").val();
    if($('.selectpicker',$(this).parent()).val() === "Raptor"){
        Battledome.PlayerOne.Robot = new Raptor();
      }
    else if($('.selectpicker',$(this).parent()).val() === "Bigfoot"){
         Battledome.PlayerOne.Robot = new BigFoot();
      }
    else if($('.selectpicker',$(this).parent()).val() === "Hulk"){
      Battledome.PlayerOne.Robot = new Hulk();
      }
    else if($('.selectpicker',$(this).parent()).val() === "Tank Drone"){
      Battledome.PlayerOne.Robot = new TankDrone();   
      }
    else if($('.selectpicker',$(this).parent()).val() === "Predator Drone"){
      Battledome.PlayerOne.Robot = new PredatorDrone();
      }
    else if($('.selectpicker',$(this).parent()).val() === "Jet Drone"){
      Battledome.PlayerOne.Robot = new JetDrone();
  }
  Battledome.PlayerOne.name = PlayerOneName;
  $('.selectpicker',$(this).parent()).addClass("hide");
  $('#player-one-bot-type').addClass("hide");
  $('#player-one-weapon-picker').removeClass("hide");
  $('#player-one-weapon-btn').removeClass("hide");
  $('#player-one-battle-area').append($('.selectpicker',$(this).parent()).val());
  });

//PLAYER TWO BOT SELECT//
//
  $('#player-two-bot-type').on('click', function(){
    if ($('.selectpicker',$(this).parent()).val() === null) {
      window.alert("Please select a Robot!");
      return;
    }
    if ($("#player-two-name").val() === "" ) {
      window.alert("Please enter a name!");
      return;
    }
    let playerTwoName = $("#player-two-name").val();
    if($('.selectpicker',$(this).parent()).val() === "Raptor"){
      Battledome.PlayerTwo.Robot =  new Raptor();
    }
    else if($('.selectpicker',$(this).parent()).val() === "Bigfoot"){
      Battledome.PlayerTwo.Robot = new BigFoot();
    }
    else if($('.selectpicker',$(this).parent()).val() === "Hulk"){
      Battledome.PlayerTwo.Robot = new Hulk();
    }
    else if($('.selectpicker',$(this).parent()).val() === "Tank Drone"){
      Battledome.PlayerTwo.Robot =  new TankDrone();
    }
    else if($('.selectpicker',$(this).parent()).val() === "Predator Drone"){
      Battledome.PlayerTwo.Robot =  new PredatorDrone();
    }
    else if($('.selectpicker',$(this).parent()).val() === "Jet Drone"){
      Battledome.PlayerTwo.Robot =  new JetDrone();
    }

    Battledome.PlayerTwo.name = playerTwoName;
    $('.selectpicker',$(this).parent()).addClass("hide");
    $('#player-two-bot-type').addClass("hide");
    $('#player-two-weapon-picker').removeClass("hide");
    $('#player-two-weapon-btn').removeClass("hide");
    $('#player-two-battle-area').append($('.selectpicker',$(this).parent()).val());
    console.log(Battledome.PlayerTwo);
  });

//PLAYERS PICK WEAPON//
//
//PLAYER ONE WEAPON SELECT///
  $('#player-one-weapon-btn').on('click', function(){
      if ($('#player-one-weapon-picker',$(this).parent()).val() === null) {
        alert("Please select a Weapon!");
        return;
      }
      if($('#player-one-weapon-picker',$(this).parent()).val() === "Gun"){
        Battledome.PlayerOne.Weapon =  new Gun();
      }
      else if($('#player-one-weapon-picker',$(this).parent()).val() === "Bubbles"){
        Battledome.PlayerOne.Weapon = new Bubbles();
      }
      else if($('#player-one-weapon-picker',$(this).parent()).val() === "Thor Hammer"){
        Battledome.PlayerOne.Weapon = new ThorHammer();
      }
      else if($('#player-one-weapon-picker',$(this).parent()).val() === "Lazer"){
        Battledome.PlayerOne.Weapon =  new Lazer();
      }
      else if($('#player-one-weapon-picker',$(this).parent()).val() === "Buzzsaw"){
        Battledome.PlayerOne.Weapon =  new Buzzsaw();
      }

    $('#player-one-battle-area').append(" with a " + $('#player-one-weapon-picker',$(this).parent()).val());
    });

  //PLAYER TWO WEAPON SELECT//
  
  $('#player-two-weapon-btn').on('click', function(){
      if ($('#player-two-weapon-picker',$(this).parent()).val() === null) {
        alert("Please select a Weapon!");
        return;
      }
      if($('#player-two-weapon-picker',$(this).parent()).val() === "Gun"){
        Battledome.PlayerTwo.Weapon =  new Gun();
      }
      else if($('#player-two-weapon-picker',$(this).parent()).val() === "Bubbles"){
        Battledome.PlayerTwo.Weapon = new Bubbles();
      }
      else if($('#player-two-weapon-picker',$(this).parent()).val() === "Thor Hammer"){
        Battledome.PlayerTwo.Weapon = new ThorHammer();
      }
      else if($('#player-two-weapon-picker',$(this).parent()).val() === "Lazer"){
        Battledome.PlayerTwo.Weapon =  new Lazer();
      }
      else if($('#player-two-weapon-picker',$(this).parent()).val() === "Buzzsaw"){
        Battledome.PlayerTwo.Weapon =  new Buzzsaw();
      }

    $('#player-two-battle-area').append(" with a " + $('#player-two-weapon-picker',$(this).parent()).val());
    });

  $("#attack-button").on('click', function(){
    Battledome.PlayerOne.Robot.life -= Battledome.PlayerTwo.Weapon.damage;
    Battledome.PlayerTwo.Robot.life -= Battledome.PlayerOne.Weapon.damage;
    console.log(Battledome.PlayerOne);
        if (Battledome.PlayerOne.Robot.life <= 0) {
              $("#winner-display").append("Player One Died!");
        }
      //Player Two//
            console.log(Battledome.PlayerTwo);
        if (Battledome.PlayerTwo.Robot.life <= 0) {
              $("#winner-display").append("Player Two Died!");
        }
    });
});




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
// You must also provide a select element underneath each text input so that the user can select one of the 6 robot models you defined. DONE
// Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one. DONE
// Once either robot's health is <0 display a message that the battle is over, and which one won. For example...
// The Viper Drone defeated the Behemoth ATV with its flamethrower. DONE
