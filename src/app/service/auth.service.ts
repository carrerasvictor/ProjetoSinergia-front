
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
  router: any;

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
      'https://sinergia.onrender.com/usuarios/login', usuarioLogin);
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://sinergia.onrender.com/usuarios/cadastro', usuario);
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://sinergia.onrender.com/usuarios/${id}`, this.token)
  }
  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>('https://sinergia.onrender.com/usuarios/atualizar', usuario);
  }

  logado(){
    let ok: boolean = false;

    if (environment.token != ''){
      ok = true
    }
    return ok
  }

  emptyToken(){
    environment.idUsuario = 0
    environment.nomeCompleto = ''
    environment.foto = ''
    environment.token = ''
  }

  admin(){
    let ok: boolean = false;

    if (environment.tipo == 'admin'){
      ok = true
    }
    return ok
  }
}


