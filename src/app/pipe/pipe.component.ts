// pipe.component.ts
import { Component, Input } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
  imports: [
    NgClass
  ],
  standalone: true // Makes this a standalone component
})
export class PipeComponent {
  @Input() positionX: number = 0;
  @Input() height: number = 0;
  @Input() isBottom: boolean = false; // New input to distinguish top and bottom pipes
}
