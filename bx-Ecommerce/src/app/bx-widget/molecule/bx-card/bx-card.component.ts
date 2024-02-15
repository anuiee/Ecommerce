import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductService } from '../../../core/product.service';
import { DatashareService } from '../../../core/datashare.service';
import { CartService } from '../../../core/service/cart.service';
import { cart } from '../../../data-type';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bx-card',
  standalone: true,
  imports: [CommonModule],
templateUrl: './bx-card.component.html',
  styleUrl: './bx-card.component.scss'
})
export class BxCardComponent {

  @Input() item: any;
  @Input() class: any;
  @Input() dynamicStyle!: { [key: string]: string };
  @Input() dynamicFlexStyle!: { [key: string]: string };
  @Input() removeButton!: { [key: string]: string };

  constructor(private Cartservice:CartService){}
  user:any;


  ngOnInit(){
  
     let data:any = localStorage.getItem('token');
     this.user = JSON.parse(data);
     console.log('user',this.user[0].id);

   } 
 
  addToCart(){

console.log('user',this.user[0].id);
let userId=this.user[0].id;
  let cartData:cart ={
    ...this.item,
    userId,
    productId:this.item.id
  
  }
  delete cartData.id;
  console.log("cartdata",cartData);
     this.Cartservice.addtoCart(cartData).subscribe((res:any)=>{
      console.log("result",res);
      this.Cartservice.change.next(1);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    })  

  }

}
