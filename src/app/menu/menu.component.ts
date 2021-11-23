import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nomeCompleto
  foto = environment.foto
  idUsuario = environment.idUsuario

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  sair() {
    this.router.navigate(['/entrar'])
    environment.idUsuario = 0
    environment.nomeCompleto = ''
    environment.foto = ''
    environment.token = ''
  }
}
