import { Component, OnInit } from '@angular/core';

export class Player {
  id: number;
  name: string;
  score: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'paren-maren';
  turnPlayer: Player;
  canRoll: boolean = false;
  canRoll2: boolean = false;
  canRoll3: boolean = false;
  canRoll4: boolean = false;

  gameBoard = {
    players: [],
    currentTurn: 0
  };
  score: number = 0;
  rollResult = 0;
  rollResult2 = 0;
  rollResult3 = 0;
  rollResult4 = 0;
  turnDices = [];

  ngOnInit() {}

  switchTurn() {
    this.gameBoard.currentTurn = (this.gameBoard.currentTurn + 1) % this.gameBoard.players.length;
    this.rollDice1();
  }

  // Define the function for updating the score
  updateScore(playerIndex, diceRoll) {
    this.gameBoard.players[playerIndex].score += diceRoll;
  }

  newPlayer() {
    let newPlayer: Player = new Player();
    newPlayer.name = prompt('');
    this.gameBoard.players.push(newPlayer);
    newPlayer.id = this.gameBoard.players.length;
    console.log(this.gameBoard.players);
    localStorage.setItem('Players', JSON.stringify(this.gameBoard.players));
  }
  endTurn() {
    let currentPlayer = JSON.parse(localStorage.getItem('Players'))[0];
  }

  // Define the function for playing a turn
  playTurn() {
    // Roll the dice
    let diceRoll = this.rollDice1();

    // Update the score
    var currentPlayer = this.gameBoard.players[this.gameBoard.currentTurn];
    this.updateScore(this.gameBoard.currentTurn, diceRoll);

    // Switch turns
    this.switchTurn();

    // Display the game board

    // Return the dice roll and the updated game board
    return {
      diceRoll: diceRoll,
      gameBoard: this.gameBoard
    };
  }

  rollDice1() {
    this.turnDices = [];
    this.rollResult = 0;
    this.rollResult2 = 0;
    this.rollResult3 = 0;
    this.rollResult4 = 0;
    var currentPlayer = this.gameBoard.players[this.gameBoard.currentTurn];

    // let currentPlayer = JSON.parse(localStorage.getItem('Players'))[0 + 1];
    this.rollResult = Math.floor(Math.random() * (6 - 1) + 1);
    if (this.rollResult >= 4) {
      this.canRoll = true;
    }
    if (this.rollResult < 4) {
      this.canRoll = false;
    }
    this.turnDices.push({ value: this.rollResult });
    this.score = this.score + this.rollResult;
    console.log(currentPlayer);
  }

  rollDice2() {
    this.rollResult2 = Math.floor(Math.random() * (6 - 1) + 1);
    if (this.rollResult2 >= 4) {
      this.canRoll2 = true;
    }
    if (this.rollResult2 < 4) {
      this.canRoll2 = false;
    }
    this.turnDices.push({ value: this.rollResult2 });

    this.score = this.score + this.rollResult2;
    console.log(this.turnDices);
  }
  rollDice3() {
    this.rollResult3 = Math.floor(Math.random() * (6 - 1) + 1);
    if (this.rollResult3 >= 4) {
      this.canRoll3 = true;
    }
    if (this.rollResult3 < 4) {
      this.canRoll3 = false;
    }
    this.turnDices.push({ value: this.rollResult3 });

    this.score = this.score + this.rollResult3;
    console.log(this.turnDices);
  }
  rollDice4() {
    this.rollResult4 = Math.floor(Math.random() * (6 - 1) + 1);
    if (this.rollResult4 >= 4) {
      this.canRoll4 = true;
    }
    if (this.rollResult4 < 4) {
      this.canRoll4 = false;
    }
    this.turnDices.push({ value: this.rollResult4 });

    this.score = this.score + this.rollResult4;
    console.log(this.turnDices);
  }
}
