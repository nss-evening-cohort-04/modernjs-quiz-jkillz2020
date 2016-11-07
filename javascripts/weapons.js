

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