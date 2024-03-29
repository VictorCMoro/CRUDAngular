import { Component, EventEmitter, Output } from '@angular/core';
import { AreaDeConhecimento } from '../../models/models';
import { livrariaListService } from '../../services/livraria-list.service';
import { AreasServiceService } from '../../services/areas-service.service';
import { Router } from '@angular/router';
import { error } from 'node:console';

@Component({
  selector: 'app-list-areas',
  templateUrl: './list-areas.component.html',
  styleUrl: './list-areas.component.css'
})
export class ListAreasComponent {
  areas: AreaDeConhecimento[] = []
  @Output() public areasUpdated = new EventEmitter<AreaDeConhecimento[]>();
  constructor(private areasService: AreasServiceService, private router: Router){}

  public ngOnInit(): void {
    this.getAreasDeConhecimento();
  }

  public getAreasDeConhecimento(): void {
    this.areasService.getAllAreas().subscribe((areas) => {
      this.areas = areas;
      console.log(areas);
    });
  }

  public loadArea():void{
    this.areasService.getAllAreas().subscribe((areas) => {
      this.areas = areas;
      console.log(areas);
    });
  }


  public deleteArea(area: AreaDeConhecimento): void {
    this.areasService.deleteArea(area).subscribe(
      (areas: AreaDeConhecimento[]) => {
        this.areasUpdated.emit(areas);
        this.loadArea();
      },
      (error) => {
        if (error.status === 500) {
          alert('Antes de excluir a área, é necessário deletar os livros associados.');
        } else {
          console.error('Erro ao excluir área:', error);
        }
      }
    );
  }

  public navigateToEditPage(areaId: number): void {
    this.router.navigate(['/list-areas/edit-area', areaId]);
  }
  
  public showDetails(): void{
    
  }
}
