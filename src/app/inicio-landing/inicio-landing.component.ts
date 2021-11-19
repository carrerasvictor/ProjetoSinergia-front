import { Component, OnInit } from '@angular/core';
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
    this.auth.emptyToken()
  }

}
