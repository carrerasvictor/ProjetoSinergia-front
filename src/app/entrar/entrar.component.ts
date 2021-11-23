import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: CredenciaisDTO = new CredenciaisDTO();

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0),
    this.auth.emptyToken()
  }

  

  entrar() {
    this.auth.entrar(this.usuarioLogin).subscribe((resp: CredenciaisDTO) => {
      this.usuarioLogin = resp;

      environment.token = this.usuarioLogin.token
      environment.idUsuario = this.usuarioLogin.idUsuario
      environment.token = this.usuarioLogin.token
      environment.nomeCompleto = this.usuarioLogin.nome
      environment.foto = this.usuarioLogin.foto
      environment.tipo = this.usuarioLogin.tipo

      //console.log(environment.token)
      this.router.navigate(['/inicio']);
    }, erro => {
      if (erro.status == 400) {
        alert("Usuário ou senha inválidos!");
      }

      if (environment.tipo != 'adm'){
        alert("Você precisa ser adm para acessar essa rota");
        this.router.navigate(['/inicio'])
      }
      
    })
  }
}



