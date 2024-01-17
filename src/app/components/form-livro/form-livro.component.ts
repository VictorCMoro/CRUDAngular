import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AreaDeConhecimento, Livro } from '../../models/models';
import { AreasServiceService } from '../../services/areas-service.service';
import { AddLivroService } from '../../services/add-livro.service';

@Component({
  selector: 'app-form-livro',
  templateUrl: './form-livro.component.html',
  styleUrls: ['./form-livro.component.css'],
})
export class FormLivroComponent {
  @Input() public livro: Livro = new Livro(0, 0, 0);
  @Output() public livrosUpdated = new EventEmitter<Livro[]>();
  public areasDeConhecimento!: AreaDeConhecimento[];

  constructor(
    private areasService: AreasServiceService,
    private addLivroService: AddLivroService,
  ) {}

  public ngOnInit(): void {
    this.getAreasDeConhecimento();
  }

  public getAreasDeConhecimento(): void {
    this.areasService.getAllAreas().subscribe((areas) => {
      this.areasDeConhecimento = areas;
      console.log(areas);
    });
  }

  public addLivro(livro: Livro): void {
    livro.livroId = Math.floor(Math.random() * 101);

    const area = this.areasDeConhecimento[livro.areaId];
    if (area) {
      livro.areaNome = area.areaNome;
      this.addLivroService.addLivro(livro).subscribe((livros: Livro[]) => {
        this.livrosUpdated.emit(livros);
      });
    } else {
      console.error('Area not found for ID:', livro.areaId);
    }
  }
}
