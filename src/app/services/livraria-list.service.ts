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
  private livroByIdUrl = 'https://localhost:7198/api/Cadastro/GetLivroById'
  constructor(private http: HttpClient) { 
    

  }

  public getLivros(): Observable<Livro[]>{
    return this.http.get<Livro[]>(this.url)

  }

  public getLivrosById(livroId: number):Observable<Livro>{
    const getLivroByIdUrl = `${this.livroByIdUrl}/${livroId}`;
    return this.http.get<Livro>(getLivroByIdUrl);
  }

  public deleteLivro(livro: Livro): Observable<Livro[]> {
    const deleteUrl = `${this.deleteUrl}/${livro.livroId}`;
    return this.http.delete<Livro[]>(deleteUrl);
  }

  public editLivro(livro: Livro): Observable<Livro[]> {
    return this.http.put<Livro[]>(this.editUrl, livro)
  }
  
}
