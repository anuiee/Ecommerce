import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DatashareService } from '../../../core/datashare.service';
import { BxCardComponent } from '../../molecule/bx-card/bx-card.component';
import { CartService } from '../../../core/service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bx-cart',
  standalone: true,
  imports: [CommonModule,BxCardComponent],
  templateUrl: './bx-cart.component.html',
  styleUrl: './bx-cart.component.scss'
})
export class BxCartComponent {
  customDivStyle= {
    display: 'none',
  };
  customFlexStyle= {
    display: 'flex',
    flexDirection: 'column'
  };
  removebutton= {
    display: 'none'
  };
products:any=[];
grandTotal! : number ;
user:any;

constructor(private cartService:CartService){}

ngOnInit() {
  //local storage
  let data:any = localStorage.getItem('token');
  this.user = JSON.parse(data);
  console.log('user',this.user[0].id);
  let userId=this.user[0].id;
  //get from cart
  this.cartService.getProducts(userId)
  .subscribe((res:any)=>{
  this.products = res;
  console.log("prod",this.products);
  
  this.grandTotal= this.cartService.getTotalPrice();
  })

}
// removeItem(item:any){
// this.cartService.removeCartItem(item);
// }
// emptycart(item:any){
// this.cartService.removeAllCart();
// }
removeItem(itemId:any){
  console.log("id",itemId);
  
  this.cartService.removeCartItem(itemId);

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
    this.cartService.removeCartItem(itemId).subscribe((res: any)=>{
     this.getCart();
     this.cartService.change.next(1);
    });
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
  }

  getCart(){
      //get from cart
    let data:any = localStorage.getItem('token');
  this.user = JSON.parse(data);
  console.log('user',this.user[0].id);
  let userId=this.user[0].id;
  this.cartService.getProducts(userId)
  .subscribe((res:any)=>{
  this.products = res;
  console.log("prod",this.products);
  
  this.grandTotal= this.cartService.getTotalPrice();
  })
  }
}

















  // cartItems: any[] = [];
  // productItems: any = [];

  // constructor(private datashare:DatashareService){}
  // ngOnInit():void{
  //       // Fetch cart data
  //       this.datashare.getCartData().subscribe(cartData => {
  //         this.cartItems = cartData;
  //         console.log('Cart Data:', this.cartItems);
  //       }); 
  //         // Extract IDs from cart data
  //       const ids = this.cartItems.map(item => item.id);
  //       console.log('ids',ids);
  //       console.log('ids',ids[1]);
  //       console.log('ids',ids[2]);


  //       for(let i=0;i<=ids.length;i++){
  //           this.datashare.getProductsByIds(ids[i]).subscribe(productData => {
  //         this.productItems = productData;
  //         console.log('Product Data:', this.productItems);
  //       });
  //       }
  //       // this.datashare.getProductsByIds(ids).subscribe(productData => {
  //       //   this.productItems = productData;
  //       //   console.log('Product Data:', this.productItems);
  //       // });

 
  

  // }

