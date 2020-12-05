import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private clientService: ClientesService) {

    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      edad: new FormControl(),
      email: new FormControl(),
      cuota: new FormControl(),
      sexo: new FormControl(),
      fecha_nacimiento: new FormControl(),
      direccion: new FormControl(),
      dni: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.clientService.create(this.formulario.value)
      .then((cliente) => {
        console.log(cliente);

      })
      .catch(error => console.log(error));


  }

}
