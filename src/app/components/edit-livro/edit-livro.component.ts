import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AreaDeConhecimento, Autor, Livro } from '../../models/models';
import { livrariaListService } from '../../services/livraria-list.service';
import { AreasServiceService } from '../../services/areas-service.service';
import { AutoresService } from '../../services/autores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-livro',
  templateUrl: './edit-livro.component.html',
  styleUrl: './edit-livro.component.css',
})
export class EditLivroComponent {
  livros: Livro[] = []
  @Input() livro: Livro = new Livro(0, 0, 0, 0);
  @Output() public livrosUpdated = new EventEmitter<Livro[]>();
  public areasDeConhecimento!: AreaDeConhecimento[];
  public autores: Autor[] = [];

  constructor(
    private livrariaListService: livrariaListService,
    private areasService: AreasServiceService,
    private autoresService: AutoresService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAreasDeConhecimento();
    this.getAutores();
    this.loadLivros();
    this.route.params.subscribe(params => {
      const livroId = +params['id'];
      // Chame o serviço para obter o livro pelo ID
      this.livrariaListService.getLivrosById(livroId).subscribe((livro: Livro) => {
        // Agora você pode usar o livro retornado para preencher os campos do formulário
        this.livro = livro;
      });
    });
  }

  public getAutores(): void {
    this.autoresService.getAutores().subscribe((autoresLivro) => {
      this.autores = autoresLivro;
    });
  }

  public loadLivros() {
    this.livrariaListService.getLivros().subscribe((result: Livro[]) => {
      this.livros = result;
      console.log('Dados recebidos:', this.livros);
    });
  } 

  public editLivro(livro: Livro): void {
    livro.livroId = livro.livroId
    console.log(livro.livroId)


    const livroParaEditar = this.livros.find(l => l.livroId === livro.livroId);
    console.log(livroParaEditar)
    if (livroParaEditar) {
        const areaIdSelecionada = +livro.areaId;
        const area = this.areasDeConhecimento.find(a => a.areaId === areaIdSelecionada);

        if (area) {
            livroParaEditar.areaNome = area.areaNome;

            const autorExistente = this.autores.find(a => a.autorNome === livro.autor);

            if (!autorExistente) {
                const novoAutor: Autor = {
                    autorId: Math.floor(Math.random() * 101),
                    autorNome: livro.autor,
                };

                console.log(novoAutor);

                this.autoresService.addAutor(novoAutor).subscribe(() => {
                    this.continuarEdicaoLivro(livroParaEditar);
                });
            } else {
                this.continuarEdicaoLivro(livroParaEditar);
            }
        } else {
            console.error('Area not found for ID:', livro.areaId);
        }
    } else {
        console.error('Livro not found for ID:', livro.livroId);
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
