import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './clientes/formulario/formulario.component';
import { ListaComponent } from './clientes/lista/lista.component';
import { LoginGuard } from './login.guard';
import { FormularioLoginComponent } from './usuarios/formulario-login/formulario-login.component';
import { FormularioRegistroComponent } from './usuarios/formulario-registro/formulario-registro.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/clientes' },
  { path: 'clientes', component: ListaComponent, canActivate: [LoginGuard] },
  { path: 'clientes/new', component: FormularioComponent },
  { path: 'registro', component: FormularioRegistroComponent },
  { path: 'login', component: FormularioLoginComponent },
  { path: '**', redirectTo: '/clientes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
