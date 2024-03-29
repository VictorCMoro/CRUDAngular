import { Component, OnInit } from '@angular/core';
import { AreasServiceService } from '../../../services/areas-service.service';
import { AreaDeConhecimento, Livro } from '../../../models/models';
import { livrariaListService } from '../../../services/livraria-list.service';

@Component({
  selector: 'app-area-details',
  templateUrl: './area-details.component.html',
  styleUrls: ['./area-details.component.css'],
})
export class AreaDetailsComponent implements OnInit {
  livros: Livro[] = [];
  areas: AreaDeConhecimento[] = [];
  areaSelecionada: AreaDeConhecimento | null = null; 

  constructor(
    private areasService: AreasServiceService,
    private livrariaService: livrariaListService
  ) {}

  public ngOnInit() {
    this.getAreasDeConhecimento();
  }

  public getAreasDeConhecimento(): void {
    this.areasService.getAllAreas().subscribe(
      (areas: AreaDeConhecimento[]) => {
        this.areas = areas;
        console.log(areas);
      },
      (error) => {
        console.error('Erro ao obter áreas de conhecimento:', error);
      }
    );
  }



  public getLivrosPorArea(areaDeConhecimento: AreaDeConhecimento): void {
    this.areasService.getLivroPorArea(areaDeConhecimento).subscribe(
      (livros: Livro[]) => {
        this.livros = livros || [];
        this.areaSelecionada = areaDeConhecimento;
        console.log(this.livros);
      },
      (error) => {
        console.error('Erro ao obter livros da área:', error);
      }
    );
  }
}
