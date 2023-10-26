import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
@Input() product!:Product


}
