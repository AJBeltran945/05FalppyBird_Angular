import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  @Input() positionX: number = 0;
  @Input() height: number = 0;
}