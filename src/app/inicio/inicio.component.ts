import { AuthService } from './../service/auth.service';
import { Usuario } from './../model/Usuario';
import { TemaService } from './../service/tema.service';
import { PostagemService } from './../service/postagem.service';
import { Postagem } from './../model/Postagem';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Tema } from '../model/Tema';
import { PostagemDeleteComponent } from '../delete/postagem-delete/postagem-delete.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  nome = environment.nomeCompleto

  usuario: Usuario = new Usuario()
  idUsuario = environment.idUsuario

  constructor(
    private router: Router,
    private postagemService: PostagemService, 
    private temaService: TemaService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    
    if(environment.token == ''){
      alert('Sua sessão expirou! Faça login novamente')
      this.router.navigate(['/entrar'])
    }

    this.getAllTemas()
    this.getAllPostagens()
    this.auth.refreshToken()
  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema() {
    this.temaService.getbyIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })

  }

  findByIdUser() {
    console.log(environment)
    this.auth.getByIdUser(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  publicar() {
    this.tema.idTema= this.idTema
    this.postagem.temaRelacionado = this.tema

    this.usuario.idUsuario = this.idUsuario
    this.postagem.usuarioRelacionado = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem
      this.getAllPostagens()
    })
  }

}
