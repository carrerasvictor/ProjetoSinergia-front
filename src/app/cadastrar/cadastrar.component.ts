import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  usuario: Usuario = new Usuario();
  confirmarSenha: string;
  tipoUsuario: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    this.authService.emptyToken();
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  tipoUser(event: any) {
    if(this.tipoUsuario == null || this.tipoUsuario == ''){
      this.tipoUsuario = 'user'
    } 
    
    else{
      this.tipoUsuario = event.target.value;
    }
  }

  cadastrar() {
    this.usuario.tipo = this.tipoUsuario;

    if(this.usuario.senha.length <=7 || this.confirmarSenha.length <= 7){
      this.alertas.showAlertDanger('Favor digitar senha de no minimo 8 digitos');
    }

    if (this.usuario.foto == null) {
      this.usuario.foto = 'https://i.imgur.com/Q3Bnwdw.png';

      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(['/entrar']);
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!');
      });
    } else {
      console.log(this.usuario);
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(['/entrar']);
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!');
      });

      if (this.usuario.senha != this.confirmarSenha) {
        this.alertas.showAlertDanger('As senhas estão incorretas.');
      } else {
        console.log(this.usuario);
        this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
          this.usuario = resp;
          this.router.navigate(['/entrar']);
          this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!');
        });
      }
    }
  }
}
