import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AreaDeConhecimento, Autor, Livro } from '../../models/models';
import { AreasServiceService } from '../../services/areas-service.service';
import { AddLivroService } from '../../services/add-livro.service';
import { AutoresService } from '../../services/autores.service';

@Component({
  selector: 'app-form-livro',
  templateUrl: './form-livro.component.html',
  styleUrls: ['./form-livro.component.css'],
})
export class FormLivroComponent {
  @Input() public livro: Livro = new Livro(0, 0, 0, 0);
  @Output() public livrosUpdated = new EventEmitter<Livro[]>();
  public areasDeConhecimento!: AreaDeConhecimento[];
  public autores: Autor[] = [];

  constructor(
    private areasService: AreasServiceService,
    private addLivroService: AddLivroService,
    private autoresService: AutoresService
  ) {}

  public ngOnInit(): void {
    this.getAreasDeConhecimento();
    this.getAutores();
  }

  public getAreasDeConhecimento(): void {
    this.areasService.getAllAreas().subscribe((areas) => {
      this.areasDeConhecimento = areas;
      console.log(areas);
    });
  }

  public addLivro(livro: Livro): void {
    livro.livroId = Math.floor(Math.random() * 101);

    // console.log('livro.areaId:', livro.areaId); // Adicione esta linha

    const areaIdSelecionada = +livro.areaId;
    console.log(areaIdSelecionada);
    const area = this.areasDeConhecimento.find(
      (a) => a.areaId === areaIdSelecionada
    );
    const autorIdSelecionado = +livro.autorId;
    const autor = this.autores.find((a) => a.autorId === autorIdSelecionado);
    console.log(autor);
    console.log(area);
    if (area) {
      livro.areaNome = area.areaNome;

      if (autor) {
        livro.autor = autor.autorNome;
      }

      // const novoAutor: Autor = {
      //   autorId: Math.floor(Math.random() * 101),
      //   autorNome: livro.autor
      // };

      this.addLivroService.addLivro(livro).subscribe((livros: Livro[]) => {
        this.livrosUpdated.emit(livros);
      });
    } else {
      console.error('Area not found for ID:', areaIdSelecionada);
    }
  }

  public getAutores(): void {
    this.autoresService.getAutores().subscribe((autoresLivro) => {
      this.autores = autoresLivro;
    });
  }

  public addAutor(autor: Autor): void {
    autor.autorId = Math.floor(Math.random() * 101);
    this.autoresService.addAutor(autor).subscribe((autoresLivro: Autor[]) => {
      this.autores = autoresLivro;
    });
  }
}
