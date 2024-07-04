import { Component } from '@angular/core';
import { BirdComponent } from '../bird/bird.component';
import { PipeComponent } from '../pipe/pipe.component';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [BirdComponent, PipeComponent, NgForOf],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  birdY = 200;
  birdVelocity = 0;
  pipes = [{ x: 500, height: 200 }];
  score = 0;
  gravity = 0.5;
  pipeSpeed = 2;
  pipeFrequency = 200;
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
    }, this.pipeFrequency * 100);
  }

  updateGame() {
    // Gravity
    this.birdVelocity += this.gravity;
    this.birdY += this.birdVelocity;

    // Pipe movement
    this.pipes.forEach(pipe => pipe.x -= this.pipeSpeed);

    // Remove off-screen pipes
    if (this.pipes.length && this.pipes[0].x < -50) {
      this.pipes.shift();
      this.score++;
    }

    // Collision detection logic here

    if (this.birdY > window.innerHeight || this.birdY < 0) {
      this.gameOver();
    }
  }

  fly() {
    this.birdVelocity = -10;
  }

  addPipe() {
    const height = Math.floor(Math.random() * (window.innerHeight - this.pipeGap));
    this.pipes.push({ x: window.innerWidth, height });
  }

  gameOver() {
    // Reset the game
    this.birdY = 200;
    this.birdVelocity = 0;
    this.pipes = [{ x: 500, height: 200 }];
    this.score = 0;
  }
}
