import { Component, OnInit } from '@angular/core';
import { AreasServiceService } from '../../../services/areas-service.service';
import { AreaDeConhecimento, Livro } from '../../../models/models';
import { livrariaListService } from '../../../services/livraria-list.service';

@Component({
  selector: 'app-area-details',
  templateUrl: './area-details.component.html',
  styleUrls: ['./area-details.component.css']
})
export class AreaDetailsComponent implements OnInit {
  livros: Livro[] = [];
  areas: AreaDeConhecimento[] = [];
  areaSelecionada: AreaDeConhecimento | null = null; // Adicione uma propriedade para armazenar a área selecionada

  constructor(private areasService: AreasServiceService, private livrariaService: livrariaListService) {}

  ngOnInit() {
    this.getAreasDeConhecimento();
  }

  getAreasDeConhecimento(): void {
    this.areasService.getAllAreas().subscribe(
      (areas: AreaDeConhecimento[]) => {
        this.areas = areas;
        console.log(areas);
      },
      error => {
        console.error('Erro ao obter áreas de conhecimento:', error);
      }
    );
  }

  public getNumeroLivro(area: AreaDeConhecimento) :number{
    return area.livros ? area.livros.length : 1
  }

  getLivrosPorArea(areaDeConhecimento: AreaDeConhecimento): void {
    this.areasService.getLivroPorArea(areaDeConhecimento).subscribe(
      (livros: Livro[]) => {
        this.livros = livros || [];
        this.areaSelecionada = areaDeConhecimento;
        console.log(this.livros);
      },
      error => {
        console.error('Erro ao obter livros da área:', error);
      }
    );
  }
  



}
