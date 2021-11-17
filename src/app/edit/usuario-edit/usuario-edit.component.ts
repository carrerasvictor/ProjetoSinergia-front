import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Usuario } from './../../model/Usuario';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario: number
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    window.scroll(0,0)

    if (environment.token == '') {
      alert('Sua sessão expirou! Faça login novamente');
      this.router.navigate(['/entrar']);
    }

    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUser(this.idUsuario)
  }

  
  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value;
  }

  atualizar(){
    this.usuario.tipo = this.tipoUsuario;

    if (this.usuario.senha != this.confirmarSenha) {
      alert('As senhas estão incorretas.');
    } else {
      console.log(this.usuario)
      this.authService.atualizar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(['/entrar']);
        alert('Usuário atualizado com sucesso!');
       environment.idUsuario = 0
       environment.nomeCompleto = ''
        environment.foto = ''
       environment.token = ''
      });
    }

  }

  findByIdUser(id: number){
    this.authService.getByIdUser(id).subscribe((resp: Usuario) =>{
      this.usuario = resp
    })
  

}

}
