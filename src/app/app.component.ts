import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
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
export class AppComponent {
  title = 'Paren Maren';
  canRoll: boolean = true;
  canParenMaren: boolean = false;
  blackDiceRolled: boolean = false;
  gameBoard = {
    players: [],
    currentTurn: 0,
    lastTurn: 1
  };
  turnDices = [];
  currentPlayer;
  diceAudio;
  blackDice = 1;

  switchTurn() {
    this.canRoll = true;
    this.canParenMaren = false;
    this.currentPlayer = this.gameBoard.players[this.gameBoard.currentTurn].score;
    let total: number = 0;
    let currentScore: number = this.currentPlayer;
    this.turnDices.forEach((item) => {
      total += item.rollResult;
    });
    let multipliedScore: number = total * this.blackDice;
    if (currentScore === undefined) {
      this.gameBoard.players[this.gameBoard.currentTurn].score = multipliedScore;
    } else {
      this.gameBoard.players[this.gameBoard.currentTurn].score = currentScore + multipliedScore;
    }

    localStorage.setItem('Game', JSON.stringify(this.gameBoard));
    this.turnDices = [];
    this.blackDiceRolled = false;
    this.gameBoard.currentTurn = (this.gameBoard.currentTurn + 1) % this.gameBoard.players.length;
    this.gameBoard.lastTurn = (this.gameBoard.lastTurn + 1) % this.gameBoard.players.length;
  }

  playSound() {
    this.diceAudio = document.getElementById('dice-audio');
    this.diceAudio.load();
    this.diceAudio.play();
  }

  rollDice() {
    this.blackDice = 1;
    this.blackDiceRolled = false;
    this.playSound();
    this.currentPlayer = this.gameBoard.players[this.gameBoard.currentTurn];
    if (this.turnDices.length === 4 || this.gameBoard.players.length === 0) {
      return;
    } else {
      let rollDice = Math.floor(Math.random() * (6 - 1) + 1);
      this.turnDices.push({ rollResult: rollDice });

      if (rollDice >= 4) {
        this.canParenMaren = true;
        this.canRoll = true;
      }
      if (rollDice < 4 || this.turnDices.length === 4) {
        this.canParenMaren = false;
        this.canRoll = false;
        setTimeout(() => {
          this.switchTurn();
        }, 2000);
      }
    }
  }

  rollBlackDice() {
    this.playSound();
    this.blackDiceRolled = true;
    this.blackDice = Math.floor(Math.random() * (6 - 1) + 1);
    setTimeout(() => {
      this.switchTurn();
    }, 2000);
  }

  newPlayer() {
    let newPlayer: Player = new Player();
    newPlayer.name = prompt('');
    this.gameBoard.players.push(newPlayer);
    newPlayer.id = this.gameBoard.players.length;
    localStorage.setItem('Game', JSON.stringify(this.gameBoard));
  }
}
