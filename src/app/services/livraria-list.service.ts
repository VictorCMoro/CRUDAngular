import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class livrariaListService {
  private url = 'https://localhost:7198/api/Cadastro/GetAllLivros'
  private deleteUrl = 'https://localhost:7198/api/Cadastro'
  private editUrl = 'https://localhost:7198/api/Cadastro/EditLivro'
  constructor(private http: HttpClient) { }

  public getLivros(): Observable<Livro[]>{
    return this.http.get<Livro[]>(this.url)
  }

  public deleteLivro(livro: Livro): Observable<Livro[]> {
    const deleteUrl = `${this.deleteUrl}/${livro.livroId}`;
    return this.http.delete<Livro[]>(deleteUrl);
  }

  public editLivro(livro: Livro): Observable<Livro[]> {
    return this.http.put<Livro[]>(this.editUrl, livro)
  }
  
}
