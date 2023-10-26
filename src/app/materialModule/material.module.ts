import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {MatCardModule} from "@angular/material/card"
import {MatButtonModule} from "@angular/material/button"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatIconModule} from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInput, MatInputModule} from '@angular/material/input'
@NgModule({
    
    imports: [
      BrowserModule,
      MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,MatSelectModule,MatFormFieldModule,MatInputModule
    ],
  
    exports:[
MatCardModule,
MatButtonModule,
MatToolbarModule,
MatIconModule,MatSelectModule,MatFormFieldModule,MatInputModule
    ]
 
  })



export class MaterialModule{
    
}