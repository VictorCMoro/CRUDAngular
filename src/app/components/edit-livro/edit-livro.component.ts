import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AreaDeConhecimento, Livro } from '../../models/models';
import { livrariaListService } from '../../services/livraria-list.service';
import { AreasServiceService } from '../../services/areas-service.service';

@Component({
  selector: 'app-edit-livro',
  templateUrl: './edit-livro.component.html',
  styleUrl: './edit-livro.component.css',
})
export class EditLivroComponent {
  @Input() livro: Livro = new Livro(0, 0, 0);
  @Output() public livrosUpdated = new EventEmitter<Livro[]>();
  public areasDeConhecimento!: AreaDeConhecimento[];

  constructor(
    private livrariaListService: livrariaListService,
    private areasService: AreasServiceService
  ) {}

  public ngOnInit(){
    this.getAreasDeConhecimento()
  }

  public editLivro(livro: Livro) {
    this.livrariaListService
      .editLivro(livro)
      .subscribe((livros: Livro[]) => this.livrosUpdated.emit(livros));
  }

  public getAreasDeConhecimento(): void {
    this.areasService.getAllAreas().subscribe((areas) => {
      this.areasDeConhecimento = areas;
      console.log(areas);
    });
  }
}
