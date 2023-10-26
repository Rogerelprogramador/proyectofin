import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { HeaderComponent } from './header/header.component';
//llamando a cada componente que cree que fue el login y el formulario de contacto
import { LoginComponent } from './login/login.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';

const routes: Routes = [
  //aca fui prueba y error con el orden de las rutas
  { path: 'login', component: LoginComponent }, //nicio de pagina: ruta de inicio de sesión
  { path: 'products', component: HeaderComponent }, // Ruta principal (accesible después del inicio de sesión)
  { path: 'products/description/:id', component: DescripcionComponent }, // Otras rutas
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige a la ruta de inicio de sesión
  { path: 'formulario', component: FormularioContactoComponent }, // Ruta formulario (accesible después del inicio de sesión)




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
