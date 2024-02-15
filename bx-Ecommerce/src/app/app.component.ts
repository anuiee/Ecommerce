import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BxHomeComponent } from './bx-widget/organism/bx-home/bx-home.component';
import { BxCartComponent } from './bx-widget/organism/bx-cart/bx-cart.component';
import { BxLoginComponent } from './bx-widget/organism/bx-login/bx-login.component';
import { LayoutComponent } from './bx-layout/layout/layout.component';
import { BxSignupComponent } from './bx-widget/organism/bx-signup/bx-signup.component';
import { BxFooterComponent } from './bx-widget/organism/bx-footer/bx-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule,
          LayoutComponent,
            BxHomeComponent,
            BxCartComponent,
            BxLoginComponent,
            BxSignupComponent,
            BxFooterComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bx-Ecommerce';
}
