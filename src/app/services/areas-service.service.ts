import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AreaDeConhecimento, Livro } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class AreasServiceService {
  private url = 'https://localhost:7198/api/Cadastro/GetAllAreas';
  private livroPorAreaUrl =
    'https://localhost:7198/api/Cadastro/GetLivrosByArea';
  private addAreaUrl =
    'https://localhost:7198/api/Cadastro/AddAreaDeConhecimento';
  private deleteUrl = 'https://localhost:7198/api/Cadastro/DeleteArea';

  constructor(private http: HttpClient) {}

  getAllAreas(): Observable<AreaDeConhecimento[]> {
    return this.http.get<AreaDeConhecimento[]>(this.url);
  }

  addArea(area: AreaDeConhecimento): Observable<AreaDeConhecimento[]> {
    return this.http.post<AreaDeConhecimento[]>(this.addAreaUrl, area);
  }

  deleteArea(area: AreaDeConhecimento): Observable<AreaDeConhecimento[]> {
    const deleteUrl = `${this.deleteUrl}/${area.areaId}`;
    return this.http.delete<AreaDeConhecimento[]>(deleteUrl);
  }

  getLivroPorArea(
    areaDeConhecimento: AreaDeConhecimento
  ): Observable<Livro[]> {
    const detailUrl = `${this.livroPorAreaUrl}/${areaDeConhecimento.areaId}`;
    return this.http.get<Livro[]>(detailUrl);
  }
}
