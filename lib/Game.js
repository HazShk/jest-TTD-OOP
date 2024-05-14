const inquirer = require("inquirer");
const Enemey = require("../lib/Enemy");
const Player = require("../lib/Player");

function Game() {
  this.roundNumber = 0;
  this.isPlayerTurn = false;
  this.enemies = [];
  this.currentEnemy;
  this.Player;

  Game.prototype.initializeGame = function () {
    this.enemies.push(new Enemey("goblin", "sword"));
    this.enemies.push(new Enemey("orc", "baseball bat"));
    this.enemies.push(new Enemey("skeleton", "axe"));

    this.currentEnemy = this.enemies[0];
  };

  inquirer.prompt({
    type: "text",
    name: "name",
    message: "What is your name?"
  })
  //destructure name from the prompt object
  .then(({name}) => {
    this.name = new Player(name);
    //test the object creation
    console.log(this.currentEnemy, this.Player);
  })
}
module.exports = Game;
