import { AlertasService } from './../../service/alertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {

  tema: Tema = new Tema()
  idTema: number

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService
  ) { }

  ngOnInit(): void {
    if (environment.token == '') {
      this.alertas.showAlertInfo('Sua sessão expirou! Faça login novamente');
      this.router.navigate(['/entrar']);
    }

    this.idTema = this.route.snapshot.params['id']
    this.findByTema(this.idTema)
  }

  findByTema(id: number) {
    this.temaService.getbyIdTema(id).subscribe((resp: Tema) => {
    this.tema = resp
    })
 }

 apagar(){
  this.temaService.deleteTema(this.idTema).subscribe(()=>{
    this.alertas.showAlertSuccess('Tema apagado com sucesso!')
    this.router.navigate(['/tema'])
  })
 }
}