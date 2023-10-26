// contacto.model.ts

// LUEGO DE GENERAR CON NG GENERATE EL FORMULARIO DE CONTACTO CREE UNA CLASE CONTACTO MODEL, 
//Al definir una interfaz Contacto y una clase ContactoModel que la implementa, 
//se esta estableciendo un contrato claro sobre la estructura de los objetos de contacto que se utilizarán 
//Se hace el import de los componentes que puse tambien en product interface
import { Contacto } from '../interfaces/product.interface';

export class ContactoModel implements Contacto {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;

  constructor() {
    this.nombre = '';
    this.email = '';
    this.asunto = '';
    this.mensaje = '';
  }
}
