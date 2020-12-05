import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './clientes/lista/lista.component';
import { FormularioComponent } from './clientes/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioRegistroComponent } from './usuarios/formulario-registro/formulario-registro.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormularioLoginComponent } from './usuarios/formulario-login/formulario-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormularioComponent,
    FormularioRegistroComponent,
    NavBarComponent,
    FormularioLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
