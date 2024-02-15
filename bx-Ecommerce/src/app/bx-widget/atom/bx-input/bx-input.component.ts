import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bx-input',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './bx-input.component.html',
  styleUrl: './bx-input.component.scss'
})
export class BxInputComponent {
  @Input() type!:string;
  @Input() name!:string;
  @Input() control!:string;
  @Input() placeHolder!:string;
  @Input() iconSrc!:string;
  @Input() style!:any;
  @Input() parentForm!:FormGroup;
  @Input() customDivStyle!: { [key: string]: string };
}
