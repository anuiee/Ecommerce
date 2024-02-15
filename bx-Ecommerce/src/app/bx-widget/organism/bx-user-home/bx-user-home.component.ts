import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DatashareService } from '../../../core/datashare.service';
import { BxCarouselComponent } from '../bx-carousel/bx-carousel.component';
import { BxHomeCardComponent } from '../../molecule/bx-home-card/bx-home-card.component';
import { BxCardComponent } from '../../molecule/bx-card/bx-card.component';

@Component({
  selector: 'app-bx-user-home',
  standalone: true,
  imports: [CommonModule, BxCarouselComponent,
            BxHomeCardComponent,BxCardComponent],
  templateUrl: './bx-user-home.component.html',
  styleUrl: './bx-user-home.component.scss'
})
export class BxUserHomeComponent {
  public jsonData: any;
  constructor(private datashare:DatashareService){}
  ngOnInit():void{
    this.datashare.getData().subscribe((data2)=>{
      this.jsonData=data2;
      console.log('json',this.jsonData);
    });      
  }
}
