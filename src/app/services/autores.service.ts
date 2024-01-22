import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autor, Livro } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  private url = 'https://localhost:7198/api/Cadastro/GetAutores'
  private addUrl = 'https://localhost:7198/api/Cadastro/AddAutor'
  private removeUrl = 'https://localhost:7198/api/Cadastro/DeleteAutor'
  private editUrl = 'https://localhost:7198/api/Cadastro/EditAutor'
  private autorByIdUrl = 'https://localhost:7198/api/Cadastro/GetAutorById'
  constructor(private http: HttpClient) { }

  public getAutores(): Observable<Autor[]>{
    return this.http.get<Autor[]>(this.url)
  }

  public addAutor(autor: Autor): Observable<Autor[]>{
    return this.http.post<Autor[]>(this.addUrl, autor)
  }


  public getAutorById(autorId: number):Observable<Autor>{
    const getAutorByIdUrl = `${this.autorByIdUrl}/${autorId}`;
    return this.http.get<Autor>(getAutorByIdUrl);
  }

  public editAutor(autor: Autor): Observable<Autor> {
    return this.http.put<Autor>(this.editUrl, autor);
  }


  public deleteAutor(autor: Autor):Observable<Autor[]>{
    const deleteUrl = `${this.removeUrl}/${autor.autorId}`
    return this.http.delete<Autor[]>(deleteUrl)
  }
}
