import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  number: number = 0
  tick = () => {
    this.number++
    console.log(this.number)
  }
  game = setInterval(this.tick, 2000)
  pause = () => clearInterval(this.game)
  constructor() { }

  ngOnInit() {
  }

}
