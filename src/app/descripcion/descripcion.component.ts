import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
// se importan las dependencias de los componentes
import { Product, rateCount } from '../interfaces/product.interface';
import { productService } from '../services/product.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {

indice:number=0
product!:Product
counter:number=0

  ngOnInit():void{
this.indice=this.RouterActivated.snapshot.params['id']

this.productService.findProductForId(this.indice).pipe(
  tap(((res:Product)=>this.product=res)

  ),
  tap(
    ((res:Product)=>this.product.rating=Object.values(res.rating))
  )

).subscribe()





  }
  constructor(private RouterActivated:ActivatedRoute,private productService:productService){
  
  }

  // La función paintStars toma un número de calificación (numberStairs) y 
  //devuelve un array de números aleatorios
paintStars(numberStairs: rateCount): Array<number> {
  // Convierte el número de calificación a una cadena de texto
  let stairs = String(numberStairs);
  // Divide la cadena en dos partes, antes y después del punto decimal
  let array = stairs.split('.');
  // Calcula el porcentaje de calificación en forma de estrellas
  let porcentStair = Number(array[1]) / 10;
  // Determina si el porcentaje es menor que 0.4
  const numberstairs = Number(porcentStair) < 0.4 ? Math.floor(Number(numberStairs)) : Math.ceil(Number(numberStairs));
  // Crea un array para almacenar los números aleatorios que representarán las estrellas
  let numberOfStairs = [];
  // Inicia un bucle que se ejecutará un número de veces igual a la cantidad de estrellas
  for (let index = 0; index < numberstairs; index++) {
    // Genera números aleatorios y los agrega al array numberOfStairs
    numberOfStairs[index] = Math.random();
    // Muestra un mensaje en la consola para indicar que se ha agregado una estrella
    console.log('entrastes');
  }
  // Devuelve el array de números aleatorios que representan las estrellas
  return numberOfStairs;
}



// La función increment aumenta la cantidad de productos en el carrito en la cantidad especificada
increment(number: number): void {
  // Aumenta la cantidad en el carrito sumando la cantidad especificada
  this.counter += number;
  // Llama a la función calculartotal para recalcular el total del carrito
  this.calculartotal();
}




// La función decrement disminuye la cantidad de productos en el carrito en la cantidad especificada
decrement(number: number): void {
  // Verifica si la cantidad en el carrito es menor o igual a 0
  if (this.counter <= 0) {
    return; // Evita que la cantidad sea menor que 0, no permite valores negativos
  } else {
    // Disminuye la cantidad en el carrito restando la cantidad especificada
    this.counter -= number;
    // Llama a la función calculartotal para recalcular el total del carrito
    this.calculartotal();
  }
}


// Inicializa la variable total con un valor de 0
total: number = 0;
// La función calculartotal recalcula el total del carrito multiplicando la cantidad por el precio del producto
calculartotal(): void {
  // Calcula el total multiplicando la cantidad en el carrito por el precio del producto
  this.total = this.counter * this.product.price;
}


// La función realizarCompra muestra una alerta con los detalles de la compra si hay productos en el carrito
realizarCompra(): void {
  // Muestra un mensaje en la consola indicando que se ha entrado en la función realizarCompra
  console.log("Entro en realizarCompra");
  // Verifica si hay productos en el carrito (cantidad mayor a 0)
  if (this.counter > 0) {
    // Obtiene la cantidad de artículos en el carrito
    const numeroDeArticulos = this.counter;
    // Obtiene la categoría del artículo actual
    const categoriaarticulo = this.product.category;
    // Obtiene el costo total de la compra
    const totalcompra = this.total;
    // Crea un mensaje que muestra los detalles de la compra
    const mensajeCompra = `Has comprado correctamente ${numeroDeArticulos} ${categoriaarticulo} por ${this.total} Bolivianos `;
    // Muestra una alerta con el mensaje de compra
    alert(mensajeCompra);
    // Reinicia la cantidad en el carrito a 0 después de la compra
    this.counter = 0;
  } else {
    // Si no hay productos en el carrito, muestra una alerta informando al usuario que no ha seleccionado ningún artículo para comprar
    alert("No has seleccionado ningún artículo para comprar.");
  }
  }

 }
 




