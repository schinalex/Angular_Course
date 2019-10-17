import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output() numberChanged = new EventEmitter<number>()

  number = 0
  tick = () => this.numberChanged.emit(++this.number)

  game
  start = () => this.game = setInterval(this.tick, 2000)
  pause = () => clearInterval(this.game)

  constructor() { }

  ngOnInit() {
  }

}
