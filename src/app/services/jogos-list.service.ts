import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogo } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class JogosListService {
  private url = 'https://localhost:7198/api/Cadastro/GetAllJogos'
  private deleteUrl = 'https://localhost:7198/api/Cadastro/2'
  constructor(private http: HttpClient) { }

  public getJogos(): Observable<Jogo[]>{
    return this.http.get<Jogo[]>(this.url)
  }

  public deleteJogo(JogoId: number): Observable<Jogo[]> {
    const deleteUrl = `${this.deleteUrl}/${JogoId}`;
    return this.http.delete<Jogo[]>(deleteUrl);
  }
  
}
