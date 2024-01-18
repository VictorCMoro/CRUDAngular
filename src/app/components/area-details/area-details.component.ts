import { Component, OnInit } from '@angular/core';
import { AreasServiceService } from '../../services/areas-service.service';
import { AreaDeConhecimento, Livro } from '../../models/models';

@Component({
  selector: 'app-area-details',
  templateUrl: './area-details.component.html',
  styleUrls: ['./area-details.component.css']
})
export class AreaDetailsComponent implements OnInit {
  livros: Livro[] = [];
  areas: AreaDeConhecimento[] = [];
  areaSelecionada: AreaDeConhecimento | null = null; // Adicione uma propriedade para armazenar a área selecionada

  constructor(private areasService: AreasServiceService) {}

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

  getLivrosPorArea(areaDeConhecimento: AreaDeConhecimento): void {
    this.areaSelecionada = areaDeConhecimento;
    this.livros = areaDeConhecimento.livros || [];
    this.getLivrosPorArea(this.areaSelecionada);
    console.log(this.getLivrosPorArea)
  }
}
