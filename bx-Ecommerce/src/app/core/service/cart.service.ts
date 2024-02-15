import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { cart } from '../../data-type';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList: any[] = [];
  productList=new BehaviorSubject<any>([]);
  change:any = new BehaviorSubject<any>(0);

  userList: any[] = [];
  loggedUser:any;
  url = "http://localhost:3000/signup";
  url2= "http://localhost:3000/cart/";
  constructor(private http:HttpClient,) { }
 
  getProducts(userId: number): Observable<any> {
    return this.http.get(`http://localhost:3000/cart?userId=${userId}`);
  }

  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(cartData:cart):any{

    return this.http.post<any>("http://localhost:3000/cart",cartData);
  }


  getTotalPrice():number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(productId:any){
    return this.http.delete<any>(this.url2 + productId); 
  }

 removeAllCart(){
  this.cartItemList=[];
  this.productList.next(this.cartItemList);
 } 

 getcartItem(): Observable<any> {
    
  return this.http.get<any>(this.url2);
}
}
//-----------------------------------------------------------------
    // debugger
    // this.cartItemList.push(product);
    // this.productList.next(this.cartItemList);
    // this.getTotalPrice();
    // console.log("cart",this.cartItemList);
    // this.http.get(`http://localhost:3000/signup`,
    // {observe:'response'}
    // ).subscribe((result:any)=>{
    //   // debugger
    //   this.userList = result?.body;
    //   this.loggedUser = localStorage.getItem('token');
    //   let loggedUserId= JSON.parse(this.loggedUser)?.id;  

    //   //--------------------------------------------------
    //   // this.http.patch(this.url+'/'+loggedUserId,this.productList).subscribe((res:any)=>{
    //   //   console.log('res',res);
        
    //   // });

    // })
    
    
    // const putCartList = {
    //   cartItemList: 'Active'
    // };
    // return this.http.post(`http://localhost:3000/signup/${id}`,product);
    // console.log("id....",id);