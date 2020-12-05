import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cliente {
  id: number
  nombre: string,
  apellidos: string,
  direccion: string,
  email: string,
  edad: number,
  dni: string,
  sexo: string,
  fecha_inscripcion: Date;
  fecha_nacimiento: Date;
  cuota: number


}

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private baseUrl: string;
  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "http://localhost:3000/api/clientes";
  }

  //Obtener todos los clientes
  getAll(): Promise<Cliente[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_gym')
      })
    }
    return this.httpClient.get<Cliente[]>(this.baseUrl, httpOptions).toPromise();
  }

  //Crear nuevo cliente
  create(formValues): Promise<Cliente> {
    return this.httpClient.post<Cliente>(this.baseUrl, formValues).toPromise()
  }



}
