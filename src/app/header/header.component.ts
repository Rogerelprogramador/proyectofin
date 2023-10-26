import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { DescripcionComponent } from '../descripcion/descripcion.component';
import { Product, rateCount } from '../interfaces/product.interface';
import { productService } from '../services/product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent {
  products:any=[]
  numberOfStairs:number[]=[]
  counter:number=0
  constructor(private productService:productService,private descriptionComponent:DescripcionComponent){}
    
  ngOnInit(){

    this.productService.products.pipe(
      tap((data:Product[])=>this.products=data,
      
      )
     
    ).subscribe()
  }
paintStars(star:rateCount):number[]{
  
   this.numberOfStairs=this.descriptionComponent.paintStars(star)
   console.log(this.numberOfStairs);
   
        
   return this.numberOfStairs
}


}
