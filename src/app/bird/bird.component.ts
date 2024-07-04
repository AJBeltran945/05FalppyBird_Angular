// bird.component.ts
import { Component, Input, OnChanges } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-bird',
  standalone: true,
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.scss'],
  animations: [
    trigger('flap', [
      state('flapping', style({ transform: 'rotate(10deg)' })),
      state('normal', style({ transform: 'rotate(0)' })),
      transition('normal => flapping', animate('200ms ease-in')),
      transition('flapping => normal', animate('200ms ease-out'))
    ])
  ]
})
export class BirdComponent implements OnChanges {
  @Input() positionY: number = 0;
  isFlapping = false;

  ngOnChanges() {
    this.isFlapping = !this.isFlapping;
  }
}
