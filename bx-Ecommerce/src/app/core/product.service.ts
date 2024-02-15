import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // constructor(private http:HttpClient,private route:Router) { }

  // url="https://fakestoreapi.com/carts";


  private user = new BehaviorSubject<any>(null);
  cast = this.user.asObservable();

 getItemDetails(value:any){
    this.user.next(value);
    console.log('cast',this.cast);
  }

  // addToCart(obj:any){
  //   return this.http.post<any>("https://fakestoreapi.com/carts",obj);
  // }
  apiUrl = 'http://localhost:3000/product'; // Replace with your API URL

  constructor(private http: HttpClient) { }
//search product
  searchProducts(searchTerm: string): Observable<any[]> {
    const url = `${this.apiUrl}?q=${searchTerm}`;
    return this.http.get<any[]>(url);
  }
//filter
  filterProducts(searchTerm: string): Observable<any[]> {
    // const url = `${this.apiUrl}?q=${searchTerm}`;
    return this.http.get<any[]>(`http://localhost:3000/product?category=${searchTerm}`);
  }
}
