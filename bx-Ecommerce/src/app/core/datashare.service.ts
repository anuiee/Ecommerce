import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login } from './Interface/data-typt';
import { Observable } from 'rxjs';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
  isLoginError = new EventEmitter<boolean>(false);
  constructor(private http:HttpClient,private route:Router) { }
  url="http://localhost:3000/signup";
  url2="https://fakestoreapi.com/products";
  url3="http://localhost:3000/product";
  url4="http://localhost:3000/cart";


  isLoggedIn() {
    const token = localStorage.getItem('token'); // get token from local storage
    console.log('token',token);
    return token;
   } 

  addUser(inputData: object){
    console.log('saving',this.http.post<any>(this.url,inputData));
    return this.http.post<any>(this.url,inputData,{observe: 'response'});
    // observe : 'data';
   }
//login Get from signup details  Method
   userLogin(data:login) {
    console.log('service',data);
    this.http.get(`http://localhost:3000/signup?email=${data.email}&password=${data.password}`,
    {observe:'response'}
    ).subscribe((result:any)=>{
    console.log('res',result);
    if(result?.body?.length) {
        // debugger;
        localStorage.setItem('token',JSON.stringify(result.body));
        this.route.navigate(['/user-home']);
        console.log("user logged");
    }
    else{
      localStorage.clear();
      console.warn("login failed");
      this.route.navigate(['/login']);
      this.isLoginError.emit(true); 
    }
   }) 
 }
//product API call
 getData(): Observable<any> {
  return this.http.get<any>(this.url3);
}
getUserData(PId : any): Observable<any> {
  return this.http.get<any>(`http://localhost:3000/signup/${PId}`);
}
getCartData(): Observable<any> {
  return this.http.get<any>(this.url4);
}
getOneItem(PId : any) {
  return this.http.get(`http://localhost:3000/product/${PId}`);
}
getProductsByIds(ids:any){
  return this.http.get(`http://localhost:3000/product/${ids}`);

}
//add to cart 
addItemToCart(obj:any){
    return this.http.post<any>("http://localhost:3000/cart",obj);
  }

  //search product
  searchProduct(query: string) {
    return this.http.get<product[]>(
      `http://localhost:3000/product?q=${query}`
    );
  }
//updateprofile
updateprofile(input:any,id:any){
  console.log('input',input);
  return this.http.patch(this.url+'/'+id,input);

  }
}

