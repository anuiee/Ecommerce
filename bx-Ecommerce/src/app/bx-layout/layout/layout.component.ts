import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BxNavbarComponent } from '../../bx-widget/organism/bx-navbar/bx-navbar.component';
import { BxFooterComponent } from '../../bx-widget/organism/bx-footer/bx-footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,
            BxNavbarComponent,
            BxFooterComponent
  
          ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
