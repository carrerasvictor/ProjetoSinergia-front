import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    public auth: AuthService,
    public router: Router

  ){}

  isOkRoute(){
    if(this.router.url === '/entrar'){
      return false
    }
    if(this.router.url === '/cadastrar'){
      return false;
    }
    if(this.auth.logado() == true){
    return false
    }
    return true
  }
}