import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization',environment.token)
  }

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    }
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://sinergia.onrender.com/temas', this.token)
  }

  getbyIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://sinergia.onrender.com/temas/${id}`, this.token)
  }

  getByTema(tema: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://sinergia.onrender.com/temas/tema/${tema}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://sinergia.onrender.com/temas', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://sinergia.onrender.com/temas', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://sinergia.onrender.com/temas/${id}`, this.token)
  }

}
