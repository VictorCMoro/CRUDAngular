import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AreaDeConhecimento } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AreasServiceService {
  private url = 'https://localhost:7198/api/Cadastro/GetAllAreas'
  
  constructor(private http: HttpClient) { }

  getAllAreas(): Observable<AreaDeConhecimento[]>{
    return this.http.get<AreaDeConhecimento[]>(this.url)
  }
}
