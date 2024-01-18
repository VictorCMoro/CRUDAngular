import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autor } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  private url = 'https://localhost:7198/api/Cadastro/GetAutores'
  private addUrl = 'https://localhost:7198/api/Cadastro/AddAutor'
  constructor(private http: HttpClient) { }

  getAutores(): Observable<Autor[]>{
    return this.http.get<Autor[]>(this.url)
  }

  addAutor(autor: Autor): Observable<Autor[]>{
    return this.http.post<Autor[]>(this.addUrl, autor)
  }

}
