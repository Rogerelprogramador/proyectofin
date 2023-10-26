import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {initializeApp } from "firebase/app";
import { Observable } from "rxjs";
import { Product } from "../interfaces/product.interface";

const firebaseConfig = {
    apiKey: "AIzaSyCjthmMBLHzJkhwcTbZ0oLQyEBi4Vmn-xY",
    authDomain: "segundo-proyecto-328b0.firebaseapp.com",
    projectId: "segundo-proyecto-328b0",
    storageBucket: "segundo-proyecto-328b0.appspot.com",
    messagingSenderId: "453287497829",
    appId: "1:453287497829:web:5a68988db98ee81577b68c",
    measurementId: "G-KMTLPD25DY"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
@Injectable()
export class DataServices{


    constructor(private HttpClient:HttpClient){}

        añadirProductos(product:Product[]):Observable<Product[]>{
let url="https://segundo-proyecto-328b0-default-rtdb.firebaseio.com/"

return this.HttpClient.put<Product[]>(url,product)


        }


}

