import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AddLivroService {
  private url = 'https://localhost:7198/api/Cadastro/AddLivro'
  constructor(private http: HttpClient) { }

  addLivro(livro: Livro): Observable<Livro[]>{
    return this.http.post<Livro[]>(this.url, livro)
  }
}
