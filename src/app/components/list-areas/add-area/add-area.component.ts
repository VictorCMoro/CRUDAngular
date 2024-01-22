import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AreaDeConhecimento } from '../../../models/models';
import { AreasServiceService } from '../../../services/areas-service.service';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrl: './add-area.component.css',
})
export class AddAreaComponent {
  @Input() public area: AreaDeConhecimento = new AreaDeConhecimento(0, []);
  @Output() public areaUpdated = new EventEmitter<AreaDeConhecimento[]>();
  areas: AreaDeConhecimento[] = [];

  constructor(private areasService: AreasServiceService) {}

  public ngOnInit(): void {
    this.loadArea();
  }

  public AddArea(area: AreaDeConhecimento): void {
    if(!area.areaNome){
      alert('Preencha o nome da área antes de realizar o cadastro.')
      return
    }
    area.areaId = Math.floor(Math.random() * 101);

    this.areasService
      .addArea(area)
      .subscribe((result: AreaDeConhecimento[]) =>
        this.areaUpdated.emit(result)
      );
    console.log(area);
  }

  public loadArea(): void {
    this.areasService.getAllAreas().subscribe((areas) => {
      this.areas = areas;
      console.log(areas);
    });
  }
}
