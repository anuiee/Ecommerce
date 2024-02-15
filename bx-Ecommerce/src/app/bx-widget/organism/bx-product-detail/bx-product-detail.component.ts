import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../../core/product.service';
import { DatashareService } from '../../../core/datashare.service';
import { BxCardComponent } from '../../molecule/bx-card/bx-card.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { cart } from '../../../data-type';
import { CartService } from '../../../core/service/cart.service';
import { BxUserHomeComponent } from '../bx-user-home/bx-user-home.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bx-product-detail',
  standalone: true,
  imports: [CommonModule,BxCardComponent,HttpClientModule,BxUserHomeComponent],
  templateUrl: './bx-product-detail.component.html',
  styleUrl: './bx-product-detail.component.scss'
})
export class BxProductDetailComponent implements OnInit{
   productDetails : any = {};
   jsonData:any[]=[];
   user:any;



   constructor(private productService:ProductService,
    private datashare:DatashareService,
    private route:Router,
    private Cartservice:CartService){} 
 
  ngOnInit():void{
    let data:any = localStorage.getItem('token');
    this.user = JSON.parse(data);
    console.log('user',this.user[0].id);
    this.productService.cast.subscribe((value) => {
      //debugger
      this.productDetails = value;
      console.log('ProductVal',this.productDetails);
      if (!this.productDetails) {
        this.route.navigate(['/']); // Redirect to home page
      }
    }); 
    
  } 
  //add to cart
  addToCart(){

    console.log('user',this.user[0].id);
    let userId=this.user[0].id;
    let cartData:cart ={
        ...this.productDetails,
        userId,
        productId:this.productDetails.id
      
      }
      delete cartData.id;
      console.log("cartdata",cartData);
          this.Cartservice.addtoCart(cartData).subscribe((res:any)=>{
          console.log("result",res);
          this.Cartservice.change.next(1);
         
          Swal.fire("SweetAlert2 is working!");
        })  
    
      }
}
