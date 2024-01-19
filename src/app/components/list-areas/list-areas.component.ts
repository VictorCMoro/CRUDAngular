import { Component, EventEmitter, Output } from '@angular/core';
import { AreaDeConhecimento } from '../../models/models';
import { livrariaListService } from '../../services/livraria-list.service';
import { AreasServiceService } from '../../services/areas-service.service';

@Component({
  selector: 'app-list-areas',
  templateUrl: './list-areas.component.html',
  styleUrl: './list-areas.component.css'
})
export class ListAreasComponent {
  areas: AreaDeConhecimento[] = []
  @Output() public areasUpdated = new EventEmitter<AreaDeConhecimento[]>();
  constructor(private areasService: AreasServiceService){}

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


  public deleteArea(area: AreaDeConhecimento): void{
    this.areasService.deleteArea(area).subscribe((areas: AreaDeConhecimento[]) => {
      this.areasUpdated.emit(areas)
      this.loadArea()
    })
  }


  
  public showDetails(): void{
    
  }
}
