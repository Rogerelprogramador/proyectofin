


// se agrego el componente con ng en el bash para crear la estructura del login
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario!: string;
  password!: string;

  constructor(private router: Router) {}
//implementacion de la validacion del login con credenciales
  login() {
    if (this.usuario === 'Rogerbilbao' && this.password === 'tupassword') {
      // Autenticación exitosa, redirige al usuario al índice principal
      this.router.navigate(['/products']); // Reemplaza 'products' con la ruta de tu índice principal
    } else {
      // Credenciales incorrectas, muestra un mensaje de error
      alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  }
}
