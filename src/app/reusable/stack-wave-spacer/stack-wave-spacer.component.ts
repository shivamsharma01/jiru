import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stack-wave-spacer',
  templateUrl: './stack-wave-spacer.component.html',
  styleUrls: ['./stack-wave-spacer.component.scss']
})
export class StackWaveSpacerComponent {
  @Input('bgColor') backgroundColor = '#ffffff';
}
