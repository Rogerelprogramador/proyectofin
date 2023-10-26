

import { Component } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {
  formulario: FormGroup;
  mensajeEnviado: boolean = false;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, this.validateEmail]),
      asunto: new FormControl('', [Validators.required]),
      mensaje: new FormControl('', [Validators.required]),
    });
  }

  validateEmail(control: AbstractControl): ValidationErrors | null {
    // Obtiene el valor del control (campo de correo electrónico) del formulario
    const value = control.value;
    // Verifica si el campo está vacío (no tiene valor)
    if (!value) {
      // Retorna un objeto de errores con la clave 'required' y un mensaje de error
      return { required: 'Correo electrónico es obligatorio' };
    }
    // Verifica si el campo contiene el carácter '@', que es esencial en una dirección de correo electrónico
    if (value.indexOf('@') === -1) {
      // Retorna un objeto de errores con la clave 'missingAt' y un mensaje de error
      return { missingAt: 'Formato de correo electrónico inválido' };
    }
    // Si no se encontraron errores, retorna null para indicar que el campo es válido
    return null;
  }



  
  
    // Si el formulario es válido (sin errores de validación):
    // - Se establece la variable 'mensajeEnviado' en true, lo que podría desencadenar una acción adicional.
  onSubmit() {
    if (this.formulario.valid) {
    
      this.mensajeEnviado = true;
    }
    else {
      // Mostrar mensajes de error para campos no válidos
      this.formulario.markAllAsTouched(); // Marca todos los campos como tocados para mostrar los errores
    }
  }

}
