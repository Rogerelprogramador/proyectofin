import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http'
import { productService } from './services/product.service';
import { DataServices } from './services/data.services';
import { MaterialModule } from './materialModule/material.module';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { AgregarComponent } from './agregar/agregar.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
//se agregaron las importaciones del nuevo componente creado que es el del formulario de oontacto
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,DescripcionComponent,AgregarComponent, CartComponent, HeaderComponent, LoginComponent, FormularioContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
// // Se importan los módulos FormsModule y ReactiveFormsModule para habilitar
// la funcionalidad de formularios en el componente y permitir la validación
// y manipulación de formularios de manera eficaz. 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [productService,DataServices,DescripcionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
