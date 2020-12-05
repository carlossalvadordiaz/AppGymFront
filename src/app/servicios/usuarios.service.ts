import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  username: string,
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  baseUrl: string
  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/usuarios"
  }


  registerUser(formValues) {
    return this.httpClient.post(`${this.baseUrl}/registro`, formValues).toPromise()

  }

  loginUser(formValues) {
    return this.httpClient.post(`${this.baseUrl}/login`, formValues).toPromise()
  }

  isLogged(): boolean { //para poder cambiar el login//ver perfil
    if (localStorage.getItem('token_gym')) {
      return true;
    } else {
      return false
    }
  }
}
