import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AreaDeConhecimento, Livro } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class AreasServiceService {
  private url = 'https://localhost:7198/api/Cadastro/GetAllAreas';
  private livroPorAreaUrl = 'https://localhost:7198/api/Cadastro/GetLivrosByArea';
  private addAreaUrl = 'https://localhost:7198/api/Cadastro/AddAreaDeConhecimento';
  private deleteUrl = 'https://localhost:7198/api/Cadastro/DeleteArea';
  private editUrl = 'https://localhost:7198/api/Cadastro/EditArea';
  private areaByIdUrl = 'https://localhost:7198/api/Cadastro/GetAreaById'


  constructor(private http: HttpClient) {}

  public getAllAreas(): Observable<AreaDeConhecimento[]> {
    return this.http.get<AreaDeConhecimento[]>(this.url);
  }

  public addArea(area: AreaDeConhecimento): Observable<AreaDeConhecimento[]> {
    return this.http.post<AreaDeConhecimento[]>(this.addAreaUrl, area);
  }

  public deleteArea(area: AreaDeConhecimento): Observable<AreaDeConhecimento[]> {
    const deleteUrl = `${this.deleteUrl}/${area.areaId}`;
    return this.http.delete<AreaDeConhecimento[]>(deleteUrl);
  }

  public editArea(area: AreaDeConhecimento): Observable<AreaDeConhecimento[]> {
    return this.http.put<AreaDeConhecimento[]>(this.editUrl, area);
  }

  public getAreaById(areaId: number): Observable<AreaDeConhecimento> {
    const url = `${this.areaByIdUrl}/${areaId}`;
    return this.http.get<AreaDeConhecimento>(url);
  }

  public getLivroPorArea(areaDeConhecimento: AreaDeConhecimento): Observable<Livro[]> {
    const detailUrl = `${this.livroPorAreaUrl}/${areaDeConhecimento.areaId}`;
    return this.http.get<Livro[]>(detailUrl);
  }
}
