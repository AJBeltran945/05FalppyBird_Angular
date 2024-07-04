// game.component.ts
import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BirdComponent} from "../bird/bird.component";
import {PipeComponent} from "../pipe/pipe.component";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  standalone: true,
  imports: [CommonModule, BirdComponent, PipeComponent]
})
export class GameComponent {
  birdY = 200;
  birdVelocity = 0;
  pipes: { x: number, height: number, isBottom: boolean }[] = [];
  score = 0;
  gravity = 0.5;
  pipeSpeed = 2;
  pipeFrequency = 2000;
  pipeGap = 100;

  constructor() {
    this.startGame();
  }

  startGame() {
    setInterval(() => {
      this.updateGame();
    }, 20);

    setInterval(() => {
      this.addPipe();
    }, this.pipeFrequency);
  }

  updateGame() {
    this.birdVelocity += this.gravity;
    this.birdY += this.birdVelocity;
    this.pipes.forEach(pipe => pipe.x -= this.pipeSpeed);

    if (this.pipes.length && this.pipes[0].x < -50) {
      this.pipes.shift();
      this.score++;
    }

    if (this.birdY > window.innerHeight || this.birdY < 0) {
      this.gameOver();
    }
  }

  fly() {
    this.birdVelocity = -10;
  }


  addPipe() {
    const pipeHeight = Math.floor(Math.random() * (window.innerHeight - this.pipeGap * 2));
    const gapStart = pipeHeight + this.pipeGap;
    this.pipes.push(
      { x: window.innerWidth, height: pipeHeight, isBottom: false }, // Top pipe
      { x: window.innerWidth, height: window.innerHeight - gapStart, isBottom: true } // Bottom pipe
    );
  }


  gameOver() {
    this.birdY = 200;
    this.birdVelocity = 0;
    this.pipes = [];
    this.score = 0;
  }
}
