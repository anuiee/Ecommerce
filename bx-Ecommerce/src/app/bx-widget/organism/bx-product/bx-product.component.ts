import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DatashareService } from '../../../core/datashare.service';
import { BxCardComponent } from '../../molecule/bx-card/bx-card.component';
import { ProductService } from '../../../core/product.service';

@Component({
  selector: 'app-bx-product',
  standalone: true,
  imports: [CommonModule,BxCardComponent],
  templateUrl: './bx-product.component.html',
  styleUrl: './bx-product.component.scss'
})
export class BxProductComponent {
  public jsonData: any;
  filteredProducts: any[] = [];
  removebutton= {
    display: 'none'
  };

  constructor(private datashare:DatashareService,private productService: ProductService){}
  ngOnInit():void{
    this.datashare.getData().subscribe((data2)=>{
      this.jsonData=data2;
      console.log('json',this.jsonData);
    });
         
  }

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
