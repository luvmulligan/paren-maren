import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'paren-maren';
  player: any = {
    puntaje: 0
  };
  turn: any = [
    {
      number: 0,
      player: 0,
      dices: null,
      score: 0
    }
  ];
  turno: any = [];
  score: number = 0;
  rollResult = 0;
  rollResult2 = 0;
  rollResult3 = 0;
  rollResult4 = 0;

  ngOnInit() {}

  rollDice() {
    this.rollResult = 0;
    this.rollResult2 = 0;
    this.rollResult3 = 0;
    this.rollResult4 = 0;
    let turnScore = 0;
    let turnPlayer;
    let turnDices = [];
    let turnNumber;
    setTimeout(() => {
      this.rollResult = Math.floor(Math.random() * (6 - 1) + 1);
      this.score = this.score + this.rollResult;
      if (this.rollResult >= 4) {
        setTimeout(() => {
          this.rollResult2 = Math.floor(Math.random() * (6 - 1) + 1);
          this.score = this.score + this.rollResult2;

          if (this.rollResult2 >= 4) {
            setTimeout(() => {
              this.rollResult3 = Math.floor(Math.random() * (6 - 1) + 1);
              this.score = this.score + this.rollResult3;

              if (this.rollResult3 >= 4) {
                setTimeout(() => {
                  this.rollResult4 = Math.floor(Math.random() * (6 - 1) + 1);
                  this.score = this.score + this.rollResult4;
                }, 500);
              }
            }, 500);
          }
        }, 500);
      }
    }, 500);
    setTimeout(() => {
      console.log(this.score);
    }, 2500);

    //   let result = Math.floor(Math.random() * (6 - 1) + 1);
    //   if (result < 3) {
    //     this.puntaje = result;
    //     this.player = { puntaje: this.puntaje };
    //     console.log(this.player);
    //   } else {
    //     this.turno.push({ dado: this.turno.length + 1, valor: result });
    //     if (this.turno.length > 3) {
    //       console.log(this.turno);
    //       console.log('fin del turno');
    //       this.turno = [];
    //     }
    //   }
    // }
  }
}
