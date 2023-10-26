export interface Product{
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:rateCount[];
}




export interface rateCount{
    rate:number;
    count:number;
}

//se agrego las interfaces para poder darle los tipos de datos a los identificadores
export interface Contacto {
    nombre: string;
    email: string;
    asunto: string;
    mensaje: string;
  }
  