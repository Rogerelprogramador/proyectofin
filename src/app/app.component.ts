import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Product } from './interfaces/product.interface';
import { productService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products:Product[]=[]
  title = 'eccommerce Angular'; 
  constructor(private productService:productService,private router:Router){}
  ngOnInit(){

    this.productService.products.pipe(
      tap((data:Product[])=>this.products=data
      
      )

      
    ).subscribe()


  }

  redirectDescription(id:number):void{
    this.router.navigate(['/description',id])
  }
  //agregue este comando para que solo se muetre la pagina del login 
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
