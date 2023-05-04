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
  canRoll: boolean = true;
  gameBoard = {
    players: [],
    currentTurn: 0,
    lastTurn: 1
  };
  score: number = 0;
  rollResult = 0;
  turnDices = [];
  currentPlayer;
  diceAudio;
  lastPlayer;

  ngOnInit() {}

  switchTurn() {
    this.canRoll = true;
    this.currentPlayer = this.gameBoard.players[this.gameBoard.currentTurn];
    this.lastPlayer = this.gameBoard.players[this.gameBoard.lastTurn].score;
    console.log(this.lastPlayer);
    if (this.lastPlayer) {
      this.currentPlayer.score = this.score - this.lastPlayer;
    } else {
      this.currentPlayer.score = this.score;
    }

    localStorage.setItem('Game', JSON.stringify(this.gameBoard));
    this.turnDices = [];
    this.gameBoard.currentTurn = (this.gameBoard.currentTurn + 1) % this.gameBoard.players.length;
    this.gameBoard.lastTurn = (this.gameBoard.lastTurn + 1) % this.gameBoard.players.length;
  }

  playSound() {
    this.diceAudio = document.getElementById('dice-audio');
    this.diceAudio.load();
    this.diceAudio.play();
  }

  rollDice() {
    this.playSound();
    this.rollResult = 0;
    this.currentPlayer = this.gameBoard.players[this.gameBoard.currentTurn];

    if (this.turnDices.length === 4) {
      return;
    } else {
      let rollDice = Math.floor(Math.random() * (6 - 1) + 1);
      this.rollResult = rollDice;
      let x = this.score + rollDice;
      this.score = x;
      this.turnDices.push({ id: 1, rollResult: rollDice });
      if (rollDice >= 4) {
        this.canRoll = true;
      }
      if (rollDice < 4 || this.turnDices.length === 4) {
        this.canRoll = false;
        setTimeout(() => {
          this.switchTurn();
        }, 2000);
      }
    }
  }

  newPlayer() {
    let newPlayer: Player = new Player();
    newPlayer.name = prompt('');
    this.gameBoard.players.push(newPlayer);
    newPlayer.id = this.gameBoard.players.length;
    localStorage.setItem('Game', JSON.stringify(this.gameBoard));
  }
}
