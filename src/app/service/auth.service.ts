
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { Usuario } from '../model/Usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  entrar(usuarioLogin: CredenciaisDTO): Observable<CredenciaisDTO> {
    return this.http.post<CredenciaisDTO>(
      'https://sinergiasocial.herokuapp.com/usuarios/login', usuarioLogin);
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://sinergiasocial.herokuapp.com/usuarios/cadastro', usuario);
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://sinergiasocial.herokuapp.com/usuarios/${id}`, this.token)
  }

  logado(){
    let ok: boolean = false;

    if (environment.token != ''){
      ok = true
    }
    return ok
  }
}


