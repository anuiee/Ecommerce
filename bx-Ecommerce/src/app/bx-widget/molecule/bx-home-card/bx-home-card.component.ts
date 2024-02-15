import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DatashareService } from '../../../core/datashare.service';
import { RouterLink, RouterModule } from '@angular/router';
import { BxProductDetailComponent } from '../../organism/bx-product-detail/bx-product-detail.component';
import { ProductService } from '../../../core/product.service';

@Component({
  selector: 'app-bx-home-card',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink,BxProductDetailComponent],
  templateUrl: './bx-home-card.component.html',
  styleUrl: './bx-home-card.component.scss'
})
export class BxHomeCardComponent {
  @Input() item: any;
  public jsonData: any;
  constructor(private datashare:ProductService){}
  
  getItem(item:any){
    console.log('item',item);
    this.datashare.getItemDetails(item);
  }
}
