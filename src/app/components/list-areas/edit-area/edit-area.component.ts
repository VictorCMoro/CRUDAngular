import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AreaDeConhecimento } from '../../../models/models';
import { AreasServiceService } from '../../../services/areas-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.css'],
})
export class EditAreaComponent {
  areas: AreaDeConhecimento[] = [];
  @Input() area: AreaDeConhecimento = new AreaDeConhecimento(0, []);
  @Output() public areasUpdated = new EventEmitter<AreaDeConhecimento[]>();

  constructor(
    private areasService: AreasServiceService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.loadAreas();
    this.getAreaById();
  }

  public loadAreas() {
    this.areasService
      .getAllAreas()
      .subscribe((result: AreaDeConhecimento[]) => {
        this.areas = result;
        console.log('Dados recebidos:', this.areas);
      });
  }

  public editArea(area: AreaDeConhecimento): void {
    if(!area.areaNome){
      alert('Preencha o nome da área para editar.')
      return
    }
    const areaParaEditar = this.areas.find(
      (a) => a.areaId === this.area.areaId
    );

    if (areaParaEditar) {
      console.log('Área encontrada para edição:', areaParaEditar);

      areaParaEditar.areaNome = area.areaNome;

      this.continuarEdicaoArea(areaParaEditar);
    } else {
      console.error('Área não encontrada para ID:', this.area.areaId);
    }
  }

  private continuarEdicaoArea(area: AreaDeConhecimento): void {
    console.log('Continuando edição da área:', area);

    this.areasService
      .editArea(area)
      .subscribe((areas: AreaDeConhecimento[]) => {
        alert('Área editada com sucesso. ');
        this.areasUpdated.emit(areas);
      });
  }

  public getAreaById(): void {
    this.route.params.subscribe((params) => {
      const areaId = +params['id'];

      console.log(areaId);

      if (!isNaN(areaId)) {
        this.areasService
          .getAreaById(areaId)
          .subscribe((area: AreaDeConhecimento) => {
            this.area = area;
          });
      } else {
        console.error('ID da área inválido:', params['id']);
      }
    });
  }
}
