import { Component, EventEmitter, Output } from '@angular/core';
import { Livro } from '../../models/models';
import { livrariaListService } from '../../services/livraria-list.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AddLivroService } from '../../services/add-livro.service';

@Component({
  selector: 'app-list-livros',
  templateUrl: './list-livros.component.html',
  styleUrl: './list-livros.component.css',
})
export class ListLivrosComponent {
  livros: Livro[] = [];
  imagemRecebida: string = '';
  @Output() public livrosUpdated = new EventEmitter<Livro[]>();
  @Output() public editLivrosClicked = new EventEmitter<Livro>();
  constructor(
    private LivrariaListService: livrariaListService,
    private router: Router,
    private addService: AddLivroService
  ) {}

  public ngOnInit(): void {
    this.LivrariaListService.getLivros().subscribe((result: Livro[]) => {
      this.livros = result;
      console.log('Dados recebidos:', this.livros);
    });
  }

  public loadLivros() {
    this.LivrariaListService.getLivros().subscribe((result: Livro[]) => {
      this.livros = result;
      console.log('Dados recebidos:', this.livros);
       
    });
  }

  public navigateToEditPage(livroId: number): void {
    this.router.navigate(['/list-livros/edit-livro', livroId]);
  }

  public deleteLivro(livro: Livro) {
    this.LivrariaListService.deleteLivro(livro).subscribe((livros: Livro[]) => {
      this.livrosUpdated.emit(livros);
      this.loadLivros();
    });
  }

  public editLivro(livro: Livro) {
    this.editLivrosClicked.emit(livro);
  }
}
