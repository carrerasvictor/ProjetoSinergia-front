import { ActivatedRoute, Router } from '@angular/router';
import { TemaService } from './../../service/tema.service';
import { environment } from './../../../environments/environment.prod';
import { Tema } from './../../model/Tema';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  tema: Tema = new Tema()

  constructor(
      private temaService: TemaService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      alert('Sua sessão expirou! Faça login novamente');
      this.router.navigate(['/entrar']);
    }

    let id = this.route.snapshot.params['id']
    this.findByTema(id)
  }

  findByTema(id: number) {
    this.temaService.getbyIdTema(id).subscribe((resp: Tema) => {
    this.tema = resp
    })

  }

  atualizar() {
    this.temaService.putTema(this.tema).subscribe((resp: Tema) =>{
      this.tema = resp
      alert('Tema atualizado!')
      this.router.navigate(['/tema'])
    })
  }
  
}
