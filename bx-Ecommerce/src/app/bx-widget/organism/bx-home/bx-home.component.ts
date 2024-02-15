import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BxCarouselComponent } from '../bx-carousel/bx-carousel.component';
import { BxCardComponent } from '../../molecule/bx-card/bx-card.component';
import { DatashareService } from '../../../core/datashare.service';
import { BxHomeCardComponent } from '../../molecule/bx-home-card/bx-home-card.component';
import { ProductService } from '../../../core/product.service';

@Component({
  selector: 'app-bx-home',
  standalone: true,
  imports: [CommonModule,
            BxCarouselComponent,
            BxHomeCardComponent
          ],
  templateUrl: './bx-home.component.html',
  styleUrl: './bx-home.component.scss'
})
export class BxHomeComponent {
  public jsonData: any;
  filteredProducts: any[] = [];
  constructor(private datashare:DatashareService,private productService:ProductService){}
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
      this.productService.filterProducts(searchTerm)
        .subscribe((products:any) => this.filteredProducts = products);
        console.log("serach items",this.filteredProducts );
        
        
    }
    // this.myForm.reset();
  }
}
