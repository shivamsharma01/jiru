import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layer-wave-spacer',
  templateUrl: './layer-wave-spacer.component.html',
  styleUrls: ['./layer-wave-spacer.component.scss'],
})
export class LayerWaveSpacerComponent {
  @Input('bgColor') backgroundColor = '#ffffff';
}
