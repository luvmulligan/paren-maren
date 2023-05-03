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
  canRoll: boolean = true;

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
  turnValue;
  currentPlayer;
  x;

  ngOnInit() {}

  // myFunction().then(
  //   function(value) {myDisplayer(value);}
  // );

  // this.turnDices.forEach((val) => {
  //   total += val.value;
  //   console.log(total);
  // }

  switchTurn() {
    this.canRoll = true;
    this.currentPlayer = this.gameBoard.players[this.gameBoard.currentTurn];
    this.currentPlayer.score = this.score;
    localStorage.setItem('Game', JSON.stringify(this.gameBoard));
    this.turnDices = [];
    this.gameBoard.currentTurn = (this.gameBoard.currentTurn + 1) % this.gameBoard.players.length;
  }

  // Define the function for updating the score
  updateScore(playerIndex, score: any) {
    this.gameBoard.players[playerIndex].score = score;
    console.log(this.gameBoard.players[playerIndex].score);
  }

  playSound() {
    this.x = document.getElementById('dice-audio');
    this.x.load();
    this.x.play();
  }

  rollDice1() {
    this.playSound();
    this.rollResult = 0;
    if (this.turnDices.length === 4) {
      return;
    } else {
      this.currentPlayer = this.gameBoard.players[this.gameBoard.currentTurn];

      // let currentPlayer = JSON.parse(localStorage.getItem('Players'))[0 + 1];
      let rollDice = Math.floor(Math.random() * (6 - 1) + 1);
      if (rollDice >= 4) {
        this.canRoll = true;
      }
      if (rollDice < 4) {
        this.canRoll = false;
      }
      this.rollResult = rollDice;
      this.score = this.score + this.rollResult;
      // this.updateScore(this.gameBoard.currentTurn, this.rollResult);

      this.turnDices.push({ id: 1, rollResult: this.rollResult });
      // this.score = this.score + this.rollResult;
    }
  }

  // rollDice2() {
  //   let rollDice = Math.floor(Math.random() * (6 - 1) + 1);
  //   if (rollDice >= 4) {
  //     this.canRoll2 = true;
  //   }
  //   if (rollDice < 4) {
  //     this.canRoll2 = false;
  //   }
  //   this.rollResult2 = rollDice;

  //   this.score = this.score + rollDice;
  //   console.log(this.score);
  //   this.turnDices.push({ id: 2, rollResult: this.rollResult2 });
  //   // this.updateScore(this.gameBoard.currentTurn, rollDice);
  //   // this.turnDices.push({ value: rollDice });
  // }
  // rollDice3() {
  //   let rollDice = Math.floor(Math.random() * (6 - 1) + 1);
  //   if (rollDice >= 4) {
  //     this.canRoll3 = true;
  //   }
  //   if (rollDice < 4) {
  //     this.canRoll3 = false;
  //   }
  //   this.rollResult3 = rollDice;

  //   this.score = this.score + rollDice;
  //   console.log(this.score);
  //   this.turnDices.push({ id: 3, rollResult: this.rollResult3 });
  //   // this.score = this.score + this.rollResult3;
  // }
  // rollDice4() {
  //   let rollDice = Math.floor(Math.random() * (6 - 1) + 1);
  //   if (rollDice >= 4) {
  //     this.canRoll4 = true;
  //   }
  //   if (rollDice < 4) {
  //     this.canRoll4 = false;
  //   }
  //   this.rollResult4 = rollDice;

  //   this.score = this.score + rollDice;
  //   console.log(this.score);
  //   this.turnDices.push({ id: 4, rollResult: this.rollResult4 });
  //   // this.updateScore(this.gameBoard.currentTurn, rollDice);

  //   // this.score = this.score + this.rollResult4;
  // }

  newPlayer() {
    let newPlayer: Player = new Player();
    newPlayer.name = prompt('');
    this.gameBoard.players.push(newPlayer);
    newPlayer.id = this.gameBoard.players.length;
    localStorage.setItem('Game', JSON.stringify(this.gameBoard));
  }
}
