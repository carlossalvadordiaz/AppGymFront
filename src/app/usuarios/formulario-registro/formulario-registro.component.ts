import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private userService: UsuariosService) {

    this.formulario = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      email: new FormControl()

    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.registerUser(this.formulario.value)
      .then((newUser) => {
        console.log(newUser);

      })
      .catch(error => console.log(error));
    alert('Success')




  }

}
