import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { Usuario } from '../model/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: CredenciaisDTO ): Observable<CredenciaisDTO>{
    return this.http.post<CredenciaisDTO>('https://sinergiasocial.herokuapp.com/usuarios/login', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://sinergiasocial.herokuapp.com/usuarios/cadastro', usuario)
  }

}
