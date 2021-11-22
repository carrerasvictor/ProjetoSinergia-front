import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-inicio-landing',
  templateUrl: './inicio-landing.component.html',
  styleUrls: ['./inicio-landing.component.css']
})
export class InicioLandingComponent implements OnInit {

  constructor(
    private auth:AuthService
  ) { }

  ngOnInit(){
    environment.idUsuario = 0
    environment.nomeCompleto = ''
    environment.foto = ''
    environment.token = ''
  }

}
