import { Component, EventEmitter, Output } from '@angular/core';
import { AreaDeConhecimento, Autor, Livro } from './models/models';
import { livrariaListService } from './services/livraria-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jogos.UI';
  livros: Livro[] = []
  areaDeConhecimento: AreaDeConhecimento[] = []
  autor: Autor[] = []

  @Output() livrosUpdated = new EventEmitter<Livro[]>();

  constructor(private LivrariaListService: livrariaListService){}


  updateLivros(livros: Livro[]){
    this.livros = livros;
  }

  deleteLivro(livro: Livro) {
    this.LivrariaListService.deleteLivro(livro).subscribe((livros: Livro[]) => this.livrosUpdated.emit(livros));
  }
}

