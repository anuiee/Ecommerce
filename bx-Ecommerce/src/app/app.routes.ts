import { Routes } from '@angular/router';
import { LayoutComponent } from './bx-layout/layout/layout.component';
import { BxHomeComponent } from './bx-widget/organism/bx-home/bx-home.component';
import { BxLoginComponent } from './bx-widget/organism/bx-login/bx-login.component';
import { BxCartComponent } from './bx-widget/organism/bx-cart/bx-cart.component';
import { BxSignupComponent } from './bx-widget/organism/bx-signup/bx-signup.component';
import { authGuard } from './core/guard/auth.guard';
import { BxUserHomeComponent } from './bx-widget/organism/bx-user-home/bx-user-home.component';
import { BxProductComponent } from './bx-widget/organism/bx-product/bx-product.component';
import { BxProductDetailComponent } from './bx-widget/organism/bx-product-detail/bx-product-detail.component';
import { BxSearchComponent } from './bx-widget/organism/bx-search/bx-search.component';
import { BxUserProfileComponent } from './bx-widget/organism/bx-user-profile/bx-user-profile.component';

export const routes: Routes = [
    {
        path:'',
        component:BxHomeComponent
    },
    {
        path:'login',
        component:BxLoginComponent,
        
    },
    {
        path:'signup',
        component:BxSignupComponent
    },
    {
        path:'cart',
        canActivate:[authGuard],
        component:BxCartComponent
    },
    {
        path:'user-home',
        canActivate:[authGuard],
        component:BxUserHomeComponent

    },
    {
        path:'product',
        canActivate:[authGuard],
        component:BxProductComponent
    },
    { 
        path:'product-detail',
        component:BxProductDetailComponent,
    } ,
    { 
        path:'search/:query',
        component:BxSearchComponent,
    },
    { 
        path:'user-profile',
        component:BxUserProfileComponent,
    }  
];
