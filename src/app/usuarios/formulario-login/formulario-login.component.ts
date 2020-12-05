import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {


  mensajeError: string //Para gestionar el error dentro del html

  constructor(
    private userService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }



  onSubmit(formValue) {
    this.mensajeError = null
    this.userService.loginUser(formValue)
      .then((response) => {
        if (response['error']) {

          this.mensajeError = response['error']

        } else {
          localStorage.setItem('token_gym', response['token']);
          this.router.navigate(['/clientes'])
          //para navegar sin routerlink

        };

      })
      .catch((error) => {
        console.log(error);
      })

  }
}
