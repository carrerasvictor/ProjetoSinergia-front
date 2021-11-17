import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

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
    private router: Router
  ) { }

  ngOnInit() {
  }

  sair() {
    this.router.navigate(['/login'])
    environment.idUsuario = 0
    environment.nomeCompleto = ''
    environment.foto = ''
    environment.token = ''
  }
}
