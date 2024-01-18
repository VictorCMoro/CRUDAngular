import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AreaDeConhecimento, Autor, Livro } from '../../models/models';
import { livrariaListService } from '../../services/livraria-list.service';
import { AreasServiceService } from '../../services/areas-service.service';
import { AutoresService } from '../../services/autores.service';

@Component({
  selector: 'app-edit-livro',
  templateUrl: './edit-livro.component.html',
  styleUrl: './edit-livro.component.css',
})
export class EditLivroComponent {
  @Input() livro: Livro = new Livro(0, 0, 0);
  @Output() public livrosUpdated = new EventEmitter<Livro[]>();
  public areasDeConhecimento!: AreaDeConhecimento[];
  public autores: Autor[] = [];

  constructor(
    private livrariaListService: livrariaListService,
    private areasService: AreasServiceService,
    private autoresService: AutoresService
  ) {}

  public ngOnInit() {
    this.getAreasDeConhecimento();
    this.getAutores();
  }

  public getAutores(): void {
    this.autoresService.getAutores().subscribe((autoresLivro) => {
      this.autores = autoresLivro;
    });
  }

  public editLivro(livro: Livro): void {
    const area = this.areasDeConhecimento[livro.areaId];

    if (area) {
      livro.areaNome = area.areaNome;

      const autorExistente = this.autores.find(
        (a) => a.autorNome === livro.autor
      );

      if (!autorExistente) {
        const novoAutor: Autor = {
          autorId: Math.floor(Math.random() * 101),
          autorNome: livro.autor,
        };

        console.log(novoAutor);

        this.autoresService.addAutor(novoAutor).subscribe(() => {
          this.continuarEdicaoLivro(livro);
        });
      } else {
        this.continuarEdicaoLivro(livro);
      }
    } else {
      console.error('Area not found for ID:', livro.areaId);
    }
  }

  private continuarEdicaoLivro(livro: Livro): void {
    this.livrariaListService.editLivro(livro).subscribe((livros: Livro[]) => {
      this.livrosUpdated.emit(livros);
    });
  }

  public getAreasDeConhecimento(): void {
    this.areasService.getAllAreas().subscribe((areas) => {
      this.areasDeConhecimento = areas;
      console.log(areas);
    });
  }
}
