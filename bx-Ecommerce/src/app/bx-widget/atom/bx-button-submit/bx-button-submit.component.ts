import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bx-button-submit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bx-button-submit.component.html',
  styleUrl: './bx-button-submit.component.scss'
})
export class BxButtonSubmitComponent {
  @Input() btnText! : string;
  @Input() dynamicStyle!: { [key: string]: string };
  @Input() isDisabled!: boolean;
}
