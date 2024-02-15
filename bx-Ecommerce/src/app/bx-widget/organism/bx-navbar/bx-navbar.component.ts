import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BxHomeComponent } from '../bx-home/bx-home.component';
import { BxCartComponent } from '../bx-cart/bx-cart.component';
import { BxLoginComponent } from '../bx-login/bx-login.component';
import { log } from 'console';
import { CartService } from '../../../core/service/cart.service';
import { DatashareService } from '../../../core/datashare.service';
import { ProductService } from '../../../core/product.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BxInputComponent } from '../../atom/bx-input/bx-input.component';
import { BxButtonSubmitComponent } from '../../atom/bx-button-submit/bx-button-submit.component';

@Component({
  selector: 'app-bx-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule, BxHomeComponent,
            BxCartComponent,
            BxLoginComponent,
            FormsModule,
            ReactiveFormsModule,
            BxInputComponent,
            BxButtonSubmitComponent],
  templateUrl: './bx-navbar.component.html',
  styleUrl: './bx-navbar.component.scss'
})
export class BxNavbarComponent {

  menuType: string = 'default';
  sellerName:string="";
  userName:string="";
  user:any;
  totalItem: number=0 ;
  userId:any;
  loggedUser:any;
  filteredProducts: any[] = [];
  myForm! : FormGroup;
 constructor(private route:Router,
             private formBuilder: FormBuilder,
             private cartService:CartService,
             private productService: ProductService){

  this.myForm = this.formBuilder.group({
    search: new FormControl('',[Validators.required])
  });
 
  
 }
   // loggedUser = localStorage.getItem('token');
      // let loggedUserId= JSON.parse(this.loggedUser)?.id;  

 ngOnInit():void{
    this.route.events.subscribe((val: any) => {
      if (typeof localStorage !== 'undefined') {
      if (val.url) {
        if(localStorage.getItem('token')){
          this.menuType='user';
          let data:any = localStorage.getItem('token');
          this.user = JSON.parse(data);
          this.getProducts();
          this.detectCartCount();
          }
        else {
          this.menuType = 'default';
        }
      } }
     
    });

 }
//  callFunctions(): void {
//   this.getProducts();
//   this.detectCartCount();
// }
 //detectCartCount
 detectCartCount(){
  this.cartService.change.subscribe((res:any)=>{
    if(res == 1){
      this.getProducts();
      this.cartService.change.next(0);
    }
  })
 }
//getProducts
 getProducts(){
  let data:any = localStorage.getItem('token');
  this.user = JSON.parse(data);
  console.log('user',this.user[0].id);
   this.userId=this.user[0].id;
  this.cartService.getProducts(this.userId)
  .subscribe(res=>{
    this.totalItem = res.length;
    console.log("totalItem",this.totalItem);
  });
 }
//logout method
 logout(){
  localStorage.removeItem('token');
  this.cartService.change.next(0);
  this.route.navigate(['/'])
}

//search method
// submitSearch(value:string){
//   console.log("search for",value);
//   this.route.navigate([`search/${value}`]);

// }


submitSearch(searchTerm: any): void {
  console.log('search for',searchTerm);
  if (!searchTerm) {
    this.filteredProducts = []; // Clear filteredProducts if search term is empty
    
  } else {
    this.productService.searchProducts(searchTerm)
      .subscribe((products:any) => this.filteredProducts = products);
      console.log("serach items",this.filteredProducts );
      
      
  }
  // this.myForm.reset();
}
}
