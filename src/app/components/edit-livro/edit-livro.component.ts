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
    this.getLivroById();
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
    const livroParaEditar = this.livros.find(l => l.livroId === this.livro.livroId);
  
    if (livroParaEditar) {
      console.log('Livro encontrado para edição:', livroParaEditar);
  
      const areaIdSelecionada = +livro.areaId;
      const autorIdSelecionado = +livro.autorId;
      const area = this.areasDeConhecimento.find(a => a.areaId === areaIdSelecionada);
      const autor = this.autores.find(a => a.autorId === autorIdSelecionado);
  
      if (area) {
        livroParaEditar.areaNome = area.areaNome;
        livroParaEditar.areaId = area.areaId;
        livroParaEditar.livroNome = livro.livroNome;
        livroParaEditar.ano = livro.ano;
  
        if (autor) {
          livroParaEditar.autor = autor.autorNome;
          livroParaEditar.autorId = autor.autorId;
          this.continuarEdicaoLivro(livroParaEditar);
        } else {
          console.error('Autor não encontrado para ID:', livro.autorId);
        }
      } else {
        console.error('Área não encontrada para ID:', livro.areaId);
      }
    } else {
      console.error('Livro não encontrado para ID:', this.livro.livroId);
    }
  }
  
  
  private continuarEdicaoLivro(livro: Livro): void {
    console.log('Continuando edição do livro:', livro);
  
    this.livrariaListService.editLivro(livro).subscribe((livros: Livro[]) => {
      console.log('Livro editado com sucesso. Novos livros:', livros);
      this.livrosUpdated.emit(livros);
    });
  }

  public getLivroById(): void {
    this.route.params.subscribe(params => {
      const livroId = +params['id']; 
  
      console.log(livroId);
  
      if (!isNaN(livroId)) {
        this.livrariaListService.getLivrosById(livroId).subscribe((livro: Livro) => {
          this.livro = livro;
        });
      } else {
        console.error('ID do livro inválido:', params['id']);
      }
    });
  }
  

  public getAreasDeConhecimento(): void {
    this.areasService.getAllAreas().subscribe((areas) => {
      this.areasDeConhecimento = areas;
      console.log(areas);
    });
  }
}
