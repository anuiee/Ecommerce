import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatashareService } from '../../../core/datashare.service';
import { product } from '../../../data-type';

@Component({
  selector: 'app-bx-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bx-search.component.html',
  styleUrl: './bx-search.component.scss'
})
export class BxSearchComponent {

  constructor(private activeRoute:ActivatedRoute,private product:DatashareService){}

  searchResult!:product[];
  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query');
    console.warn(query);
    query && this.product.searchProduct(query).subscribe((result)=>{
      this.searchResult=result;
      console.log('searchResult',this.searchResult);
      
    })
    

  }
}
