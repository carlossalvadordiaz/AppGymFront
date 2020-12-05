import { Component, OnInit } from '@angular/core';
import { Cliente, ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  clientes: Cliente[]

  constructor(
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {

    this.clientesService.getAll()
      .then(response => {
        this.clientes = response;

      })
      .catch(error => console.log(error));
  }

}
