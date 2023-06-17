import { Component } from '@angular/core';

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
  isCollapsed = true;
  title = 'Paren Maren';
  canRoll: boolean = true;
  canParenMaren: boolean = false;
  blackDiceRolled: boolean = false;
  startGamePressed: boolean = false;
  gameBoard = {
    players: [],
    currentTurn: 0,
    lastTurn: 1
  };
  turnDices = [];
  currentPlayerScore;
  currentPlayer: string;
  diceAudio;
  blackDice = 1;
  winner;
  rules =
    'El Paren Maren es un juego de dados multijugador. Los juadores se turnan para lanzar 4 dados de a uno por vez. Si el resultado es 3 o inferior, termina el turno. Si el resultado es 4 o superior, el jugador puede seguir seguir tirando dados blancos o presionar el botón Paren Maren y tirar el dado negro. Este multiplica los puntos obtenidos con su resultado y da fin al turno. El primer jugador en acumular 365 puntos es el ganador.';

  startGame() {
    this.startGamePressed = true;
    this.currentPlayer = this.gameBoard.players[this.gameBoard.currentTurn].name;
  }

  switchTurn() {
    this.canRoll = true;
    this.canParenMaren = false;
    this.currentPlayerScore = this.gameBoard.players[this.gameBoard.currentTurn].score;
    let total: number = 0;
    let currentScore: number = this.currentPlayerScore;
    this.turnDices.forEach((item) => {
      total += item.rollResult;
    });
    let multipliedScore: number = total * this.blackDice;

    if (currentScore === undefined) {
      this.gameBoard.players[this.gameBoard.currentTurn].score = multipliedScore;
    } else {
      this.gameBoard.players[this.gameBoard.currentTurn].score = currentScore + multipliedScore;
    }
    if (this.gameBoard.players[this.gameBoard.currentTurn].score >= 365) {
      console.log(this.currentPlayer + 'Ganador!');
      this.canRoll = false;
      this.winner = this.currentPlayer;
      alert(this.winner + ' is the winner!');
    }

    localStorage.setItem('Game', JSON.stringify(this.gameBoard));
    this.turnDices = [];
    this.blackDiceRolled = false;
    this.gameBoard.currentTurn = (this.gameBoard.currentTurn + 1) % this.gameBoard.players.length;
    this.gameBoard.lastTurn = (this.gameBoard.lastTurn + 1) % this.gameBoard.players.length;
    this.currentPlayer = this.gameBoard.players[this.gameBoard.currentTurn].name;
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
    this.currentPlayer = this.gameBoard.players[this.gameBoard.currentTurn].name;

    if (this.turnDices.length === 4 || this.gameBoard.players.length === 0) {
      return;
    } else {
      let rollDice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
      this.turnDices.push({ rollResult: rollDice });

      if (rollDice >= 4) {
        this.canParenMaren = true;
        this.canRoll = true;
      }
      if (rollDice < 4 || this.turnDices.length > 4) {
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
    this.blackDice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    setTimeout(() => {
      this.switchTurn();
    }, 2000);
  }

  newPlayer() {
    let newPlayer: Player = new Player();
    newPlayer.name = prompt();
    if (newPlayer.name === '' || newPlayer.name === null || newPlayer.name === 'null') {
      return;
    } else {
      this.gameBoard.players.push(newPlayer);
      newPlayer.id = this.gameBoard.players.length;
      localStorage.setItem('Game', JSON.stringify(this.gameBoard));
    }
  }
}
