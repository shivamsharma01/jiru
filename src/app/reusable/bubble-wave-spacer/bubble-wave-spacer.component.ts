import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bubble-wave-spacer',
  templateUrl: './bubble-wave-spacer.component.html',
  styleUrls: ['./bubble-wave-spacer.component.scss'],
})
export class BubbleWaveSpacerComponent {
  @Input('color') color = '#1d1d1d';
}
