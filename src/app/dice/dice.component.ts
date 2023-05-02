import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  elDiceOne = document.getElementById('dice1');
  elComeOut = document.getElementById('roll');
  constructor() {}

  ngOnInit(): void {}
}
